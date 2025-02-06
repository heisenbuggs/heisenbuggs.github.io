import React from 'react';

import Typewriter from 'typewriter-effect';

const TypeWriterComponent = () => {
  return (
    <Typewriter
      className="typeWriter"
      options={{
        strings: [
          "Software Developer",
          "SWE @LinkedIn",
          "ex - SWE @PhonePe",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
};

export default TypeWriterComponent;
