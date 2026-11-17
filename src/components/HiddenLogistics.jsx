import React from "react";
import { useTranslation } from "react-i18next";

export default function HiddenLogistics() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("hiddenLogistics.features.cargoRelease.title"),
      description: t("hiddenLogistics.features.cargoRelease.description"),
      path: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
    },
    {
      title: t("hiddenLogistics.features.behandle.title"),
      description: t("hiddenLogistics.features.behandle.description"),
      path: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    },
    {
      title: t("hiddenLogistics.features.cargoEvent.title"),
      description: t("hiddenLogistics.features.cargoEvent.description"),
      path: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },
    {
      title: t("hiddenLogistics.features.stid.title"),
      description: t("hiddenLogistics.features.stid.description"),
      path: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
  ];

  const lifecycle = [
    {
      title: t("hiddenLogistics.lifecycle.declaration"),
      subtitle: "(PIB/PEB)",
      path: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      active: true,
    },
    {
      title: t("hiddenLogistics.lifecycle.ceisaResponse"),
      subtitle: "(SPPB/SPJM)",
      path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Cargo Release",
      subtitle: "& Discharge",
      path: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
    },
    {
      title: t("hiddenLogistics.lifecycle.behandle"),
      subtitle: "Yard Stacking",
      path: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    },
    {
      title: "Gate In/Out",
      subtitle: "& Loading",
      paths: [
        "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z",
        "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a2 2 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
      ],
    },
    {
      title: "Delivery /",
      subtitle: "Export",
      path: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z",
      completed: true,
    },
  ];

  return (
    <div
      id={"hidden-logistics-ecosystem"}
      className={"hidden"}
      aria-hidden={"true"}
    >
      <section
        className={
          "bg-slate-900 py-24 px-6 lg:px-12 relative overflow-hidden border-y border-slate-800"
        }
        id={"solution"}
      >
        <div
          className={
            "absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-10 -ml-40 -mt-20"
          }
        ></div>

        <div
          className={
            "absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600 rounded-full blur-[120px] opacity-10 -mr-20 -mb-20"
          }
        ></div>

        <div className={"max-w-screen-xl mx-auto relative z-10"}>
          <div className={"text-center max-w-3xl mx-auto mb-16"}>
            <div
              className={
                "inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider border border-slate-700"
              }
            >
              <span
                className={
                  "w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"
                }
              ></span>

              {t("hiddenLogistics.badge")}
            </div>

            <h2
              className={
                "text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight"
              }
            >
              {t("hiddenLogistics.title")}
            </h2>

            <p className={"text-lg text-slate-400"}>
              {t("hiddenLogistics.description")}{" "}
              <span className={"text-white font-bold"}>end-to-end</span>.
            </p>
          </div>

          <div
            className={
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            }
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={
                  "bg-slate-950/60 border border-slate-700 hover:border-red-500 rounded-2xl p-6 transition duration-300 backdrop-blur-sm group"
                }
              >
                <div
                  className={
                    "w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300"
                  }
                >
                  <svg
                    className={"w-5 h-5 text-red-500"}
                    fill={"none"}
                    stroke={"currentColor"}
                    viewBox={"0 0 24 24"}
                  >
                    <path
                      d={feature.path}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                      strokeWidth={"2"}
                    ></path>
                  </svg>
                </div>

                <h3 className={"text-white font-bold mb-2"}>{feature.title}</h3>

                <p className={"text-sm text-slate-400"}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className={
              "bg-slate-950 border border-slate-800 rounded-2xl p-6 lg:p-10 relative"
            }
          >
            <h4
              className={
                "text-center text-slate-300 font-bold mb-8 text-sm uppercase tracking-widest"
              }
            >
              {t("hiddenLogistics.lifecycle.title")}
            </h4>

            <div className={"relative"}>
              <div
                className={
                  "hidden lg:block absolute top-6 left-10 right-10 h-0.5 bg-slate-800"
                }
              ></div>

              <div
                className={
                  "flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 relative z-10 overflow-x-auto pb-4"
                }
              >
                {lifecycle.map((step, index) => (
                  <div
                    key={index}
                    className={"flex flex-col items-center min-w-[100px]"}
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-slate-900 border-2 flex items-center justify-center mb-3 ${
                        step.active
                          ? "border-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                          : step.completed
                            ? "border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                            : "border-slate-600 text-slate-400"
                      }`}
                    >
                      <svg
                        className={"w-5 h-5"}
                        fill={"none"}
                        stroke={"currentColor"}
                        viewBox={"0 0 24 24"}
                      >
                        {step.paths ? (
                          step.paths.map((path, pathIndex) => (
                            <path
                              key={pathIndex}
                              d={path}
                              strokeLinecap={"round"}
                              strokeLinejoin={"round"}
                              strokeWidth={"2"}
                            ></path>
                          ))
                        ) : (
                          <path
                            d={step.path}
                            strokeLinecap={"round"}
                            strokeLinejoin={"round"}
                            strokeWidth={"2"}
                          ></path>
                        )}
                      </svg>
                    </div>

                    <span
                      className={`text-xs font-bold text-center ${
                        step.active
                          ? "text-white"
                          : step.completed
                            ? "text-emerald-400"
                            : "text-slate-400"
                      }`}
                    >
                      {step.title}
                      <br />
                      {step.subtitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
