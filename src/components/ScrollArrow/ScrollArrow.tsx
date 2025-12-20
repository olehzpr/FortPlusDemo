import { useEffect, useState } from "react";
import "./ScrollArrow.css";
export default function ScrollArrow() {
  const [showButton, setShowButton] = useState(true);
  useEffect(() => {
    const target = document.getElementById("footer");

    const handleScroll = () => {
      if (target) {
        const isInViewport = isElementInViewport(target);
        setShowButton(!isInViewport);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isElementInViewport = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const DELTA = 30;
    return rect.top + DELTA < document.documentElement.clientHeight;
  };

  return (
    <a
      style={{ display: showButton ? "flex" : "none" }}
      className="scroll-arrow"
      onClick={() => document.getElementById("footer")?.scrollIntoView()}
    >
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6V18M12 18L7 13M12 18L17 13"
          stroke="brown"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
