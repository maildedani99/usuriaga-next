"use client";
import { useRouter } from 'next/navigation';

export default function ModalAlert({ message = "Prueba modal alert" }) {

  const router = useRouter();



  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg my-auto mx-4">
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="text-lg font-semibold">Prueba modal</h3>
          <button
            onClick={() => router.back()}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">{message}</div>
      </div>
    </div>
  );
}
