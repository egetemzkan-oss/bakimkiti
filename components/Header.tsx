"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
            BK
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              BakımKiti
            </h1>

            <p className="text-xs text-slate-500">
              Aracına Uygun Bakım Seti
            </p>
          </div>

        </Link>

        {/* Desktop Menü */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">

          <Link
            href="#"
            className="hover:text-blue-600 transition"
          >
            Şase ile Ara
          </Link>

          <Link
            href="#"
            className="hover:text-blue-600 transition"
          >
            Araç Seç
          </Link>

          <Link
            href="#"
            className="hover:text-blue-600 transition"
          >
            Markalar
          </Link>

          <Link
            href="#"
            className="hover:text-blue-600 transition"
          >
            İletişim
          </Link>

        </nav>

        {/* Sağ */}
        <div className="flex items-center gap-3">

          <button className="w-11 h-11 rounded-xl border hover:bg-slate-100 transition">
            ❤
          </button>

          <button className="relative w-11 h-11 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white">

            🛒

            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
              0
            </span>

          </button>

        </div>

      </div>
    </header>
  );
}