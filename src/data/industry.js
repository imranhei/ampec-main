import banner_defense from "../assets/Industries/defence_01.png";
import img_01 from "../assets/Industries/defence_02.png";
import img_02 from "../assets/Industries/defence_03.png";
import img_03 from "../assets/Industries/defence_04.png";

const data = {
  "mining-industry": {

  },
  "defense-industry": {

  },
  "transport-industry": {

  },
  "gaming-industry": {

  },
  "medical-industry": {

  },
  "energy-industry": {

  },
};

export const getIndustry = (path) => {
    return data[path];
  };