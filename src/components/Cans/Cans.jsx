import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import styles from "./Cans.module.css";

function IPA() {
    const { scene } = useGLTF("/goodboy/models/beer-ipa.glb");
    return <primitive object={scene} />;
}

export default function Cans() {
    return (
        <div className={styles.canContainer}>
            <div className={styles.can}>
                <Canvas
                    dpr={[1, 2]}
                    camera={{ fov: 45, position: [0, 0.5, 4] }} // closer for single model
                    style={{ height: "50vh", width: "100%" }}>
                    <Suspense fallback={null}>
                        <Stage
                            intensity={0.5}
                            adjustCamera={1.2} // tune per canvas if needed (1.2–1.6 common for cans)
                            centerTo={0}
                            preset='soft'>
                            <IPA />
                        </Stage>
                        <directionalLight
                            position={[-0.5, 0, 1]}
                            intensity={0.8}
                            color='#ffffff'
                        />
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
