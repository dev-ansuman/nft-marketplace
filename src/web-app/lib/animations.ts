const sectionReveal = {
    hidden: {
        opacity: 0,
        y: 72,
        scale: 0.96
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.9,
            ease: [0.24, 1, 0.38, 1] as const
        }
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        }
    }
};

const staggerItem = {
    hidden: {
        opacity: 0,
        y: 28,
        scale: 0.98
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.55,
            ease: [0.24, 1, 0.38, 1] as const
        }
    },
};

export { sectionReveal, staggerContainer, staggerItem };