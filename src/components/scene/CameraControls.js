import { forwardRef } from "react";
import { OrbitControls } from "@react-three/drei";

const CameraControls = forwardRef((props, ref) => {
    return <OrbitControls ref={ref} makeDefault />;
});

export default CameraControls;