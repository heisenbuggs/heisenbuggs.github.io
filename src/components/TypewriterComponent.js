import React from 'react';

import Typewriter from 'typewriter-effect';

const TypeWriterComponent = () => {
  return (
    <Typewriter
      className="typeWriter"
      options={{
        strings: [
          "SWE @LinkedIn",
          "ex - SWE @PhonePe",
          "Software Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
};

export default TypeWriterComponent;
