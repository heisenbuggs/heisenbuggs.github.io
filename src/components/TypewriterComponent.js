import React from 'react';

import Typewriter from 'typewriter-effect';

const TypeWriterComponent = () => {
  return (
    <Typewriter
      className="typeWriter"
      options={{
        strings: [
          "Software Engineer",
          "@LinkedIn",
          "ex @PhonePe",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
};

export default TypeWriterComponent;
