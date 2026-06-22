export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 50,
    },

    show: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.7,
        },
    },
};

export const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -50,
    },

    show: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.7,
        },
    },
};

export const fadeRight = {
    hidden: {
        opacity: 0,
        x: 50,
    },

    show: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.7,
        },
    },
};

export const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },

    show: {
        opacity: 1,
        scale: 1,

        transition: {
            duration: 0.6,
        },
    },
};