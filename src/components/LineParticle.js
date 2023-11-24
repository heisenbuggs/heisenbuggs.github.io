import Particles from "react-tsparticles";

const lineParticles = {
  background: {
    image: "",
    position: "",
    repeat: "",
    size: "",
    opacity: 0
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff"
      },
      opacity: 1
    },
    enable: false
  },
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  fpsLimit: 120,
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
      distance: 150,
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
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle"
    },
    size: {
      random: true,
      value: 1,
    },
  },
  detectRetina: true,
};

const LineParticle = () => {
  const particlesInit = (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    console.log("particles init in stars")
  };

  const particlesLoaded = (container) => {
    console.log("particles init in stars")
  };
  return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={lineParticles}
      />
  )
}

export default LineParticle;
