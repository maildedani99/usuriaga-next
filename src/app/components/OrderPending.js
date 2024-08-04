'use client';

import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import Error from "./Error";
//import html2pdf from 'html2pdf.js/dist/html2pdf.bundle';
//import { useRef } from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import Spinner from "./Spinner";
import Image from "next/image";

export default function OrderPending({ ds_order }) {
   // const printRef = useRef();

    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}orders/order/${ds_order}`, fetcher);

    if (error) return <Error />;

    /* const handleDownloadPDF = () => {
        const element = printRef.current;
        const opt = {
            margin: 1,
            filename: `pedido_${ds_order}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().from(element).set(opt).save();
    }; */

    return (
        !data ?
        <Spinner />
        :
        (
            <div className="container mx-auto p-4">
                <div className="flex justify-end mb-4">
                    <button >
                        <FaRegFilePdf size={30} />
                    </button>
                </div>
                <div id="printable-content"  className="p-4 bg-white rounded-lg shadow-lg container border ">
                    <div className="text-center mb-4">
                    <Image
                    src="/logogrisprueba.png"
                    alt="Usuriaga"
                    width={150} // Especifica las dimensiones para que Next.js pueda optimizar la imagen
                    height={auto} // Asegúrate de que auto esté entre comillas o ajusta el valor según sea necesario
                    style={{ maxWidth: '150px', height: 'auto', margin: '0 auto' }}
                />
                        <h1 className="text-2xl font-bold mt-20">Detalle de tu pedido</h1>
                    </div>
                    <div className="border rounded-lg p-4 mb-4 mt-8">
                        <h2 className="text-xl font-semibold">Información del Pedido</h2>
                        <p><strong>Numero de Pedido:</strong> {data.ds_order}</p>
                        <p><strong>Estado:</strong> {data.status}</p>
                        <p><strong>Total artículos:</strong> {data.items.length}</p>
                        <p><strong>Total:</strong> {data.total} €</p>
                        <p><strong>Fecha de Creación:</strong> {new Date(data.created_at).toLocaleString()}</p>
                    </div>
                    <div className="border rounded-lg p-4 mb-4">
                        <h2 className="text-xl font-semibold">Información del Cliente</h2>
                        <p><strong>Nombre:</strong> {data.customer.first_name} {data.customer.last_name}</p>
                        <p><strong>Email:</strong> {data.customer.email}</p>
                        <p><strong>Teléfono:</strong> {data.customer.phone}</p>
                        <p><strong>Dirección:</strong> {data.customer.address}, {data.customer.city}, {data.customer.province}, {data.customer.postal_code}</p>
                    </div>
                   
                </div>
            </div>
        )
    );
}
