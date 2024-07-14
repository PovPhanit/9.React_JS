import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typical from 'react-typical';
import { TypeAnimation } from 'react-type-animation';
import { useSpring, animated } from 'react-spring';
const AnimationComponent = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <>
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
    <Typical
    steps={['Hello', 1000, 'Hello world!', 500]}
    loop={Infinity}
    wrapper="p"
  />
   <TypeAnimation
    sequence={[
      'Developer Cambodia', 4000,  // Increased duration to 2000ms
      'Web Developer', 2000,       // Increased duration to 1000ms
      'Web Design', 2000           // Increased duration to 1000ms
    ]}
    wrapper="span"
    cursor={true}
    repeat={Infinity}
    style={{ fontSize: '2em', display: 'inline-block',color:'blue' }}
  />
  <animated.div style={props}>Hello, I fade in!</animated.div>
    </>
  );
};

export default AnimationComponent;
