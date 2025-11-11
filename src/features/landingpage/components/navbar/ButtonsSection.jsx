import React from "react";
import ShinyText from "../../../../shared-components/ShinyText";

export default function ButtonsSection({ onLoginClick, onNewVenueClick }) {
  return (
    <div className="flex flex-nowrap justify-end items-center gap-2">
      <button className="whitespace-nowrap hover:cursor-pointer px-3 py-1 text-sm font-medium border-2 border-blue-700 rounded-lg text-blue-700 bg-white hover:bg-blue-100">
        I'm an Attendee
      </button>
      <button
        className="whitespace-nowrap hover:cursor-pointer px-3 py-1 text-sm font-medium border-2 border-blue-700 rounded-lg text-blue-700 bg-white hover:bg-blue-100"
        onClick={onNewVenueClick}
      >
        I'm a Venue
      </button>
      <button
        className="whitespace-nowrap hover:cursor-pointer px-3 py-1 text-sm font-medium rounded-lg text-white bg-blue-700 hover:bg-blue-800"
        onClick={onLoginClick}
      >
        <ShinyText text="LogIn" />
      </button>
    </div>
  );
}
