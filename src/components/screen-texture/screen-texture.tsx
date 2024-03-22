import "./screentexture.scss";

const ScreenTexture = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100%"
      opacity="0.5"
      className="screen-texture"
    >
      <defs>
        <filter
          id="nnnoise-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            seed="15"
            stitchTiles="stitch"
          ></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
      </defs>
      <rect width="700" height="700" fill="transparent"></rect>
      <rect width="100%" height="100%" filter="url(#nnnoise-filter)"></rect>
    </svg>
  );
};

export default ScreenTexture;
