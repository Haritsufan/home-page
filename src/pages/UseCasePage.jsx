import React from "react";
import IntegrationArticle from "../components/IntegrationArticle";
import AutomationArticle from "../components/AutomationArticle";
import MonitoringArticle from "../components/MonitoringArticle";

export default function UseCasePage(){
  return (
    <div id="usecase-page">
      <IntegrationArticle />
      <AutomationArticle />
      <MonitoringArticle />
    </div>
  );
}
