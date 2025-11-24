import React from "react";
import ShinyText from "../../../../shared-components/ShinyText";
import { Link } from "react-router-dom";
import Events from "../../../attendeeView/Events";

export default function LinksSection({ onLoginClick, onNewVenueClick }) {
  return (
    <div className="flex items-center gap-2">
      <Link
        // to="/attendee/events"
        onClick={onNewVenueClick}
        className="whitespace-nowrap hover:cursor-pointer p-1.5 text-xs md:px-3 md:text-sm font-medium border-2 border-blue-700 rounded-lg text-blue-700 bg-white hover:bg-blue-100"
      >
        I'm an Attendee
      </Link>
      <Link
        className="whitespace-nowrap hover:cursor-pointer p-1.5 text-xs md:text-sm md:px-3 md:py-1 font-medium border-2 border-blue-700 rounded-lg text-blue-700 bg-white hover:bg-blue-100"
        // onClick={onNewVenueClick}
        to="/venue/dashboard"
      >
        I'm a Venue
      </Link>
      <Link
        className="whitespace-nowrap hover:cursor-pointer px-3 py-1 text-sm font-medium rounded-lg text-white bg-blue-700 hover:bg-blue-800"
        onClick={onLoginClick}
      >
        <ShinyText text="LogIn" />
      </Link>
    </div>
  );
}
