import React, { useState } from "react";
import GlobalNavbar from "../globalNavbar/GlobalNavbar";
import EventsHeader from "./components/EventsHeader";
import SearchFilters from "./components/SearchFilters";
import EventsList from "./components/EventsList";

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <div className="w-full h-full items-start flex flex-col">
      <GlobalNavbar />
      <EventsHeader />
      <SearchFilters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <EventsList
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        selectedDate={selectedDate}
      />
    </div>
  );
}
