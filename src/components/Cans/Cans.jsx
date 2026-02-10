import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import styles from "./Cans.module.css";

const CAN_BRIGHTNESS = 1.4;
const CAN_SCALE = 15;

function CanModel({ url }) {
    const { scene } = useGLTF(url);

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

function Scene({ modelUrl }) {
    return (
        <>
            <ambientLight intensity={0.7} />
            <directionalLight
                position={[2, 2, 2]}
                intensity={1.2}
                color="#ffffff"
            />
            <directionalLight
                position={[-1, 0.5, 1]}
                intensity={0.4}
                color="#ffffff"
            />
            <CanModel url={modelUrl} />
            <OrbitControls makeDefault enableZoom={false} />
        </>
    );
}

const MODELS = [
    { id: "ipa", url: "/goodboy/models/beer-ipa.glb", label: "IPA" },
    { id: "lager", url: "/goodboy/models/beer-lager.glb", label: "Lager" },
    { id: "weiss", url: "/goodboy/models/beer-weiss.glb", label: "Weiss" },
];

export default function Cans() {
    return (
        <div className={styles.cansSection}>
            <h3 className={styles.cansTitle}>
                Click and drag to check the design of each can
            </h3>
            <div className={styles.canContainer}>
            {MODELS.map(({ id, url, label }) => (
                <div key={id} className={styles.can}>
                    <span className={styles.canLabel}>{label}</span>
                    <Canvas
                        dpr={[1, 2]}
                        camera={{ fov: 45, position: [0, 0.5, 4] }}
                        style={{ height: "50vh", width: "100%" }}>
                        <Suspense fallback={null}>
                            <Scene modelUrl={url} />
                        </Suspense>
                    </Canvas>
                </div>
            ))}
            </div>
        </div>
    );
}
