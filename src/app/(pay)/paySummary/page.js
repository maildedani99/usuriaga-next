"use client";

import { useContext, useEffect } from "react";
import ShoppingList from "../../components/ShoppingList";
import { AppContext } from "../../lib/AppContext";
import { completeOrderProcess } from "../../lib/data";
import FinalizeButton from "../../components/FinalizeButton";

export default function PaySummary() {

  const { formData, order, cartItems, orderItems, setOrderItems, redsysData, setRedsysData } = useContext(AppContext);

  const itemsOrderCreate = (cartItems) => {
    let items = [];
    cartItems.forEach(item => {
      let newItem = {
        "product_id": item.id, // Utilizar el ID del elemento como product_id
        "size_id": item.size.id, // Utilizar el ID del tamaño del elemento como size_id
        "color_id": item.color.id, // Utilizar el ID del color del elemento como color_id
        "quantity": item.quantity, // Utilizar la cantidad del elemento
        "price": item.price // Utilizar el precio del elemento
      };
      items.push(newItem);
    });
    setOrderItems(items);
  }

  useEffect(()=> {
    itemsOrderCreate(cartItems)
  },[])

  return (
    formData && (
      <div className="  flex flex-col container mx-auto mt-32 py-10 px-4 lg:px-0  w-full tracking-wider  font-light">
        <h2 className="text-2xl font-bold mb-4">Resumen de la Compra</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <div className="lg:col-span-1 mb-6">
            <h3 className="text-xl font-semibold">Datos del Cliente</h3>
            <div className="text-lg">
              <p>
                {formData.first_name} {formData.last_name}
              </p>
              <p>
                {formData.address}, {formData.city}
              </p>
              <p>
                {formData.province}, {formData.postal_code}
              </p>
              <p>Teléfono: {formData.phone}</p>
              <p>Email: {formData.email}</p>
              {formData.dni && <p>DNI: {formData.dni}</p>}
            </div>
          </div>

          <div className="lg:col-span-2 mb-6">
            <h3 className="text-xl font-semibold">Detalles del Pedido</h3>
            <ShoppingList />
          </div>
        </div>
       <FinalizeButton />
      </div>
    )
  );
}
