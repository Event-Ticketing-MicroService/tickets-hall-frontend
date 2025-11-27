import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import ButtonsSection from "./ButtonsSection";
import HamburgerMenu from "./HamburgerMenu";
import LoginForm from "../../../Forms/LoginForm";
import VenueRegistrationForm from "../../../Forms/VenueRegistrationForm";
import AttendeeForm from "../../../Forms/AttendeeForm";

export default function LandingPageNavBar() {
  const [showLogin, setShowLogin] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showAttendeeForm, setShowAttendeeForm] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.reduce(
          (maxEntry, entry) =>
            entry.isIntersecting &&
            entry.intersectionRatio > (maxEntry?.intersectionRatio || 0)
              ? entry
              : maxEntry,
          null
        );
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { threshold: [0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="w-screen px-10 py-3 mx-auto flex items-center justify-center bg-[#f6f7f7] dark:bg-gray-900 sticky top-0 z-50">
      <div className="flex-shrink-0">
        <Logo width={50} height={30} />
      </div>

      <div className="hidden md:flex flex-1 justify-center gap-x-16 font-bold items-center">
        <button
          onClick={() => handleClick("browse-events")}
          className={`${
            activeSection === "browse-events"
              ? "text-blue-700"
              : "text-gray-900 dark:text-white"
          } hover:cursor-pointer hover:text-blue-700`}
        >
          Browse Events
        </button>
        <button
          onClick={() => handleClick("how-it-works")}
          className={`${
            activeSection === "how-it-works"
              ? "text-blue-700"
              : "text-gray-900 dark:text-white"
          } hover:cursor-pointer hover:text-blue-700`}
        >
          How It Works
        </button>
        <button
          onClick={() => handleClick("footer")}
          className={`${
            activeSection === "footer"
              ? "text-blue-700"
              : "text-gray-900 dark:text-white"
          } hover:cursor-pointer hover:text-blue-700`}
        >
          Support
        </button>
      </div>

      <div className="flex gap-3 md:gap-4">
        <ButtonsSection
          onLoginClick={() => setShowLogin(true)}
          onNewVenueClick={() => setShowRegistrationForm(true)}
          onNewAttendeeClick={() => setShowAttendeeForm(true)}
        />
        {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
        {showRegistrationForm && (
          <VenueRegistrationForm
            onClose={() => setShowRegistrationForm(false)}
          />
        )}
        {showAttendeeForm && (
          <AttendeeForm onClose={() => setShowAttendeeForm(false)} />
        )}
        <HamburgerMenu />
      </div>
    </div>
  );
}
