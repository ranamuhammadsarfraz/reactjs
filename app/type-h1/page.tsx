"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./type-h1.module.css";

export default function Page() {
  const h1Data: string = "Say hello to H1!";
  const moveBorder = useRef();
  const [movB, setMovB] = useState(true);

  const callback = function (entries) {
    if (entries[0].isIntersecting) {
      setMovB(false);
    } else {
      setMovB(true);
    }
  };

  const observer = new IntersectionObserver(callback, {
    threshold: 0.4,
  });

  useEffect(() => {
    observer.observe(moveBorder.current);
  }, []);
  return (
    <>
      <div id={styles.main}>
        <h1>{h1Data}</h1>
        <div id={movB ? styles.div : styles.div_} ref={moveBorder}>
          |
        </div>
      </div>
      <h1>{h1Data}</h1>
    </>
  );
}
