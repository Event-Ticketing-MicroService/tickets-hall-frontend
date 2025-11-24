import { createPortal } from "react-dom";

function MyPortalComponent({ children }) {
  return createPortal(children, document.body);
}
