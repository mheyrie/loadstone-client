import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const element = document.querySelector(hash);
    if (!element) return;

    // wait for DOM + animations (AOS)
    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [hash]);

  return null;
}
