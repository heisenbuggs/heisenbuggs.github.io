import React, { useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Hello There!!",
  "नमस्ते!!",
  "ನಮಸ್ತೆ!!",
  "Hola!!",
  "Ciao!!",
  "Bonjour!!",
  "Hallo!!",
  "வணக்கம்!!",
];

const Greeting = () => {
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 style={{ paddingBottom: 15 }} className="heading">
      <TextTransition
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.molasses}
      />
    </h1>
  );
};

export default Greeting;
