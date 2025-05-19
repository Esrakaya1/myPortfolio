import { PiArrowFatUp } from "react-icons/pi";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 300 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-20 right-20 z-50 rounded-full bg-gradient-to-r from-purple-500 via-slate-500 to-indigo-300 p-4 text-white text-2xl transition-all duration-200 hover:scale-110 hover:shadow-xl"
      >
        <PiArrowFatUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
