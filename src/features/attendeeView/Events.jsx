import React from "react";
import GlobalNavbar from "../globalNavbar/GlobalNavbar";
import EventsHeader from "./components/EventsHeader";
import SearchFilters from "./components/SearchFilters";
import EventsList from "./components/EventsList";

export default function Events() {
  return (
    <div className="w-full h-full bg-stone-200">
      <GlobalNavbar />
      <EventsHeader />
      <SearchFilters />
      <EventsList />
    </div>
  );
}
