import Logo from "../landingpage/components/navbar/Logo";
import NavLinks from "./components/NavLinks";
import UserDropdown from "./components/UserDropDown";

export default function GlobalNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo width={40} height={20} />

          <NavLinks />

          <p className="md:hidden dark:text-white font-bold">Tickets Hall</p>

          <UserDropdown />
        </div>
      </div>
    </nav>
  );
}
