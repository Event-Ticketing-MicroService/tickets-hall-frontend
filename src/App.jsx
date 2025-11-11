import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./features/landingpage/LandingPage";
import VenueDashboard from "./features/venueDashboard/VenueDashboard";
import Events from "./features/attendeeView/Events";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/venue/dashboard" element={<VenueDashboard />} />
      <Route path="/attendee/events" element={<Events />} />
    </Routes>
  );
}
