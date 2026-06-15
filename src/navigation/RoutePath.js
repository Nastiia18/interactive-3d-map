import React, { useMemo } from "react";
import * as THREE from "three";
import { Line } from "@react-three/drei";

const RoutePath = ({ path, showStartCircle, showEndPin }) => {

    const points = useMemo(() => {
        if (!path || path.length < 2) return [];

        const convertPoints = path.map(p => new THREE.Vector3(p[0], p[1], p[2]));

        const curves = [];
        for (let i = 0; i < convertPoints.length - 1; i++) {
            curves.push(new THREE.LineCurve3(convertPoints[i], convertPoints[i + 1]));
        }

        const curvePath = new THREE.CurvePath();
        curves.forEach(c => curvePath.add(c));

        return curvePath.getPoints(300);
    }, [path]);


    const layerPoints = useMemo(() => {
        if (!points.length) return {};
        return {
            glowOuter: points.map(p => new THREE.Vector3(p.x, p.y + 0.001, p.z)),
            glowInner: points.map(p => new THREE.Vector3(p.x, p.y + 0.002, p.z)),
            core: points.map(p => new THREE.Vector3(p.x, p.y + 0.003, p.z)),
            dash: points.map(p => new THREE.Vector3(p.x, p.y + 0.004, p.z)),
        };
    }, [points]);

    if (points.length === 0) return null;

    const startPoint = path[0];
    const endPoint = points[points.length - 1];

    return (
        <group>
            {showStartCircle && (
                <group position={[startPoint[0], startPoint[1] + 0.005, startPoint[2]]}>
                    <mesh rotation={[-Math.PI / 2, 0, 0]}>
                        <circleGeometry args={[0.22, 32]} />
                        <meshBasicMaterial color="#ff6a00" transparent opacity={0.2} />
                    </mesh>
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, 0]}>
                        <circleGeometry args={[0.1, 32]} />
                        <meshBasicMaterial color="#ff5500" />
                    </mesh>
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.002, 0]}>
                        <circleGeometry args={[0.03, 32]} />
                        <meshBasicMaterial color="#ffffff" />
                    </mesh>
                </group>
            )}

            <Line points={layerPoints.glowOuter} color="#ff5500" lineWidth={5} transparent opacity={0.25} />
            <Line points={layerPoints.glowInner} color="#ffaa44" lineWidth={3.2} transparent opacity={0.4} />
            <Line points={layerPoints.core} color="#e88d33" lineWidth={2.2} />
            <Line points={layerPoints.dash} color="#ffffff" lineWidth={0.8} dashed dashSize={0.14} gapSize={0.08} />

            {showEndPin && (
                <group position={[endPoint.x, endPoint.y + 0.005, endPoint.z]}>
                    <mesh rotation={[-Math.PI / 2, 0, 0]}>
                        <circleGeometry args={[0.22, 32]} />
                        <meshBasicMaterial color="#ff6a00" transparent opacity={0.2} />
                    </mesh>
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, 0]}>
                        <circleGeometry args={[0.1, 32]} />
                        <meshBasicMaterial color="#ff5500" />
                    </mesh>
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.002, 0]}>
                        <circleGeometry args={[0.03, 32]} />
                        <meshBasicMaterial color="#ffffff" />
                    </mesh>
                </group>
            )}
        </group>
    );
};

export default RoutePath;