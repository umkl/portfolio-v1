import React from "react";
import {useSpring, animated} from "react-spring"
import "./sprintest.scss";

const calcXY = (x, y) => [
  -(y - window.innerHeight / 2) / 15, (x - window.innerWidth / 2) / 15, 1.0
];

const perspective = (x, y, s) =>
  `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const SpringTest = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 0.5],
    config: { mass: 5, tension: 200, friction: 100 },
  }));
  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calcXY(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(perspective) }}
    />
  );
}

export default SpringTest;

