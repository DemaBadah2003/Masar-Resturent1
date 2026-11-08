import { useEffect, useState } from "react";

function getRoute() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return hash || "menu";
}

export default function useHashRoute() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}