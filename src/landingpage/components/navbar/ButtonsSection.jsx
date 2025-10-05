import React from "react";
import ShinyText from "../../../shared-components/ShinyText";

export default function ButtonsSection({ onLoginClick }) {
  return (
    <div className="flex flex-nowrap items-center justify-center gap-2 overflow-x-auto">
      <button className="whitespace-nowrap px-3 py-1 text-sm font-medium border-2 border-blue-700 hover:cursor-pointer rounded-lg text-blue-700 bg-white hover:bg-blue-100">
        I'm an Attendee
      </button>

      <button className="whitespace-nowrap px-3 py-1 text-sm font-medium border-2 hover:cursor-pointer border-blue-700 rounded-lg text-blue-700 bg-white hover:bg-blue-100">
        I'm a Venue
      </button>

      <button
        className="whitespace-nowrap px-3 py-1 text-sm font-medium rounded-lg text-white hover:cursor-pointer bg-blue-700 hover:bg-blue-800"
        onClick={onLoginClick}
      >
        <ShinyText text="LogIn" />
      </button>
    </div>
  );
}
