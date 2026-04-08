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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const
        }
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
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
            ease: [0.22, 1, 0.36, 1] as const
        }
    },
};

export { sectionReveal, staggerContainer, staggerItem };