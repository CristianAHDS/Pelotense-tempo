export const ANIMATION = {
  duration: 0.4,
  stagger: 0.15,
  cardDayDelay: 0,
  ease: 'easeOut',
};

export const cardAnimation = (delay) => ({
  initial: {
    opacity: 0,
    y: -20,
    scaleY: 0.8,
    transformOrigin: 'top center',
  },
  animate: {
    opacity: 1,
    y: 0,
    scaleY: 1,
  },
  transition: {
    duration: ANIMATION.duration,
    delay,
    ease: ANIMATION.ease,
  },
});
