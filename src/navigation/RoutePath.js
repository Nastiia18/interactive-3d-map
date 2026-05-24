import * as THREE from "three";
import { Line } from "@react-three/drei";
import { navigationNodes } from "./navigationNodes";

const RoutePath = ({ path }) => {
    if (!path || path.length < 2) return null;

    const points = path.map(
        (node) => new THREE.Vector3(...navigationNodes[node])
    );

    return <Line points={points} color="red" lineWidth={4} />;
};

export default RoutePath;