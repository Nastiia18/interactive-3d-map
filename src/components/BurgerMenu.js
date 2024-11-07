import React, { useState } from "react";
import "./BurgerMenu.css";

const BurgerMenu = ({ rooms, onRoomClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage burger menu visibility
  const [isFirstAccordionOpen, setFirstAccordionOpen] = useState(false);
  const [isSecondAccordionOpen, setSecondAccordionOpen] = useState(false);
  const [isThirdAccordionOpen, setThirdAccordionOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Function to toggle the burger menu
  const toggleFirstAccordion = () => setFirstAccordionOpen(!isFirstAccordionOpen);
  const toggleSecondAccordion = () => setSecondAccordionOpen(!isSecondAccordionOpen);
  const toggleThirdAccordion = () => setThirdAccordionOpen(!isSecondAccordionOpen);

  return (
    <div>
      {/* Button to toggle the burger menu */}
      <button className="burger-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "Закрити навігацію" : "Навігація"}
      </button>

      {/* Conditional rendering of the burger menu */}
      {isMenuOpen && (
        <div className="burger-menu">



<button className="room-btn" onClick={() => onRoomClick("a1")}> 
                  a1 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a2")}> 
                  a2 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a3")}> 
                  a3 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a4")}> 
                  a4 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a5")}> 
                  a5 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a8")}> 
                  a8 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a8a")}> 
                  a8a 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a15")}> 
                  a15 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a16")}> 
                  a16 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a17")}> 
                  a17 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a24")}> 
                  a24 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a25")}> 
                  a25 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a34")}> 
                  a34 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a35")}> 
                  a35 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a36")}> 
                  a36 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a46")}> 
                  a46 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a47")}> 
                  a47 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a48")}> 
                  a48 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a49")}> 
                  a49 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a50")}> 
                  a50 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a51")}> 
                  a51 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a53")}> 
                  a53 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a54")}> 
                  a54 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a55")}> 
                  a55 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a56")}> 
                  a56 
                </button>
<button className="room-btn" onClick={() => onRoomClick("a57")}> 
                  a57 
                </button>
<button className="room-btn" onClick={() => onRoomClick("academiccouncil")}> 
                  academiccouncil 
                </button>
<button className="room-btn" onClick={() => onRoomClick("assistantrector")}> 
                  assistantrector 
                </button>
<button className="room-btn" onClick={() => onRoomClick("atc")}> 
                  atc 
                </button>
<button className="room-btn" onClick={() => onRoomClick("cafe")}> 
                  cafe 
                </button>
<button className="room-btn" onClick={() => onRoomClick("church")}> 
                  church 
                </button>
<button className="room-btn" onClick={() => onRoomClick("clerk")}> 
                  clerk 
                </button>
<button className="room-btn" onClick={() => onRoomClick("def")}> 
                  def 
                </button>
<button className="room-btn" onClick={() => onRoomClick("dekan_economic")}> 
                  dekan_economic 
                </button>
<button className="room-btn" onClick={() => onRoomClick("dekanat_economic")}> 
                  dekanat_economic 
                </button>
<button className="room-btn" onClick={() => onRoomClick("dekanef")}> 
                  dekanef 
                </button>
<button className="room-btn" onClick={() => onRoomClick("dekanrgm")}> 
                  dekanrgm 
                </button>
<button className="room-btn" onClick={() => onRoomClick("drgm")}> 
                  drgm 
                </button>
<button className="room-btn" onClick={() => onRoomClick("emit")}> 
                  emit 
                </button>
<button className="room-btn" onClick={() => onRoomClick("informdepartment")}> 
                  informdepartment 
                </button>
<button className="room-btn" onClick={() => onRoomClick("infotechnologycenter")}> 
                  infotechnologycenter 
                </button>
<button className="room-btn" onClick={() => onRoomClick("kcyber")}> 
                  kcyber 
                </button>
<button className="room-btn" onClick={() => onRoomClick("kIEI")}> 
                  kIEI 
                </button>
<button className="room-btn" onClick={() => onRoomClick("kKryvytska")}> 
                  kKryvytska 
                </button>
<button className="room-btn" onClick={() => onRoomClick("kregionalstudies")}> 
                  kregionalstudies 
                </button>
<button className="room-btn" onClick={() => onRoomClick("monastery")}> 
                  monastery 
                </button>
<button className="room-btn" onClick={() => onRoomClick("museum")}> 
                  museum 
                </button>
<button className="room-btn" onClick={() => onRoomClick("museum(rector)")}> 
                  museum(rector) 
                </button>
<button className="room-btn" onClick={() => onRoomClick("oldprints(1)")}> 
                  oldprints(1) 
                </button>
<button className="room-btn" onClick={() => onRoomClick("oldprints(2)")}> 
                  oldprints(2) 
                </button>
<button className="room-btn" onClick={() => onRoomClick("p1")}> 
                  p1 
                </button>
<button className="room-btn" onClick={() => onRoomClick("p2")}> 
                  p2 
                </button>
<button className="room-btn" onClick={() => onRoomClick("p5")}> 
                  p5 
                </button>
<button className="room-btn" onClick={() => onRoomClick("prorector")}> 
                  prorector 
                </button>
<button className="room-btn" onClick={() => onRoomClick("rector")}> 
                  rector 
                </button>
<button className="room-btn" onClick={() => onRoomClick("rectorsroom")}> 
                  rectorsroom 
                </button>
<button className="room-btn" onClick={() => onRoomClick("studentdepartment")}> 
                  studentdepartment 
                </button>
<button className="room-btn" onClick={() => onRoomClick("trainingclass")}> 
                  trainingclass 
                </button>
<button className="room-btn" onClick={() => onRoomClick("ViceRectorResearch")}> 
                  ViceRectorResearch 
                </button>
<button className="room-btn" onClick={() => onRoomClick("vivat")}> 
                  vivat 
                </button>






          {/* First Accordion */}
          <div className="accordion">
            <button className="accordion-toggle" onClick={toggleFirstAccordion}>
              Економічний факультет
            </button>
            {isFirstAccordionOpen && (
              <div className="accordion-content">
                <button className="room-btn" onClick={() => onRoomClick("EMMIT")}>
                  Кафедра ЕММІТ
                </button>
                <button className="room-btn" onClick={() => onRoomClick("Room 2")}>
                  Декан Економічного факультету
                </button>
                <button className="room-btn" onClick={() => onRoomClick("Room 3")}>
                  Деканат економічного факультету
                </button>
              </div>
            )}
          </div>

          {/* Second Accordion */}
          <div className="accordion">
            <button className="accordion-toggle" onClick={toggleSecondAccordion}>
              Адміністрація
            </button>
            {isSecondAccordionOpen && (
              <div className="accordion-content">
                <button
                  className="room-btn"
                  onClick={() => onRoomClick("Academiccouncil")}>
                  Вчена рада
                </button>
                <button
                  className="room-btn"
                  onClick={() => onRoomClick("Assistantrector")}>
                  Помічник ректора
                </button>
              </div>
            )}
          </div>
          {/* Third Accordion */}
          <div className="accordion">
            <button className="accordion-toggle" onClick={toggleThirdAccordion}>
              Аудиторії
            </button>
            {isThirdAccordionOpen && (
              <div className="accordion-content">
                <button className="room-btn" onClick={() => onRoomClick("Aud1")}>
                  Аудиторія №1
                </button>
                <button className="room-btn" onClick={() => onRoomClick("A2")}>
                  Аудиторія №2
                </button>
                <button className="room-btn" onClick={() => onRoomClick("A3")}>
                  Аудиторія №3
                </button>
                <button className="room-btn" onClick={() => onRoomClick("A57")}>
                  Аудиторія №57
                </button>
                <button className="room-btn" onClick={() => onRoomClick("P1")}>
                  Аудиторія П1
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
