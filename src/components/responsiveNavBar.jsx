import { useState, useEffect } from "react";
import Navbar from "./navbar.jsx";
import BurgerNavbar from "./burgerNav.jsx";


export default function ResponsiveNavbar({ lang }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <BurgerNavbar lang={lang}/> : <Navbar lang={lang}/>;
}

