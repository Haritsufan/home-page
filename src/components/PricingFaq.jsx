import React from "react";
import { useTranslation } from "react-i18next";

export default function PricingFaq() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: "pricingFaq.questions.document.title",
      answer: "pricingFaq.questions.document.answer",
    },
    {
      question: "pricingFaq.questions.quota.title",
      answer: "pricingFaq.questions.quota.answer",
    },
    {
      question: "pricingFaq.questions.scanGenius.title",
      answer: "pricingFaq.questions.scanGenius.answer",
    },
    {
      question: "pricingFaq.questions.annualContract.title",
      answer: "pricingFaq.questions.annualContract.answer",
    },
    {
      question: "pricingFaq.questions.changePlan.title",
      answer: "pricingFaq.questions.changePlan.answer",
    },
    {
      question: "pricingFaq.questions.ppjk.title",
      answer: "pricingFaq.questions.ppjk.answer",
      draft: true,
    },
  ];

  return (
    <section
      id={"pricing-faq"}
      className={"px-5 lg:px-12 py-16 lg:py-24 scroll-mt-20"}
      aria-labelledby={"h-pricing-faq"}
    >
      <div
        className={
          "max-w-screen-xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12"
        }
      >
        <div className={"lg:col-span-4"}>
          <h2
            id={"h-pricing-faq"}
            className={
              "text-3xl lg:text-4xl font-bold text-slate-900 mb-3 leading-tight"
            }
          >
            {t("pricingFaq.title")}
          </h2>

          <p className={"text-slate-600 leading-relaxed"}>
            {t("pricingFaq.contact.text")}{" "}
            <button
              type={"button"}
              onClick={() => {
                openDemoWhatsApp();
              }}
              className={
                "font-semibold text-red-700 hover:text-red-800 underline underline-offset-4"
              }
            >
              {t("pricingFaq.contact.button")}
            </button>
            .
          </p>
        </div>

        <div className={"lg:col-span-8 border-t border-slate-200"}>
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className={"faq-item group border-b border-slate-200 py-5"}
              open={index === 0 ? true : undefined}
            >
              <summary
                className={"flex items-start justify-between gap-6 text-left"}
              >
                <span
                  className={
                    "font-semibold text-slate-900 text-[15px] lg:text-base"
                  }
                >
                  {t(faq.question)}
                </span>

                <span
                  className={
                    "faq-ic shrink-0 mt-0.5 w-7 h-7 rounded-full border border-slate-200 text-slate-600 grid place-items-center transition"
                  }
                >
                  <svg
                    className={"w-4 h-4"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    viewBox={"0 0 24 24"}
                    aria-hidden={"true"}
                  >
                    <path d={"M12 5v14M5 12h14"}></path>
                  </svg>
                </span>
              </summary>

              <p
                className={
                  "mt-3 pr-12 text-[14.5px] text-slate-600 leading-relaxed"
                }
              >
                {faq.draft ? (
                  <>
                    {t("pricingFaq.questions.ppjk.answerBefore")}{" "}
                    <mark className={"draft-hl"}>
                      {t("pricingFaq.questions.ppjk.highlight")}
                    </mark>
                    <span className={"draft-note"}>
                      {t("pricingFaq.needsConfirmation")}
                    </span>
                    {t("pricingFaq.questions.ppjk.answerAfter")}
                  </>
                ) : (
                  t(faq.answer)
                )}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
