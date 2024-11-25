import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function BannerPromo() {

  return (
    <div
      className={`flex w-full bg-[#1B1B1B] py-5 justify-around text-center -mt-1 ${montserrat.className}`}
    >
      {/* Sección de "Black Friday" */}
      <div className="text-5xl text-primary font-bold uppercase w-1/3 my-auto ">
        <h2
          style={{
            textShadow: "3px 3px 6px #dac89599",
          }}
        >
          Black   Friday
        </h2>
      
      </div>

      {/* Sección del descuento */}
      <div className="text-5xl text-primary font-semibold uppercase w-1/3 my-auto">
        {/* Descuento con efecto glow */}
        <h2
          className="text-6xl text-primary font-extrabold uppercase tracking-wide "
          style={{
            textShadow: " 0 0 3px #000000, 0 0 50px #f5e6c9"
          }}
        >
          -25%
        </h2>
      </div>

      {/* Sección de fecha */}
      <div className="flex flex-col  my-auto w-1/3 uppercase text-white">
        <h2 className="  ">En toda la web</h2>
        <h2 className="   uppercase">Del 25 al 30 de Noviembre</h2>
      </div>
    </div>
  );
}
