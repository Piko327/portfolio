
export const SlideFromLeft = {
    hidden: { opacity: 0, x: -300 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.2,
            delay: 0.2,
            x: { duration: 1.2 },
        },
    },
};
export const SlideFromTop = {
    hidden: { opacity: 0, y: -400 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            delay: 0.2,
            x: { duration: 1.2 },
        },
    },
};