import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import styles from "./Cans.module.css";

const CAN_BRIGHTNESS = 1.4;
const CAN_SCALE = 15;

function IPA() {
    const { scene } = useGLTF("/goodboy/models/beer-ipa.glb");

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh && child.material) {
                const mat = child.material;
                if (mat.envMapIntensity !== undefined)
                    mat.envMapIntensity = CAN_BRIGHTNESS;
                if (mat.metalness !== undefined)
                    mat.metalness = Math.min(1, (mat.metalness || 0) + 0.3);
                if (mat.roughness !== undefined)
                    mat.roughness = Math.max(0, (mat.roughness ?? 0.5) - 0.1);
            }
        });
    }, [scene]);

    return (
        <primitive
            object={scene}
            scale={[CAN_SCALE, CAN_SCALE, CAN_SCALE]}
        />
    );
}

export default function Cans() {
    return (
        <div className={styles.canContainer}>
            <div className={styles.can}>
                <Canvas
                    dpr={[1, 2]}
                    camera={{ fov: 45, position: [0, 0.5, 4] }}
                    style={{ height: "50vh", width: "100%" }}>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.7} />
                        <directionalLight
                            position={[2, 2, 2]}
                            intensity={1.2}
                            color='#ffffff'
                        />
                        <directionalLight
                            position={[-1, 0.5, 1]}
                            intensity={0.4}
                            color='#ffffff'
                        />
                        <IPA />
                        <OrbitControls
                            makeDefault
                            enableZoom={false}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}
