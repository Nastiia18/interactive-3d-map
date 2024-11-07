import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import InteractiveZone from "./InteractiveZone";
import { useGLTF } from "@react-three/drei";

const FloorModel = () => {
  const { scene } = useGLTF("../models/floor1.glb");
  return <primitive object={scene} scale={0.05} />;
};

const Scene = ({ setActiveRoom, activeRoom }) => {
  const handleZoneClick = (roomName) => {
    setActiveRoom(roomName);
  };

  return (
    <Canvas style={{ height: "100vh" }}>
      <color attach="background" args={["#d1cbc3"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />

      <FloorModel />

      <InteractiveZone modelPath="../models/a1.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a1")} isActive={activeRoom === "a1"} />
      <InteractiveZone modelPath="../models/a2.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a2")} isActive={activeRoom === "a2"} />
      <InteractiveZone modelPath="../models/a3.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a3")} isActive={activeRoom === "a3"} />
      <InteractiveZone modelPath="../models/a4.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a4")} isActive={activeRoom === "a4"} />
      <InteractiveZone modelPath="../models/a5.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a5")} isActive={activeRoom === "a5"} />
      <InteractiveZone modelPath="../models/a8.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a8")} isActive={activeRoom === "a8"} />
      <InteractiveZone modelPath="../models/a8a.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a8a")} isActive={activeRoom === "a8a"} />
      <InteractiveZone modelPath="../models/a15.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a15")} isActive={activeRoom === "a15"} />
      <InteractiveZone modelPath="../models/a16.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a16")} isActive={activeRoom === "a16"} />
      <InteractiveZone modelPath="../models/a17.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a17")} isActive={activeRoom === "a17"} />
      <InteractiveZone modelPath="../models/a24.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a24")} isActive={activeRoom === "a24"} />
      <InteractiveZone modelPath="../models/a25.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a25")} isActive={activeRoom === "a25"} />
      <InteractiveZone modelPath="../models/a34.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a34")} isActive={activeRoom === "a34"} />
      <InteractiveZone modelPath="../models/a35.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a35")} isActive={activeRoom === "a35"} />
      <InteractiveZone modelPath="../models/a36.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a36")} isActive={activeRoom === "a36"} />
      <InteractiveZone modelPath="../models/a46.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a46")} isActive={activeRoom === "a46"} />
      <InteractiveZone modelPath="../models/a47.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a47")} isActive={activeRoom === "a47"} />
      <InteractiveZone modelPath="../models/a48.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a48")} isActive={activeRoom === "a48"} />
      <InteractiveZone modelPath="../models/a49.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a49")} isActive={activeRoom === "a49"} />
      <InteractiveZone modelPath="../models/a50.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a50")} isActive={activeRoom === "a50"} />
      <InteractiveZone modelPath="../models/a51.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a51")} isActive={activeRoom === "a51"} />
      <InteractiveZone modelPath="../models/a53.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a53")} isActive={activeRoom === "a53"} />
      <InteractiveZone modelPath="../models/a54.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a54")} isActive={activeRoom === "a54"} />
      <InteractiveZone modelPath="../models/a55.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a55")} isActive={activeRoom === "a55"} />
      <InteractiveZone modelPath="../models/a56.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a56")} isActive={activeRoom === "a56"} />
      <InteractiveZone modelPath="../models/a57.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("a57")} isActive={activeRoom === "a57"} />
      <InteractiveZone modelPath="../models/academiccouncil.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("academiccouncil")} isActive={activeRoom === "academiccouncil"} />
      <InteractiveZone modelPath="../models/assistantrector.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("assistantrector")} isActive={activeRoom === "assistantrector"} />
      <InteractiveZone modelPath="../models/atc.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("atc")} isActive={activeRoom === "atc"} />
      <InteractiveZone modelPath="../models/cafe.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("cafe")} isActive={activeRoom === "cafe"} />
      <InteractiveZone modelPath="../models/church.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("church")} isActive={activeRoom === "church"} />
      <InteractiveZone modelPath="../models/clerk.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("clerk")} isActive={activeRoom === "clerk"} />
      <InteractiveZone modelPath="../models/def.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("def")} isActive={activeRoom === "def"} />
      <InteractiveZone modelPath="../models/dekan_economic.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("dekan_economic")} isActive={activeRoom === "dekan_economic"} />
      <InteractiveZone modelPath="../models/dekanat_economic.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("dekanat_economic")} isActive={activeRoom === "dekanat_economic"} />
      <InteractiveZone modelPath="../models/dekanef.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("dekanef")} isActive={activeRoom === "dekanef"} />
      <InteractiveZone modelPath="../models/dekanrgm.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("dekanrgm")} isActive={activeRoom === "dekanrgm"} />
      <InteractiveZone modelPath="../models/drgm.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("drgm")} isActive={activeRoom === "drgm"} />
      <InteractiveZone modelPath="../models/informdepartment.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("informdepartment")} isActive={activeRoom === "informdepartment"} />
      <InteractiveZone modelPath="../models/infotechnologycenter.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("infotechnologycenter")} isActive={activeRoom === "infotechnologycenter"} />
      <InteractiveZone modelPath="../models/kcyber.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("kcyber")} isActive={activeRoom === "kcyber"} />
      <InteractiveZone modelPath="../models/kKryvytska.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("kKryvytska")} isActive={activeRoom === "kKryvytska"} />
      <InteractiveZone modelPath="../models/kregionalstudies.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("kregionalstudies")} isActive={activeRoom === "kregionalstudies"} />
      <InteractiveZone modelPath="../models/monastery.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("monastery")} isActive={activeRoom === "monastery"} />
      <InteractiveZone modelPath="../models/museum.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("museum")} isActive={activeRoom === "museum"} />
      <InteractiveZone modelPath="../models/museum(rector).glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("museum(rector)")} isActive={activeRoom === "museum(rector)"} />
      <InteractiveZone modelPath="../models/oldprints(1).glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("oldprints(1)")} isActive={activeRoom === "oldprints(1)"} />
      <InteractiveZone modelPath="../models/oldprints(2).glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("oldprints(2)")} isActive={activeRoom === "oldprints(2)"} />
      <InteractiveZone modelPath="../models/p1.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("p1")} isActive={activeRoom === "p1"} />
      <InteractiveZone modelPath="../models/p2.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("p2")} isActive={activeRoom === "p2"} />
      <InteractiveZone modelPath="../models/p5.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("p5")} isActive={activeRoom === "p5"} />
      <InteractiveZone modelPath="../models/prorector.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("prorector")} isActive={activeRoom === "prorector"} />
      <InteractiveZone modelPath="../models/rector.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("rector")} isActive={activeRoom === "rector"} />
      <InteractiveZone modelPath="../models/rectorsroom.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("rectorsroom")} isActive={activeRoom === "rectorsroom"} />
      <InteractiveZone modelPath="../models/studentdepartment.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("studentdepartment")} isActive={activeRoom === "studentdepartment"} />
      <InteractiveZone modelPath="../models/trainingclass.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("trainingclass")} isActive={activeRoom === "trainingclass"} />
      <InteractiveZone modelPath="../models/ViceRectorResearch.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("ViceRectorResearch")} isActive={activeRoom === "ViceRectorResearch"} />
      <InteractiveZone modelPath="../models/vivat.glb" position={[0, 0, 0]} color="#111a68" onClick={() => handleZoneClick("vivat")} isActive={activeRoom === "vivat"} />


      <OrbitControls
        enablePan={true}
        enableZoom={true}
        minPolarAngle={Math.PI / 48}
        maxPolarAngle={Math.PI / 3}
        enableDamping={true}
        dampingFactor={0.1}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default Scene;
