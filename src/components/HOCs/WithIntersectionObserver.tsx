"use client";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
};

export function WithIntersectionObserver<T extends object>(Component: React.ComponentType<T>) {
    return (props: T) => {
        const controls = useAnimation();
        const [ref, inView] = useInView();
        useEffect(() => {
            if (inView) {
                controls.start("visible");
            }
        }, [controls, inView]);

        return (<motion.div ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants}>
            <Component {...props} />
        </motion.div>)
    }
}