import React from "react";

export default function ModuleOverview() {
  return (
    <section
      id={"module-overview"}
      className={"px-5 lg:px-12 -mt-20 lg:-mt-24 relative z-10 scroll-mt-28"}
      aria-label={"Ringkasan modul"}
    >
      <div
        className={
          "max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4"
        }
      >
        <a
          href={"#module-e-declaration"}
          onClick={() => {
            showModuleDetail("module-e-declaration");
          }}
          className={"mod-card"}
        >
          <div className={"flex items-center justify-between gap-2"}>
            <span className={"text-xs font-bold text-red-600"}>01</span>
          </div>
          <div className={"mt-2 sm:mt-4 text-lg font-bold text-slate-900"}>
            e-Declaration
          </div>
          <p
            className={"mt-1 text-[13px] text-slate-600 leading-relaxed flex-1"}
          >
            Buat dokumen pabean dan pantau respons CEISA.
          </p>
          <span
            className={
              "mt-4 hidden sm:inline-flex items-center gap-1 text-[13px] font-semibold text-red-700"
            }
          >
            Lihat detail{" "}
            <svg
              className={"w-3.5 h-3.5"}
              fill={"none"}
              stroke={"currentColor"}
              strokeWidth={"2"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              viewBox={"0 0 24 24"}
              aria-hidden={"true"}
            >
              <path d={"M12 5v14M6 13l6 6 6-6"}></path>
            </svg>
          </span>
        </a>
        <a
          href={"#module-drepo"}
          onClick={() => {
            showModuleDetail("module-drepo");
          }}
          className={"mod-card"}
        >
          <div className={"flex items-center justify-between gap-2"}>
            <span className={"text-xs font-bold text-red-600"}>02</span>
          </div>
          <div className={"mt-2 sm:mt-4 text-lg font-bold text-slate-900"}>
            D’Repo
          </div>
          <p
            className={"mt-1 text-[13px] text-slate-600 leading-relaxed flex-1"}
          >
            Arsip dokumen pabean, legal, dan audit.
          </p>
          <span
            className={
              "mt-4 hidden sm:inline-flex items-center gap-1 text-[13px] font-semibold text-red-700"
            }
          >
            Lihat detail{" "}
            <svg
              className={"w-3.5 h-3.5"}
              fill={"none"}
              stroke={"currentColor"}
              strokeWidth={"2"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              viewBox={"0 0 24 24"}
              aria-hidden={"true"}
            >
              <path d={"M12 5v14M6 13l6 6 6-6"}></path>
            </svg>
          </span>
        </a>
        <a
          href={"#module-scan-genius"}
          onClick={() => {
            showModuleDetail("module-scan-genius");
          }}
          className={"mod-card"}
        >
          <div className={"flex items-center justify-between gap-2"}>
            <span className={"text-xs font-bold text-red-600"}>03</span>
          </div>
          <div className={"mt-2 sm:mt-4 text-lg font-bold text-slate-900"}>
            ScanGenius
          </div>
          <p
            className={"mt-1 text-[13px] text-slate-600 leading-relaxed flex-1"}
          >
            Isi draft otomatis dari invoice & packing list.
          </p>
          <span
            className={
              "mt-4 hidden sm:inline-flex items-center gap-1 text-[13px] font-semibold text-red-700"
            }
          >
            Lihat detail{" "}
            <svg
              className={"w-3.5 h-3.5"}
              fill={"none"}
              stroke={"currentColor"}
              strokeWidth={"2"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              viewBox={"0 0 24 24"}
              aria-hidden={"true"}
            >
              <path d={"M12 5v14M6 13l6 6 6-6"}></path>
            </svg>
          </span>
        </a>
        <a
          href={"#module-api"}
          onClick={() => {
            showModuleDetail("module-api");
          }}
          className={"mod-card"}
        >
          <div className={"flex items-center justify-between gap-2"}>
            <span className={"text-xs font-bold text-red-600"}>04</span>
          </div>
          <div className={"mt-2 sm:mt-4 text-lg font-bold text-slate-900"}>
            API Trade2Gov
          </div>
          <p
            className={"mt-1 text-[13px] text-slate-600 leading-relaxed flex-1"}
          >
            Hubungkan ERP ke{" "}
            <span className={"whitespace-nowrap"}>e-Declaration</span>.
          </p>
          <span
            className={
              "mt-4 hidden sm:inline-flex items-center gap-1 text-[13px] font-semibold text-red-700"
            }
          >
            Lihat detail{" "}
            <svg
              className={"w-3.5 h-3.5"}
              fill={"none"}
              stroke={"currentColor"}
              strokeWidth={"2"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              viewBox={"0 0 24 24"}
              aria-hidden={"true"}
            >
              <path d={"M12 5v14M6 13l6 6 6-6"}></path>
            </svg>
          </span>
        </a>
        <a
          href={"#module-cross-border"}
          onClick={() => {
            showModuleDetail("module-cross-border");
          }}
          className={"mod-card"}
        >
          <div className={"flex items-center justify-between gap-2"}>
            <span className={"text-xs font-bold text-red-600"}>05</span>
          </div>
          <div className={"mt-2 sm:mt-4 text-lg font-bold text-slate-900"}>
            Cross Border
          </div>
          <p
            className={"mt-1 text-[13px] text-slate-600 leading-relaxed flex-1"}
          >
            Pertukaran data kepabeanan dengan negara mitra di Asia dan Eropa.
          </p>
          <span
            className={
              "mt-4 hidden sm:inline-flex items-center gap-1 text-[13px] font-semibold text-red-700"
            }
          >
            Lihat detail{" "}
            <svg
              className={"w-3.5 h-3.5"}
              fill={"none"}
              stroke={"currentColor"}
              strokeWidth={"2"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              viewBox={"0 0 24 24"}
              aria-hidden={"true"}
            >
              <path d={"M12 5v14M6 13l6 6 6-6"}></path>
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
