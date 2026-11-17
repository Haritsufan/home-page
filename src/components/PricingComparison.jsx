
import React from "react";
import { useTranslation } from "react-i18next";

export default function PricingComparison() {
  const { t } = useTranslation();

  const groups = [
    {
      title: "pricingComparison.groups.pricing",
      rows: [
        {
          label: "pricingComparison.rows.price",
          values: [
            "pricingComparison.values.paygPrice",
            "pricingComparison.values.essentialPrice",
            "pricingComparison.values.professionalPrice",
            "pricingComparison.values.ultimatePrice",
            "pricingComparison.values.enterprisePrice",
          ],
        },
        {
          label: "pricingComparison.rows.monthlyQuota",
          values: [
            "pricingComparison.values.paygQuota",
            "pricingComparison.values.essentialQuota",
            "pricingComparison.values.professionalQuota",
            "pricingComparison.values.ultimateQuota",
            "pricingComparison.values.enterpriseQuota",
          ],
        },
        {
          label: "pricingComparison.rows.excessQuota",
          values: [
            "pricingComparison.values.notAvailable",
            "pricingComparison.values.excessPrice",
            "pricingComparison.values.excessPrice",
            "pricingComparison.values.excessPrice",
            "pricingComparison.values.contractBased",
          ],
        },
        {
          label: "pricingComparison.rows.scanGenius",
          values: [
            "pricingComparison.values.scanPrice",
            "pricingComparison.values.scanPrice",
            "pricingComparison.values.scanPrice",
            "pricingComparison.values.scanPrice",
            "pricingComparison.values.scanPrice",
          ],
        },
        {
          label: "pricingComparison.rows.users",
          values: [
            "pricingComparison.values.one",
            "pricingComparison.values.three",
            "pricingComparison.values.five",
            "pricingComparison.values.ten",
            "pricingComparison.values.asNeeded",
          ],
        },
      ],
    },
    {
      title: "pricingComparison.groups.customs",
      rows: [
        {
          label: "pricingComparison.rows.customsDocument",
          values: [true, true, true, true, true],
        },
        {
          label: "pricingComparison.rows.importCalculator",
          draft: true,
          values: [true, true, true, true, true],
        },
        {
          label: "pricingComparison.rows.whatsappNotification",
          draft: true,
          values: [false, true, true, true, true],
        },
        {
          label: "pricingComparison.rows.autoValidation",
          draft: true,
          values: [false, true, true, true, true],
        },
        {
          label: "pricingComparison.rows.templates",
          values: [false, true, true, true, true],
        },
        {
          label: "pricingComparison.rows.hsCodeAI",
          draft: true,
          values: [false, false, true, true, true],
        },
        {
          label: "pricingComparison.rows.lartas",
          draft: true,
          values: [false, false, true, true, true],
        },
      ],
    },
    {
      title: "pricingComparison.groups.team",
      rows: [
        {
          label: "pricingComparison.rows.multipleClients",
          draft: true,
          values: [false, false, true, true, true],
        },
        {
          label: "pricingComparison.rows.approval",
          values: [false, false, true, true, true],
        },
        {
          label: "pricingComparison.rows.clientPortal",
          draft: true,
          values: [false, false, false, true, true],
        },
      ],
    },
    {
      title: "pricingComparison.groups.reports",
      rows: [
        {
          label: "pricingComparison.rows.analyticsDashboard",
          draft: true,
          values: [false, false, true, true, true],
        },
        {
          label: "pricingComparison.rows.apiIntegration",
          values: [
            false,
            false,
            false,
            true,
            "pricingComparison.values.customIntegration",
          ],
        },
        {
          label: "pricingComparison.rows.activityHistory",
          draft: true,
          values: [false, false, false, true, true],
        },
      ],
    },
    {
      title: "pricingComparison.groups.support",
      rows: [
        {
          label: "pricingComparison.rows.supportChannel",
          values: [
            "pricingComparison.values.email",
            "pricingComparison.values.email",
            "pricingComparison.values.emailWhatsapp",
            "pricingComparison.values.prioritySupport",
            "pricingComparison.values.accountManager",
          ],
        },
      ],
    },
  ];

  const renderIncluded = () => (
    <>
      <span className={"inline-flex text-red-600"}>
        <svg
          className={"w-5 h-5"}
          fill={"none"}
          stroke={"currentColor"}
          strokeWidth={"2.4"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          viewBox={"0 0 24 24"}
          aria-hidden={"true"}
        >
          <path d={"M5 12.5l4.5 4.5L19 7.5"}></path>
        </svg>
      </span>
      <span className={"sr-only"}>
        {t("pricingComparison.accessibility.included")}
      </span>
    </>
  );

  const renderNotIncluded = () => (
    <>
      <span className={"text-slate-300"} aria-hidden={"true"}>
        —
      </span>
      <span className={"sr-only"}>
        {t("pricingComparison.accessibility.notIncluded")}
      </span>
    </>
  );

  return (
    <section
      id={"pricing-compare"}
      className={
        "bg-slate-50 border-y border-slate-200 px-5 lg:px-12 py-16 lg:py-20 scroll-mt-20"
      }
      aria-labelledby={"h-pricing-compare"}
    >
      <div className={"max-w-screen-xl mx-auto"}>
        <div className={"max-w-3xl mb-8"}>
          <h2
            id={"h-pricing-compare"}
            className={
              "text-3xl lg:text-4xl font-bold text-slate-900 mb-3 leading-tight"
            }
          >
            {t("pricingComparison.title")}
          </h2>

          <p className={"text-base lg:text-lg text-slate-600 leading-relaxed"}>
            {t("pricingComparison.subtitle")}
          </p>
        </div>

        <p className={"md:hidden text-xs font-medium text-slate-500 mb-2"}>
          {t("pricingComparison.mobileHint")}
        </p>

        <div
          className={
            "relative rounded-2xl border border-slate-200 bg-white overflow-x-auto"
          }
        >
          <table className={"cmp-table"}>
            <caption className={"sr-only"}>
              {t("pricingComparison.caption")}
            </caption>

            <thead>
              <tr>
                <th scope={"col"}>
                  <span className={"sr-only"}>
                    {t("pricingComparison.featureColumn")}
                  </span>
                </th>

                <th scope={"col"}>PAYG</th>
                <th scope={"col"}>Essential</th>

                <th scope={"col"} className={"is-hl"}>
                  <span
                    className={
                      "block text-[10px] font-bold uppercase tracking-wider text-red-600 mb-0.5"
                    }
                  >
                    {t("pricingComparison.recommended")}
                  </span>
                  Professional
                </th>

                <th scope={"col"}>Ultimate</th>
                <th scope={"col"}>Enterprise</th>
              </tr>
            </thead>

            <tbody>
              {groups.map((group) => (
                <React.Fragment key={group.title}>
                  <tr className={"cmp-group"}>
                    <td>{t(group.title)}</td>
                    <td colSpan={"5"}></td>
                  </tr>

                  {group.rows.map((row) => (
                    <tr key={row.label}>
                      <td className={"font-medium text-slate-800"}>
                        {row.draft ? (
                          <>
                            <mark className={"draft-hl"}>
                              {t(row.label)}
                            </mark>
                            <span className={"draft-note"}>
                              {t("pricingComparison.needsConfirmation")}
                            </span>
                          </>
                        ) : (
                          t(row.label)
                        )}
                      </td>

                      {row.values.map((value, index) => (
                        <td
                          key={`${row.label}-${index}`}
                          className={index === 2 ? "is-hl" : undefined}
                        >
                          {value === true
                            ? renderIncluded()
                            : value === false
                              ? renderNotIncluded()
                              : (
                                <span className={"text-slate-800"}>
                                  {t(value)}
                                </span>
                              )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
