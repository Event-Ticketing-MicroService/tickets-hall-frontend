import React, { useState } from "react";
import VenueDashboardHeader from "./components/VenueDashboardHeader";
import GlobalNavbar from "../globalNavbar/GlobalNavbar";
import CardSection from "./components/CardSection";
import InfoTabs from "./components/InfoTabs";
import Footer from "../landingpage/components/body/Footer";
import CreateNewEvent from "../Forms/CreateNewEvent";

export default function VenueDashboard() {
  //To Do Fetch Logic

  const [createNewEvent, SetCreateNewEvent] = useState(false);
  return (
    <div>
      <CreateNewEvent
        createNewEvent={createNewEvent}
        SetCreateNewEvent={SetCreateNewEvent}
      />
      <div className="pt-20 p-8">
        <GlobalNavbar />
        <VenueDashboardHeader
          createNewEvent={createNewEvent}
          SetCreateNewEvent={SetCreateNewEvent}
        />
        <CardSection />
        <InfoTabs />
      </div>
      <Footer />
    </div>
  );
}
