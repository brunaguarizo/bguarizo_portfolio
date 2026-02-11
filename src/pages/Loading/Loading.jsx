import React from "react";
import FluidWave from "../../components/FluidWave/FluidWave";
import styles from "./Loading.module.css";

const Loading = () => {
    return (
        <div className={styles.loading_page}>
            <FluidWave fixed={true} containerClassName={styles.fluid_container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Bruna Guarizo</h1>
                    <p className={styles.subtitle}>
                        Brand Designer & Frontend Developer
                    </p>
                </div>
            </FluidWave>
        </div>
    );
};

export default Loading;
