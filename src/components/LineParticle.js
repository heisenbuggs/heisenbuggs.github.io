import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"

const lineParticles = {
  fpsLimit: 120,
  fullScreen: {
    enable: true,
    zIndex: -2,
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: ["connect", "grab"],
      },
      onClick: {
        enable: false,
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 1,
        opacity: 0.2,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 90,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: true,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 500,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 1,
    },
  },
  detectRetina: true,
};

const LineParticle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    // await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container) => {
      console.log(container);
    },
    []
  );
  return (
    <Particles
      id="linetsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={lineParticles}
    />
  );
};

export default LineParticle;
