"use client";

import { demoKit } from "@/data/demo";

export default function ProductCard() {
  return (
    <div className="mt-8 bg-white rounded-3xl shadow-xl p-8 border">

      <div className="text-center">

        <div className="text-6xl mb-4">
          🚗
        </div>


        <h2 className="text-3xl font-bold text-gray-800">
          Aracınıza Özel Bakım Seti
        </h2>


        <p className="text-gray-500 mt-3">
          Periyodik bakım için hazırlanmış filtre paketi
        </p>


      </div>



      <div className="mt-8 space-y-4">


        {demoKit.kit.products.map((item)=>(

          <div
            key={item.code}
            className="flex items-center justify-between bg-slate-50 rounded-2xl p-5"
          >

            <div className="flex items-center gap-4">

              <div className="text-3xl">
                🔧
              </div>


              <div>

                <div className="font-semibold text-lg">
                  {item.name}
                </div>


                <div className="text-gray-500 text-sm">
                  {item.brand}
                </div>


              </div>

            </div>


            <div className="text-green-600 font-semibold">
              ✓ Uygun
            </div>


          </div>

        ))}


      </div>



      <div className="mt-8 border-t pt-6 text-center">


        <p className="text-gray-500">
          Bakım Seti Fiyatı
        </p>


        <div className="text-4xl font-bold text-blue-700 mt-2">
          {demoKit.kit.price.toLocaleString("tr-TR")} ₺
        </div>



        <button
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 text-lg font-semibold"
        >
          Sepete Ekle
        </button>


      </div>


    </div>
  );
}
