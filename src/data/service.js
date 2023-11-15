import banner_cable_assembly from "../assets/Services/cable_01.png"
import img_content from "../assets/Services/cable_02.png";
import img1_cable_assembly from "../assets/Services/cable_03.png";
import img2_cable_assembly from "../assets/Services/cable_04.png";
import img3_cable_assembly from "../assets/Services/cable_05.png";

const data = {
    "cable-assembly": {
      title: "Cable Assembly",
      description:
        "Cable assembly is the process of creating custom cables and harnesses by combining wires, connectors, and other components. These assemblies serve as the backbone of modern technology, ensuring that data, power, and signals flow seamlessly between devices. At Ampec, we are passionate about precision and connectivity. With years of experience and a dedicated team of experts, we specialize in cable assembly solutions that drive innovation and enable seamless communication.",
      banner: banner_cable_assembly,
      contentImg: img_content,
      subTitle: "Experience You Can Trust",
      subDesc:
        "Our experience is as diverse as the unique needs of our clients. Whether you're in need of thousands of identical custom cables or complex wiring harnesses and assemblies containing over 50 custom cables and connections within each product, we have the knowledge and capability to deliver. Our portfolio is a testament to our ability to meet your demands, no matter how intricate they may be When it comes to flexible, responsive, and quality-guaranteed cable assemblies, Ampec Technologies is the name you can trust. Contact us today, and let's discuss how we can create custom solutions that exceed your expectations. Your success is our mission, and we're ready to make it happen.",
      point_1_title: "Bespoke Cable Assemblies from Scratch",
      point_1_desc:
        "At Ampec, we understand that each project is unique, and off-the-shelf solutions may not always fit. That's why we take pride in our ability to build custom cables from scratch. Our team of expert engineers and technicians will work closely with you to design and manufacture cable assemblies that are tailored to your exact specifications. This level of customization ensures that your cables will perform optimally in your specific application.",
      point_2_title: "Custom Wiring Harnesses",
      point_2_desc:
        "In addition to custom cables, we specialize in crafting custom wiring harnesses. These harnesses are meticulously designed and manufactured to integrate seamlessly into your systems, ensuring that your devices and machinery function smoothly and efficiently. We have the expertise to create complex wiring solutions, providing the connectivity your project demands.",
      point_3_title: "Complete Product Integration",
      point_3_desc:
        "Our commitment to your success extends beyond just cables and wiring harnesses. We can take your project to the next level by manufacturing your finished product. This means we can assemble and connect any mix of cabling that your product requires, providing you with a turnkey solution. Whether it's for industrial machinery, consumer electronics, or any other application, we have the expertise and facilities to bring your product to life",
      imgs: [img1_cable_assembly, img2_cable_assembly, img3_cable_assembly],
    },
//   {
//     "/box-Build-assembly": {
//       path: "/box-Build-assembly",
//       title: "Box Build Assembly",
//       description:
//         "Box build assembly is the process of assembling a complete product from its individual components. This process involves integrating all the parts of a product into a single enclosure, including the PCB, wiring, and other components. At Ampec, we specialize in box build assembly solutions that drive innovation and enable seamless communication.",
    // },
//   },
};
//write a function to return a item data from json data
export const getService = (path) => {
  return data[path];
};
