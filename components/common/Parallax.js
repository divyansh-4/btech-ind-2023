import { useState, useEffect, useRef } from "react";

export default function Parallax({
  children,
  className = "",
  style = {},
  factor = 5,
}) {
  const [offset, setOffset] = useState(0);
  const itemRef = useRef(null);

  useEffect(() => {
    const item = itemRef.current;
    function ScrollListener(e) {
      const top = item.getBoundingClientRect().top;
      const bottom = item.getBoundingClientRect().bottom;
      if (top <= window.innerHeight && bottom >= 0) {
        setOffset((off) => {
          if (!item || !item.prevScroll) return off;
          return off + (window.scrollY - item.prevScroll) / factor;
        });
      }
      if (item) {
        item.prevScroll = window.scrollY;
      }
    }

    window.addEventListener("scroll", ScrollListener);

    return () => {
      window.removeEventListener("scroll", ScrollListener);
    };
  }, [factor]);

  return (
    <div
      className={className}
      style={{
        ...style,
        transform: `translate3d(0, ${offset}px, 0)`,
      }}
      ref={itemRef}
    >
      {children}
    </div>
  );
}
