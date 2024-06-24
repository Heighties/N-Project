import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import Showreel from "../../components/Sections/Showreel/Showreel";
import Infos from "../../components/Sections/Infos/Infos";
import Realisations from "../../components/Sections/Realisations/Realisations";
import Contact from "../../components/Sections/Contact/Contact";
import PageLayout from "../../components/PageLayout/PageLayout";
import Modal from "react-modal";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

Modal.setAppElement("#root");

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState("showreel");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const showreelRef = useRef(null);
  const infosRef = useRef(null);
  const realisationsRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  const scrollToSection = (section) => {
    if (section === "showreel") {
      showreelRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "infos") {
      infosRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "realisations") {
      realisationsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const sections = [
      { ref: showreelRef, name: "showreel" },
      { ref: infosRef, name: "infos" },
      { ref: realisationsRef, name: "realisations" },
      { ref: contactRef, name: "contact" },
    ];

    const current = sections.find(
      (section) =>
        section.ref.current.offsetTop <= window.scrollY + window.innerHeight / 2 &&
        section.ref.current.offsetTop + section.ref.current.offsetHeight > window.scrollY + window.innerHeight / 2
    );

    const newSection = current ? current.name : "showreel";
    if (newSection !== currentSection) {
      setCurrentSection(newSection);
      window.history.replaceState(null, null, `/#${newSection}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  useEffect(() => {
    const section = location.hash.replace("#", "");
    if (section) {
      scrollToSection(section);
    }
  }, [location]);

  return (
    <PageLayout scrollToSection={scrollToSection}>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory hide-scrollbar">
        <div className="sticky top-0 z-10 hidden md:block">
          <NavBar scrollToSection={scrollToSection} currentSection={currentSection} className="hide-on-mobile" />
        </div>
        <div className="h-screen flex items-center justify-center snap-start" ref={showreelRef}>
          <Showreel />
        </div>
        <div className="h-screen flex items-center justify-center snap-start" ref={infosRef}>
          <Infos />
        </div>
        <div className="h-screen flex items-center justify-center snap-start" ref={realisationsRef}>
          <Realisations />
        </div>
        <div className="h-screen flex items-center justify-center snap-start" ref={contactRef}>
          <Contact />
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full justify-between items-center p-4 show-on-mobile hide-on-desktop">
        <img src={process.env.PUBLIC_URL + "/logo-nima-noir.png"} alt="Logo" className="h-20" />
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-black fixed text-2xl p-8 top-0 right-0">
          &#9776;
        </button>
      </div>
      {isMobileMenuOpen && (
        <MobileMenu scrollToSection={scrollToSection} setMobileMenuOpen={setMobileMenuOpen} />
      )}
    </PageLayout>
  );
};

export default HomePage;
