"use client";

import { useState } from "react";
import { vehicles } from "@/data/demo";
import ProductCard from "@/components/ProductCard";

export default function Home() {

  const [tab, setTab] = useState<"vin" | "vehicle">("vin");
  const [showKit, setShowKit] = useState(false);

  const [vin, setVin] = useState("");

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [engine, setEngine] = useState("");
  const [transmission, setTransmission] = useState("");

  const selectedBrand = vehicles.find(
    (x) => x.brand === brand
  );

  const selectedModel = selectedBrand?.models.find(
    (m) => m.name === model
  );

  const selectedEngine = selectedModel?.engines.find(
    (e) => e.name === engine
  );


  return (
    <main className="min-h-screen bg-slate-100">


      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-3xl font-bold text-blue-700">
            BakımKiti
          </h1>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl">
            Sepetim
          </button>

        </div>
      </header>



      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-2 gap-10">

          <div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Türkiye'nin Bakım Kiti Platformu
            </span>


            <h2 className="text-5xl font-bold mt-6">
              Aracınıza Uygun
              <br />
              Bakım Kitini
              <br />
              Bulun
            </h2>


            <p className="mt-6 text-gray-600 text-lg">
              Şase numarası veya araç bilgileriyle uygun bakım kitini bulun.
            </p>

          </div>



          <div className="bg-white rounded-3xl shadow-xl p-8">


            <div className="flex bg-slate-100 rounded-xl p-1 mb-8">


              <button
                onClick={()=>setTab("vin")}
                className={`flex-1 py-3 rounded-xl ${
                  tab==="vin"
                  ?"bg-blue-600 text-white"
                  :""
                }`}
              >
                Şase No
              </button>


              <button
                onClick={()=>setTab("vehicle")}
                className={`flex-1 py-3 rounded-xl ${
                  tab==="vehicle"
                  ?"bg-blue-600 text-white"
                  :""
                }`}
              >
                Araç Seç
              </button>


            </div>




            {tab==="vin" && (

              <>

              <label className="font-semibold">
                Şase Numarası
              </label>


              <input
                value={vin}
                onChange={(e)=>setVin(e.target.value)}
                className="w-full border rounded-xl p-4 mt-2"
                placeholder="WVWZZZAUZEP123456"
              />


              <button
                onClick={()=>{
                  if(vin.length>5){
                    setShowKit(true);
                  }
                }}
                className="w-full bg-blue-600 text-white rounded-xl p-4 mt-6"
              >
                Bakım Kitini Bul
              </button>


              {showKit && <ProductCard />}


              </>

            )}




            {tab==="vehicle" && (

            <div className="space-y-4">



              <select
              value={brand}
              onChange={(e)=>{
                setBrand(e.target.value);
                setModel("");
                setEngine("");
                setTransmission("");
              }}
              className="w-full border rounded-xl p-4"
              >

              <option value="">
                Marka Seçiniz
              </option>


              {vehicles.map((v)=>(
                <option key={v.brand}>
                  {v.brand}
                </option>
              ))}

              </select>





              <select
              value={model}
              onChange={(e)=>{
                setModel(e.target.value);
                setEngine("");
                setTransmission("");
              }}
              className="w-full border rounded-xl p-4"
              >

              <option value="">
                Model Seçiniz
              </option>


              {selectedBrand?.models.map((m)=>(
                <option key={m.name} value={m.name}>
                  {m.name} ({m.years})
                </option>
              ))}


              </select>





              <select
              value={engine}
              onChange={(e)=>{
                setEngine(e.target.value);
                setTransmission("");
              }}
              className="w-full border rounded-xl p-4"
              >

              <option value="">
                Motor Seçiniz
              </option>


              {selectedModel?.engines.map((e)=>(
                <option key={e.name}>
                  {e.name}
                </option>
              ))}


              </select>





              <select
              value={transmission}
              onChange={(e)=>setTransmission(e.target.value)}
              className="w-full border rounded-xl p-4"
              >

              <option value="">
                Şanzıman Seçiniz
              </option>


              {selectedEngine?.transmissions.map((t)=>(
                <option key={t}>
                  {t}
                </option>
              ))}


              </select>





              <button
              onClick={()=>setShowKit(true)}
              className="w-full bg-blue-600 text-white rounded-xl p-4"
              >
                Bakım Kitini Bul
              </button>



              {showKit && <ProductCard />}


            </div>

            )}



          </div>


        </div>


      </section>


    </main>
  );
}