import React, { useEffect, useState } from 'react';
const App = () => {
  const [robotOpacity, setRobotOpacity] = useState(0);
  const [shadowOpacity, setShadowOpacity] = useState(0);
  const [robotActive, setRobotActive] = useState(true);
  const [shadowActive, setShadowActive] = useState(true);

  useEffect(() => {
    const robotTimeout1 = setTimeout(() => {
      setRobotOpacity(0.3);
      setShadowOpacity(0.3);
    }, 1600);

    const robotTimeout2 = setTimeout(() => {
      setRobotOpacity(0.8);
      setShadowOpacity(0.8);
    }, 1800);

    const robotTimeout3 = setTimeout(() => {
      setRobotOpacity(1);
      setShadowOpacity(1);
      setRobotActive(true);
      setShadowActive(true);
    }, 2000);

    return () => {
      clearTimeout(robotTimeout1);
      clearTimeout(robotTimeout2);
      clearTimeout(robotTimeout3);
    };
  }, []);

  const handleMouseEnter = () => {
    setRobotActive(false);
    setShadowActive(false);
  };

  const handleMouseLeave = () => {
    setRobotActive(true);
    setShadowActive(true);
  };

  const handleScroll = () => {
    const logo = document.querySelector('.logo');
    logo.style.left = `${160 + 0.4 * window.scrollY}px`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className="container">
      <img src="/Logo.png" className="logo" alt="" />
      <img
        src="/Shadow.png"
        className={`robot ${robotActive ? 'activeRobot' : ''}`}
        alt=""
        style={{ opacity: robotOpacity }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <img
        src="/Robot Shadow.png"
        className={`shadow ${shadowActive ? 'activeShadow' : ''}`}
        alt=""
        style={{ opacity: shadowOpacity }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
    <div className='container'></div>
    </>
  );
};

export default App;
