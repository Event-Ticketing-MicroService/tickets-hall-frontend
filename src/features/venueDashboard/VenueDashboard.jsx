import React, { useState } from "react";
import VenueDashboardHeader from "./components/VenueDashboardHeader";
import GlobalNavbar from "../globalNavbar/GlobalNavbar";
import CardSection from "./components/CardSection";
import InfoTabs from "./components/InfoTabs";
import Footer from "../landingpage/components/body/Footer";
import CreateNewEvent from "../Forms/CreateNewEvent";
import { fetchVenueById, fetchVenues } from "../../services/venueService";
import { useQuery } from "@tanstack/react-query";
import { fetchEventById } from "../../services/eventService";
import AddNewWorkersForm from "../Forms/AddNewWorkersForm";

export default function VenueDashboard() {
  const [createNewEvent, SetCreateNewEvent] = useState(false);
  const [addNewWorkers, setAddNewWorkers] = useState(false);

  const {
    data: venuesData,
    isLoading: venueIsLoading,
    isError: venueIsError,
    error: venueError,
  } = useQuery({
    queryKey: ["venues"],
    queryFn: () => fetchVenueById(7),
  });

  // const {
  //   data: eventsData,
  //   isLoading: eventsIsLoading,
  //   isErorr: eventsIsError,
  //   error: eventsErorr,
  // } = useQuery({
  //   queryKey: ["events"],
  //   queryFn: () => fetchEventById(),
  // });

  console.log(venuesData);
  console.log(venuesData?.venueID);

  return (
    <div>
      <CreateNewEvent
        createNewEvent={createNewEvent}
        SetCreateNewEvent={SetCreateNewEvent}
      />
      <AddNewWorkersForm
        AddNewWorkers={addNewWorkers}
        setAddNewWorkers={setAddNewWorkers}
        venueID={venuesData?.venueID}
      />
      <div className="pt-20 p-8">
        <GlobalNavbar />
        <VenueDashboardHeader
          createNewEvent={createNewEvent}
          SetCreateNewEvent={SetCreateNewEvent}
          addNewWorkers={addNewWorkers}
          setAddNewWorkers={setAddNewWorkers}
        />
        <CardSection />
        <InfoTabs />
      </div>
      <Footer />
    </div>
  );
}
