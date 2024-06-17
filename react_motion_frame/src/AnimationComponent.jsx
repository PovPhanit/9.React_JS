import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimationComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        left: '0%',
        top: '0%',
        backgroundColor: "blue",
        rotate: 0,
        skew: 0,
        scale: 1,
      }}
      animate={
            { 
              left: ["0%", "50%", "50%", "0%", "0%"], 
              top: ["0%", "0%", "50%", "50%", "0%"],
              backgroundColor: ["blue", "red", "yellow", "green", "lime"],
              rotate: [0, 90, 180, 270, 360],
              skew: [0, 10, -10, 10, 0],
              scale: [1, 1.5, 1.2, 0.8, 1]
            }
      }
      transition={{
        duration: 10,
        ease: 'easeInOut',
        repeat: Infinity,
        times: [0, 0.2, 0.4, 0.6, 1],
        // delay:3
      }}
      style={{
        width: 100,
        height: 100,
        position: 'absolute',
      }}
    >
      Hello, Framer Motion!
    </motion.div>
  );
};

export default AnimationComponent;
