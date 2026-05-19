import React, { useState, useEffect } from "react";
import "./BurgerMenu.css";
import { useTranslation } from "react-i18next";

const BurgerMenu = ({ onRoomClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    admin: false,
    economic: false,
    auditorium: false,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    onRoomClick(room);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".burger-menu") &&
        !event.target.closest(".burger-toggle")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const rooms = {
    admin: [
      { id: "rector", name: t("rooms.admin.rector") },
      { id: "academiccouncil", name: t("rooms.admin.academiccouncil") },
      { id: "prorector", name: t("rooms.admin.prorector") },
      { id: "assistantrector", name: t("rooms.admin.assistantrector") },
      { id: "rectorsroom", name: t("rooms.admin.rectorsroom") },
      { id: "ViceRectorResearch", name: t("rooms.admin.ViceRectorResearch") },
    ],
    economic: [
      { id: "dekanat_economic", name: t("rooms.economic.dekanat_economic") },
      { id: "dekan_economic", name: t("rooms.economic.dekan_economic") },
    ],
    auditorium: [
      { id: "a1", name: t("rooms.auditorium.a1") },
      { id: "a2", name: t("rooms.auditorium.a2") },
      { id: "a3", name: t("rooms.auditorium.a3") },
      { id: "a4", name: t("rooms.auditorium.a4") },
      { id: "a5", name: t("rooms.auditorium.a5") },
      { id: "a6", name: t("rooms.auditorium.a6") },
      { id: "a8", name: t("rooms.auditorium.a8") },
      { id: "a8a", name: t("rooms.auditorium.a8a") },
      { id: "a15", name: t("rooms.auditorium.a15") },
      { id: "a16", name: t("rooms.auditorium.a16") },
      { id: "a17", name: t("rooms.auditorium.a17") },
      { id: "a24", name: t("rooms.auditorium.a24") },
      { id: "a25", name: t("rooms.auditorium.a25") },
      { id: "a34", name: t("rooms.auditorium.a34") },
      { id: "a35", name: t("rooms.auditorium.a35") },
      { id: "a36", name: t("rooms.auditorium.a36") },
      { id: "a19", name: t("rooms.auditorium.a19") },
      { id: "a46", name: t("rooms.auditorium.a46") },
      { id: "a47", name: t("rooms.auditorium.a47") },
      { id: "a48", name: t("rooms.auditorium.a48") },
      { id: "a49", name: t("rooms.auditorium.a49") },
      { id: "a50", name: t("rooms.auditorium.a50") },
      { id: "a51", name: t("rooms.auditorium.a51") },
      { id: "a53", name: t("rooms.auditorium.a53") },
      { id: "a54", name: t("rooms.auditorium.a54") },
      { id: "a55", name: t("rooms.auditorium.a55") },
      { id: "a56", name: t("rooms.auditorium.a56") },
      { id: "a57", name: t("rooms.auditorium.a57") },
      { id: "atc", name: t("rooms.auditorium.atc") },
      { id: "cafe", name: t("rooms.auditorium.cafe") },
      { id: "church", name: t("rooms.auditorium.church") },
      { id: "dekanrgm", name: t("rooms.auditorium.dekanrgm") },
      { id: "drgm", name: t("rooms.auditorium.drgm") },
      { id: "emit", name: t("rooms.auditorium.emit") },
      { id: "informdepartment", name: t("rooms.auditorium.informdepartment") },
      { id: "infotechnologycenter", name: t("rooms.auditorium.infotechnologycenter") },
      { id: "kIEI", name: t("rooms.auditorium.kIEI") },
      { id: "kKryvytska", name: t("rooms.auditorium.kKryvytska") },
      { id: "kregionalstudies", name: t("rooms.auditorium.kregionalstudies") },
      { id: "monastery", name: t("rooms.auditorium.monastery") },
      { id: "museum", name: t("rooms.auditorium.museum") },
      { id: "oldprints(1)", name: t("rooms.auditorium.oldprints1") },
      { id: "oldprints(2)", name: t("rooms.auditorium.oldprints2") },
      { id: "p1", name: t("rooms.auditorium.p1") },
      { id: "p2", name: t("rooms.auditorium.p2") },
      { id: "p5", name: t("rooms.auditorium.p5") },
      { id: "studentdepartment", name: t("rooms.auditorium.studentdepartment") },
      { id: "trainingclass", name: t("rooms.auditorium.trainingclass") },
      { id: "a7", name: t("rooms.auditorium.a7") },
      { id: "a7а", name: t("rooms.auditorium.a7a") },
      { id: "a14", name: t("rooms.auditorium.a14") },
      { id: "a7", name: t("rooms.auditorium.a7") },
      { id: "a18", name: t("rooms.auditorium.a18") },
      { id: "a20", name: t("rooms.auditorium.a20") },
      { id: "a21", name: t("rooms.auditorium.a21") },
      { id: "a22", name: t("rooms.auditorium.a22") },
      { id: "a23", name: t("rooms.auditorium.a23") },
      { id: "a29", name: t("rooms.auditorium.a29") },
      { id: "a30", name: t("rooms.auditorium.a30") },
      { id: "a31", name: t("rooms.auditorium.a31") },
      { id: "a32", name: t("rooms.auditorium.a32") },
      { id: "a38", name: t("rooms.auditorium.a38") },
      { id: "a39", name: t("rooms.auditorium.a39") },
      { id: "a41", name: t("rooms.auditorium.a41") },
      { id: "a43", name: t("rooms.auditorium.a43") },
      { id: "a61", name: t("rooms.auditorium.a61") },
      { id: "a62", name: t("rooms.auditorium.a62") },
      { id: "a63", name: t("rooms.auditorium.a63") },
      { id: "a64", name: t("rooms.auditorium.a64") },
      { id: "a65", name: t("rooms.auditorium.a65") },
      { id: "a66", name: t("rooms.auditorium.a66") },
      { id: "a67", name: t("rooms.auditorium.a67") },
      { id: "a68", name: t("rooms.auditorium.a68") },
      { id: "a69", name: t("rooms.auditorium.a69") },
      { id: "a70", name: t("rooms.auditorium.a70") },
      { id: "a71", name: t("rooms.auditorium.a71") },
      { id: "a72", name: t("rooms.auditorium.a72") },
      { id: "a73", name: t("rooms.auditorium.a73") },
    ],
  };

  const shouldOpenSection = (section) => {
    return rooms[section].some((room) => room.name.toLowerCase().includes(searchTerm));
  };

  useEffect(() => {
    const updatedOpenSections = {
      admin: false,
      economic: false,
      auditorium: false,
    };

    if (searchTerm) {
      Object.keys(rooms).forEach((section) => {
        if (shouldOpenSection(section)) {
          updatedOpenSections[section] = true;
        }
      });
    }
    setOpenSections(updatedOpenSections);
  }, [searchTerm]);

  return (
    <div className="top-controls">
      <button className="burger-toggle" onClick={toggleMenu} aria-label="Menu">
      {isMenuOpen ? (
        // Хрестик
        <svg
            className="burger-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      ) : (
        // Три лінії (гамбургер)
        <svg
            className="burger-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="18"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      )}
    </button>
      {isMenuOpen && (
        <div className="burger-menu">
          <div className="language-switcher">
    <button onClick={() => i18n.changeLanguage("ua")}>UA</button>
    <button onClick={() => i18n.changeLanguage("en")}>EN</button>
           </div>
          <div className="search-wrapper">
            <input
              type="text"
              placeholder={t("rooms.placeholder")}
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search-btn" aria-label="Search">
  <svg
    className="search-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
</button>
          </div>

          {Object.keys(rooms).map((section) => (
            <div className="menu-section" key={section}>
              <button className="accordion-toggle" onClick={() => toggleSection(section)}>
                {section === "admin"
                  ? t('rooms.sections.admin')
                  : section === "economic"
                  ? t('rooms.sections.economic')
                  : t('rooms.sections.auditorium')}
              </button>
              {openSections[section] && (
                <div className="accordion-content">
                  {rooms[section]
                    .filter((room) => room.name.toLowerCase().includes(searchTerm))
                    .map((room) => (
                      <button
                        key={room.id}
                        className={`room-btn ${
                          selectedRoom === room.id ? "selected" : ""
                        }`}
                        onClick={() => handleRoomClick(room.id)}>
                        {room.name}
                      </button>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
