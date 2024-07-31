"use client";

import React from "react";
import styles from "./component-congrats.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <main id={styles.main}>
      <div id={styles.inner_component}>
        <div>
          <Image
            width={101}
            height={101}
            onContextMenu={(e) => e.preventDefault()}
            src="/gallery/clapping-hands-293987_640.png"
            alt=""
          />
        </div>
        <div>
          <h6>
            <span>x</span>
          </h6>
          <h2>Congratulation on landing your first job!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            perspiciatis, quidem nobis magni eius velit dicta asperiores
            quisquam, nulla nisi hic necessitatibus. Eum, impedit consequatur!
            At quos esse quo aliquam.
          </p>
          <br />
          <button>Close</button>
        </div>
      </div>
    </main>
  );
}
