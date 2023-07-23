import { useState, useEffect } from "react";

export default function Parallax({
  children,
  className = "",
  style = {},
  factor = 5,
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function ScrollListener() {
      setOffset((window.scrollY / factor));
      console.log(window.scrollY, "scroll");
    }

    window.addEventListener("scroll", ScrollListener);

    return () => {
      window.removeEventListener("scroll", ScrollListener);
    };
  }, []);

  return (
    <div
      className={className}
      style={{ ...style, transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
}
