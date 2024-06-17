
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimationComponent = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div>
      <motion.div
        ref={ref1}
        initial={{
          opacity: 0,
          x: 0,
          y: 0,
          scale: 0.3,
          rotate: 0
        }
        }
        animate={{
          opacity: 1,
          x: 100,
          y: 100,
          scale: 1,
          rotate: 90
        }}
        
        transition={{ duration: 1, ease: "easeInOut",delay: 0 }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          position: 'absolute',
        }}
      />
      <motion.div
        ref={ref2}
        initial={{ left: '50%', top: 0 }}
        animate={inView2 ? { top: '50%' } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          position: 'absolute',
        }}
      />Hello
    </div>
  );
};

export default AnimationComponent;
