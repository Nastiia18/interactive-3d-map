import React from "react";

const Sidebar = ({ room, closeSidebar }) => {
  if (!room) return null;

  const roomInfo = {
    "a1": { 
      title: "a1", 
      image: "../images/images.jpg",
      text: "а1", 
    },
"a2": { 
      title: "a2", 
      image: "../images/images.jpg",
      text: "a2", 
    },
"a3": { 
      title: "a3", 
      image: "../images/images.jpg",
      text: "a3", 
    },
"a4": { 
      title: "a4", 
      image: "../images/images.jpg",
      text: "a4", 
    },
"a5": { 
      title: "a5", 
      image: "../images/images.jpg",
      text: "a5", 
    },
"a8": { 
      title: "a8", 
      image: "../images/images.jpg",
      text: "a8", 
    },
"a8a": { 
      title: "a8a", 
      image: "../images/images.jpg",
      text: "a8a", 
    },
"a15": { 
      title: "a15", 
      image: "../images/images.jpg",
      text: "a15", 
    },
"a16": { 
      title: "a16", 
      image: "../images/images.jpg",
      text: "a16", 
    },
"a17": { 
      title: "a17", 
      image: "../images/images.jpg",
      text: "a17", 
    },
"a24": { 
      title: "a24", 
      image: "../images/images.jpg",
      text: "a24", 
    },
"a25": { 
      title: "a25", 
      image: "../images/images.jpg",
      text: "a25", 
    },
"a34": { 
      title: "a34", 
      image: "../images/images.jpg",
      text: "a34", 
    },
"a35": { 
      title: "a35", 
      image: "../images/images.jpg",
      text: "a35", 
    },
"a36": { 
      title: "a36", 
      image: "../images/images.jpg",
      text: "a36", 
    },
"a46": { 
      title: "a46", 
      image: "../images/images.jpg",
      text: "a46", 
    },
"a47": { 
      title: "a47", 
      image: "../images/images.jpg",
      text: "a47", 
    },
"a48": { 
      title: "a48", 
      image: "../images/images.jpg",
      text: "a48", 
    },
"a49": { 
      title: "a49", 
      image: "../images/images.jpg",
      text: "a49", 
    },
"a50": { 
      title: "a50", 
      image: "../images/images.jpg",
      text: "a50", 
    },
"a51": { 
      title: "a51", 
      image: "../images/images.jpg",
      text: "a51", 
    },
"a53": { 
      title: "a53", 
      image: "../images/images.jpg",
      text: "a53", 
    },
"a54": { 
      title: "a54", 
      image: "../images/images.jpg",
      text: "a54", 
    },
"a55": { 
      title: "a55", 
      image: "../images/images.jpg",
      text: "a55", 
    },
"a56": { 
      title: "a56", 
      image: "../images/images.jpg",
      text: "a56", 
    },
"a57": { 
      title: "a57", 
      image: "../images/images.jpg",
      text: "a57", 
    },
"academiccouncil": { 
      title: "academiccouncil", 
      image: "../images/images.jpg",
      text: "academiccouncil", 
    },
"assistantrector": { 
      title: "assistantrector", 
      image: "../images/images.jpg",
      text: "assistantrector", 
    },
"atc": { 
      title: "atc", 
      image: "../images/images.jpg",
      text: "atc", 
    },
"cafe": { 
      title: "cafe", 
      image: "../images/images.jpg",
      text: "cafe", 
    },
"church": { 
      title: "church", 
      image: "../images/images.jpg",
      text: "church", 
    },
"clerk": { 
      title: "clerk", 
      image: "../images/images.jpg",
      text: "clerk", 
    },
"def": { 
      title: "def", 
      image: "../images/images.jpg",
      text: "def", 
    },
"dekan_economic": { 
      title: "dekan_economic", 
      image: "../images/images.jpg",
      text: "dekan_economic", 
    },
"dekanat_economic": { 
      title: "dekanat_economic", 
      image: "../images/images.jpg",
      text: "dekanat_economic", 
    },
"dekanef": { 
      title: "dekanef", 
      image: "../images/images.jpg",
      text: "dekanef", 
    },
"dekanrgm": { 
      title: "dekanrgm", 
      image: "../images/images.jpg",
      text: "dekanrgm", 
    },
"drgm": { 
      title: "drgm", 
      image: "../images/images.jpg",
      text: "drgm", 
    },
"emit": { 
      title: "emit", 
      image: "../images/images.jpg",
      text: "emit", 
    },
"informdepartment": { 
      title: "informdepartment", 
      image: "../images/images.jpg",
      text: "informdepartment", 
    },
"infotechnologycenter": { 
      title: "infotechnologycenter", 
      image: "../images/images.jpg",
      text: "infotechnologycenter", 
    },
"kcyber": { 
      title: "kcyber", 
      image: "../images/images.jpg",
      text: "kcyber", 
    },
"kIEI": { 
      title: "kIEI", 
      image: "../images/images.jpg",
      text: "kIEI", 
    },
"kKryvytska": { 
      title: "kKryvytska", 
      image: "../images/images.jpg",
      text: "kKryvytska", 
    },
"kregionalstudies": { 
      title: "kregionalstudies", 
      image: "../images/images.jpg",
      text: "kregionalstudies", 
    },
"monastery": { 
      title: "monastery", 
      image: "../images/images.jpg",
      text: "monastery", 
    },
"museum": { 
      title: "museum", 
      image: "../images/images.jpg",
      text: "museum", 
    },
"museum(rector)": { 
      title: "museum(rector)", 
      image: "../images/images.jpg",
      text: "museum(rector)", 
    },
"oldprints(1)": { 
      title: "oldprints(1)", 
      image: "../images/images.jpg",
      text: "oldprints(1)", 
    },
"oldprints(2)": { 
      title: "oldprints(2)", 
      image: "../images/images.jpg",
      text: "oldprints(2)", 
    },
"p1": { 
      title: "p1", 
      image: "../images/images.jpg",
      text: "p1", 
    },
"p2": { 
      title: "p2", 
      image: "../images/images.jpg",
      text: "p2", 
    },
"p5": { 
      title: "p5", 
      image: "../images/images.jpg",
      text: "p5", 
    },
"prorector": { 
      title: "prorector", 
      image: "../images/images.jpg",
      text: "prorector", 
    },
"rector": { 
      title: "rector", 
      image: "../images/images.jpg",
      text: "rector", 
    },
"rectorsroom": { 
      title: "rectorsroom", 
      image: "../images/images.jpg",
      text: "rectorsroom", 
    },
"studentdepartment": { 
      title: "studentdepartment", 
      image: "../images/images.jpg",
      text: "studentdepartment", 
    },
"trainingclass": { 
      title: "trainingclass", 
      image: "../images/images.jpg",
      text: "trainingclass", 
    },
"ViceRectorResearch": { 
      title: "ViceRectorResearch", 
      image: "../images/images.jpg",
      text: "ViceRectorResearch", 
    },
"vivat": { 
      title: "vivat", 
      image: "../images/images.jpg",
      text: "vivat", 
    },
  };

  const { title, image, text } = roomInfo[room] || {};

  return (
    <div style={sidebarStyles}>
      <button onClick={closeSidebar} style={{ marginBottom: "10px" }}>
        Close
      </button>

      {title && <h2>{title}</h2>}

      {image && <img src={image} alt={title} style={imageStyles} />}

      {text && <div style={textStyles} dangerouslySetInnerHTML={{ __html: text }} />}
    </div>
  );
};

const sidebarStyles = {
  position: "fixed",
  right: 0,
  top: 0,
  width: "300px",
  height: "100%",
  background: "#f4f4f4",
  padding: "20px",
  boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px",
  overflowY: "auto",
  zIndex: 1000,
};

const imageStyles = {
  width: "100%",
  height: "auto",
  marginBottom: "15px",
};

const textStyles = {
  fontSize: "16px",
  lineHeight: "1.6",
  textAlign: "justify",
};

export default Sidebar;
