import React from "react";
import PricingDraftNotice from "../components/PricingDraftNotice";
import PricingIntro from "../components/PricingIntro";
import PricingPlans from "../components/PricingPlans";
import PricingAddons from "../components/PricingAddons";
import PricingComparison from "../components/PricingComparison";
import PricingFaq from "../components/PricingFaq";
import PricingContact from "../components/PricingContact";

export default function PricingPage() {
  return (
    <div id="pricing-page">
      <PricingDraftNotice />
      <PricingIntro />
      <PricingPlans />
      <PricingAddons />
      <PricingComparison />
      <PricingFaq />
      <PricingContact />
    </div>
  );
}
