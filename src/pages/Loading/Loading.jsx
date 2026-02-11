import React from "react";
import FluidWave from "../../components/FluidWave/FluidWave";
import styles from "./Loading.module.css";

const Loading = () => {
    return (
        <div className={styles.loading_page}>
            <FluidWave fixed={true} containerClassName={styles.fluid_container}>
                <div className={styles.content}>
                    <img
                        src='/bg logo.svg'
                        alt='Bruna Guarizo'
                        className={styles.logo}
                    />
                    <p className={styles.subtitle}>
                        Brand Designer & Frontend Developer
                    </p>
                </div>
            </FluidWave>
        </div>
    );
};

export default Loading;
