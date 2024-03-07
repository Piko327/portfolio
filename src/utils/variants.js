
export const SlideFromLeft = {
    hidden: { opacity: 0, x: -300 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .8,
            delay: 0.15,
            x: { duration: .8, },
        },
    },
};
export const SlideFromTop = {
    hidden: { opacity: 0, y: -400 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .8,
            delay: 0.15,
            x: { duration: .8, },
        },
    },
};