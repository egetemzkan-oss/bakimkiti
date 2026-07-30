export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-blue-500 text-white">

      <div className="max-w-7xl mx-auto px-5 py-14 lg:py-20">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>

            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              🚗 Türkiye'nin Bakım Kiti Platformu
            </span>

            <h1 className="text-4xl lg:text-6xl font-extrabold mt-6 leading-tight">
              Aracınıza Uygun
              <br />
              Bakım Kitini
              <br />
              30 Saniyede Bulun
            </h1>

            <p className="mt-6 text-blue-100 text-lg">
              Şase numarasıyla veya araç bilgilerinizi seçerek
              aracınıza tam uyumlu bakım kitini saniyeler içinde bulun.
            </p>

            <div className="flex gap-4 mt-8">

              <button className="bg-white text-blue-700 px-6 py-4 rounded-xl font-bold hover:scale-105 transition">
                Şase ile Ara
              </button>

              <button className="border border-white px-6 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition">
                Araç Seç
              </button>

            </div>

          </div>

          <div className="flex justify-center">

            <img
              src="/cars/golf7.png"
              alt="Golf 7"
              className="max-h-[420px] object-contain drop-shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}