import banner_defense from "../assets/Industries/defence_01.png";
import img_01_defense from "../assets/Industries/defence_02.png";
import img_02_defense from "../assets/Industries/defence_03.png";
import img_03_defense from "../assets/Industries/defence_04.png";

import banner_mining from "../assets/Industries/mining_01.png";
import img_01_mining from "../assets/Industries/mining_02.png";
import img_02_mining from "../assets/Industries/mining_03.png";
import img_03_mining from "../assets/Industries/mining_04.png";



const data = {
  "mining-industry": {
    title: "Mining Industry",
    description: "Our Cable Harnesses and Box Assemblies are built to withstand the toughest conditions encountered in the mining industry. They are constructed using durable materials that can resist extreme temperatures, moisture, vibrations, and abrasion.",
    banner: banner_mining,
    imgs: [
      img_01_mining,
      img_02_mining,
      img_03_mining,
    ],
    subTitle: "Our Commitment to Quality",
    subDescription: "Quality is the cornerstone of our operations. We understand that in the defense industry, there is zero room for error. That's why we have implemented rigorous quality control processes at every stage of production. Our highly skilled team, state-of-the-art facilities, and cutting-edge technology ensure that every cable harness and box assembly we produce adheres to the highest industry standards.\nOur products are built to withstand extreme conditions, ensuring reliability in the most challenging environments.",
    subHeader: "Explore Our Specialties and Services for Mining Industry",
    point_01: "Ruggedized for Mining Environments : ",
    point_01_description: "Our cable harness and box assemblies are purpose built to thrive in the challenging conditions of the mining industry. We prioritize durability ,ensuring that our products extreme temperature ,moisture, dust and the relentless vibrations that characterize mining operations.",
    point_02: "Efficiency and Cost Savings : ",
    point_02_description: "Our commitment is to increase the efficiency of mining operations, which leads to significant cost savings. We understand the financial constraints within the mining industry and design our solutions to offer a strong return on investment.",
    point_03: "Customization : ",
    point_03_description: "Our cable harness and box assemblies are purpose built to thrive in the challenging conditions of the mining industry. We prioritize durability ,ensuring that our products extreme temperature ,moisture, dust and the relentless vibrations that characterize mining operations.",
    point_04: "Robust Safety and Compliance : ",
    point_04_description: "We are specialize in customization  according to our customer requirements . we offer customization options for the  mining equipment like its size, power requirements, or specific environmental considerations .Our cable harness and box assemblies are designed to fit  with your exact specifications.",
  },
  "defense-industry": {
    title: "Defense Industry",
    description: "Our cable harnesses are manufactured using the highest quality materials, adhering to strict industry standards. We prioritize excellence and reliability, ensuring that our products consistently meet and exceed your expectations . So we provide The ultimate cable harness and box-assembly solution for the Defense Industry",
    banner: banner_defense,
    imgs: [
      img_01_defense,
      img_02_defense,
      img_03_defense,
    ],
    subTitle: "Our Commitment to Quality",
    subDescription: "Quality is the cornerstone of our operations. We understand that in the defense industry, there is zero room for error. That's why we have implemented rigorous quality control processes at every stage of production. Our highly skilled team, state-of-the-art facilities, and cutting-edge technology ensure that every cable harness and box assembly we produce adheres to the highest industry standards.\nOur products are built to withstand extreme conditions, ensuring reliability in the most challenging environments.",
    subHeader: "Key Features of Our Cable Harness and Box Assemblies:",
    point_01: "Robust Durability : ",
    point_01_description: "Our cable harness and box assemblies are meticulously engineered to endure the harshest conditions. Whether it's extreme temperatures, high-impact vibrations, or exposure to the elements, our products are built to perform. We understand that reliability is paramount in defense applications, and our solutions deliver just that.",
    point_02: "Cutting-Edge Technology : ",
    point_02_description: "We stay at the forefront of technological advancements. Our design and manufacturing processes incorporate the latest innovations, ensuring that your defense systems benefit from the most advanced components available. This dedication to cutting-edge technology allows us to continually enhance the performance and reliability of our products.",
    point_03: "Compliance with Industry Standards : ",
    point_03_description: "We take compliance seriously. Our cable harness and box assemblies meet and exceed all relevant industry standards and regulations. We understand that adherence to these standards is not negotiable in the defense sector. You can rely on us to provide products that are fully compliant with the stringent requirements of the defense industry.",
    point_04: "Scalability for Your Needs : ",
    point_04_description: "No project is too big or too small for us. Our production capabilities are highly scalable, making us a versatile partner for your cable harness and box assembly needs. Whether you require a limited run of specialized components or need large volume orders fulfilled, we maintain the same level of precision and quality assurance throughout the production process.", 
  },
  "transport-industry": {
    title: "Transport Industry",
    description: "We are specialize in customization  according to our customer requirements . we offer customization options for the  mining equipment like its size, power requirements, or specific environmental considerations .Our cable harness and box assemblies are designed to fit  with your exact specifications.",
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