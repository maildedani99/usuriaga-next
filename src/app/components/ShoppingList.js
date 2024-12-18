import { useContext, useEffect, useState } from "react";
import { AppContext } from "../lib/AppContext";
import ClientImage from "./ClientImage";

export default function ShoppingList() {
  const { cartItems, order, setOrder, globalDiscount } = useContext(AppContext);

  // Función para redondear a dos decimales y convertir a número
  const roundToTwoDecimals = (num) => parseFloat(num.toFixed(2));

  // Función para calcular el precio total de los elementos en el carrito
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.reduced_price ? item.reduced_price : item.price;
      const itemTotal = itemPrice * item.quantity;
      return total + itemTotal;
    }, 0);
  };

  // Cálculo del subtotal redondeado
  const totalPriceWithoutDiscount = cartItems
    ? roundToTwoDecimals(calculateTotalPrice())
    : 0;

  // Cálculo del descuento global (solo si es mayor a 0)
  const discountAmount =
    globalDiscount > 0
      ? roundToTwoDecimals(totalPriceWithoutDiscount * (globalDiscount / 100))
      : 0;

  // Precio total después de aplicar descuento
  const totalPrice = totalPriceWithoutDiscount - discountAmount;

  // Cálculo del envío
  const envio = totalPrice >= 60 ? 0 : 3.9;

  // Actualiza el estado del pedido con el precio total
  useEffect(() => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      orderAmount: roundToTwoDecimals(totalPrice + envio),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPrice, envio]);

  // Función para formatear el precio
  const formatPrice = (price) =>
    roundToTwoDecimals(price).toFixed(2).replace(".", ",");

  return (
    <div className="flex flex-col flex-1 mx-10 h-auto">
      {cartItems &&
        cartItems.length !== 0 &&
        cartItems.map((item, index) => (
          <div key={index} className="flex w-full border-t border-[#DAC895] h-auto">
            <div className="hidden sm:flex w-2/12 my-auto">
              <ClientImage
                src={item.images[0].url}
                alt="imagen"
                width={30}
                height={50}
                className="py-2"
              />
            </div>
            <div className="flex w-full ml-4 text-sm font-normal my-auto justify-between">
              <span className="flex w-2/6">{item.name}</span>
              <span className="flex flex-1 mx-auto">
                {item.reduced_price
                  ? formatPrice(item.reduced_price)
                  : formatPrice(item.price)}{" "}
                €
              </span>
              <span className="flex flex-1 mx-auto">{item.size.name}</span>
              <div className="flex flex-1">
                <div
                  className="w-3 h-3 border-2 border-[#929292] rounded-full my-auto"
                  style={{ background: item.color.color }}
                ></div>
              </div>
              <span className="flex flex-1 mx-auto">{item.quantity}</span>
              <span className="font-bold flex flex-1 justify-end">
                {formatPrice(
                  (item.reduced_price || item.price) * item.quantity
                )}{" "}
                €
              </span>
            </div>
          </div>
        ))}

      <div className="text-base mx-auto mt-16 mb-16 border-t border-primary">
        <div className="flex flex-1 mx-auto justify-between mt-3">
          <span className="">Total compra: </span>
          <span className="font-medium ml-3">
            {formatPrice(totalPriceWithoutDiscount)} €
          </span>
        </div>
        {globalDiscount > 0 && (
          <div className="flex flex-1 mx-auto justify-between mt-1">
            <span className="">Descuento: {globalDiscount}%</span>
            <span className="font-medium ml-3">-{formatPrice(discountAmount)} €</span>
          </div>
        )}
        <div className="flex flex-1 mx-auto justify-between mt-1">
          <span className="">Envío: </span>
          <span className="font-medium ml-3">{formatPrice(envio)} €</span>
        </div>
        <div className="flex flex-1 mx-auto justify-between mt-1">
          <span className="">Precio total: </span>
          <span className="font-bold ml-3">
            {formatPrice(totalPrice + envio)} €
          </span>
        </div>
      </div>
    </div>
  );
}
