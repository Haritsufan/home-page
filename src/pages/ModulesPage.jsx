import React from "react";
import ModuleIntro from "../components/ModuleIntro";
import ModuleOverview from "../components/ModuleOverview";
import ModuleSpacer from "../components/ModuleSpacer";
import ModuleDeclaration from "../components/ModuleDeclaration";
import ModuleRepo from "../components/ModuleRepo";
import ModuleScanGenius from "../components/ModuleScanGenius";
import ModuleApi from "../components/ModuleApi";
import ModuleCrossBorder from "../components/ModuleCrossBorder";
import ModuleContact from "../components/ModuleContact";

export default function ModulesPage(){
  return (
    <div id="module-page">
      <ModuleIntro />
      <ModuleOverview />
      <ModuleSpacer />
      <ModuleDeclaration />
      <ModuleRepo />
      <ModuleScanGenius />
      <ModuleApi />
      <ModuleCrossBorder />
      <ModuleContact />
    </div>
  );
}
