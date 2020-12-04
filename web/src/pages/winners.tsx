import {Hero} from "../sections";

const heroData = {
  primaryText: "meet 2019's edition winners",
};

const Winners = () => {
  return (
    <Hero
      primaryText={heroData.primaryText}
      secondary
      mainClass="containerWinners"
    />
  );
};

export default Winners;
