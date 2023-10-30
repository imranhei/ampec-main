import React from "react";
import defence_01 from "../../../assets/Industries/defence_01.png";
import Slider from "react-slick";
import defence_02 from "../../../assets/Industries/defence_02.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const data = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="86"
          height="71"
          viewBox="0 0 86 71"
          fill="none"
        >
          <g clip-path="url(#clip0_1647_40)">
            <path
              d="M65.9071 71H20.0929C9.01119 71 0 62.0304 0 50.9348V20.0652C0 8.99877 9.01119 0 20.0929 0H65.8779C76.9888 0 85.9708 8.99877 85.9708 20.0652V50.9348C86 62.0304 76.9888 71 65.9071 71Z"
              fill="#0060A4"
            />
            <path
              d="M64.42 56.7006C64.0409 56.7006 63.6618 56.5259 63.4285 56.1764L56.1671 45.4886L50.6845 56.06C50.4804 56.4677 50.0721 56.7006 49.6347 56.7006H43.1315C42.4899 56.7006 41.9358 56.1764 41.9358 55.5066V45.4595C41.9358 44.8188 42.4607 44.2654 43.1315 44.2654C43.773 44.2654 44.3271 44.7896 44.3271 45.4595V54.3126H48.9056L54.9714 42.6055C55.1755 42.2269 55.5255 41.9939 55.9629 41.9648C56.4004 41.9357 56.7795 42.1395 57.0128 42.489L63.2244 51.6334V14.7064H22.7469V54.3417H30.7374C31.379 54.3417 31.9331 54.8659 31.9331 55.5358C31.9331 56.2056 31.4082 56.7298 30.7374 56.7298H21.5804C20.9389 56.7298 20.3848 56.2056 20.3848 55.5358V13.5124C20.3848 12.8717 20.9097 12.3184 21.5804 12.3184H64.4492C65.0908 12.3184 65.6449 12.8426 65.6449 13.5124V55.5066C65.6449 56.0308 65.2949 56.4968 64.7991 56.6424C64.6533 56.6715 64.5367 56.7006 64.42 56.7006Z"
              fill="white"
            />
            <path
              d="M39.5453 18.4043H37.0957V28.3059H39.5453V18.4043Z"
              fill="white"
            />
            <path
              d="M49.2563 18.4043H46.8066V28.3059H49.2563V18.4043Z"
              fill="white"
            />
            <path
              d="M33.4199 28.3066V36.8977C33.4199 41.6446 37.7943 45.4888 43.1893 45.4888V28.3066H33.4199Z"
              fill="white"
            />
            <path
              d="M43.1895 28.3065V45.4595C48.5845 45.4595 52.9589 41.6153 52.9589 36.8684C52.9589 32.1215 52.9589 28.2773 52.9589 28.2773H43.1895V28.3065Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1647_40">
              <rect width="86" height="71" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Seamless Integration:",
      description:
        "With our cable harness, you can achieve seamless integration of various military systems and equipment. Its versatile design ensures compatibility with a wide rangeof applications, including communication systems, vehicles, aircraft, and more.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="88"
          height="72"
          viewBox="0 0 88 72"
          fill="none"
        >
          <g clip-path="url(#clip0_1647_51)">
            <path
              d="M67.4398 72H20.5602C9.22075 72 0 62.904 0 51.6522V20.3478C0 9.12551 9.22075 0 20.5602 0H67.41C78.7793 0 87.9702 9.12551 87.9702 20.3478V51.6522C88 62.904 78.7793 72 67.4398 72Z"
              fill="#0060A4"
            />
            <path
              d="M29.6914 35.9995C29.6914 43.7961 36.1071 50.1456 43.9851 50.1456C51.863 50.1456 58.2787 43.7961 58.2787 35.9995C58.2787 28.203 51.863 21.8535 43.9851 21.8535C36.1071 21.8535 29.6914 28.203 29.6914 35.9995ZM53.9518 35.1431C54.4293 40.5771 50.371 45.3908 44.8504 45.8634C39.3598 46.3359 34.4957 42.3195 34.0183 36.856C33.5408 31.422 37.5992 26.6082 43.1197 26.1357C48.6402 25.6632 53.4744 29.7091 53.9518 35.1431Z"
              fill="white"
            />
            <path
              d="M63.6193 43.8255L65.9767 43.7369C66.5138 43.7074 67.1106 43.2644 67.23 42.7328L68.0059 39.0412C68.0954 38.5097 67.7373 37.8599 67.2598 37.6237L65.1412 36.5901C64.6339 36.3538 64.2459 35.7041 64.2161 35.1725C64.2161 35.1725 64.2161 34.9067 64.1564 34.257C64.1266 34.0503 64.1266 34.0503 64.1266 34.0503C64.0967 33.814 64.4548 33.371 64.9024 33.0757L66.9018 31.8353C67.3792 31.54 67.6478 30.8608 67.4986 30.3587L66.3049 26.7558C66.0961 26.2537 65.4992 25.8698 64.9323 25.8993L62.5749 26.0765C62.0377 26.106 61.3812 25.8107 61.1127 25.4268C60.8739 25.0133 60.3667 23.6253 60.6054 23.1233L61.7095 21.056C61.9781 20.5835 61.8587 19.8747 61.4708 19.4908L58.6359 16.9805C58.2181 16.6557 57.4721 16.6261 57.0245 16.9215L55.055 18.2504C54.6074 18.5458 53.8912 18.6343 53.4735 18.3981C53.0557 18.1618 51.8919 17.1873 51.8919 16.6557L51.8024 14.3226C51.7726 13.791 51.3249 13.2004 50.7878 13.0823L47.0577 12.3144C46.5206 12.2258 45.8641 12.5802 45.6254 13.0527L44.581 15.1495C44.3422 15.6516 43.6857 16.0355 43.1486 16.065C43.1486 16.065 42.8801 16.065 42.2236 16.1241C41.9848 16.1536 41.9848 16.1536 41.9848 16.1536C41.7759 16.1241 41.3283 15.7697 41.0598 15.2972L39.8065 13.3185C39.5081 12.846 38.8217 12.6097 38.3144 12.7279L34.6739 13.9092C34.1666 14.1159 33.7787 14.7065 33.8085 15.2677L33.9875 17.6007C34.0174 18.1323 33.719 18.782 33.3311 19.0478C32.9133 19.2841 31.5108 19.7861 31.0035 19.5499L28.9146 18.4572C28.4372 18.1914 27.721 18.3095 27.3032 18.6934L24.737 21.499C24.3789 21.9124 24.3789 22.6508 24.6773 23.0937L26.0201 25.0429C26.3185 25.4859 26.408 26.1946 26.1693 26.6081C25.9306 27.0216 24.9458 28.1733 24.3789 28.1733L22.0215 28.2619C21.4843 28.2914 20.9174 28.7344 20.7681 29.266L19.9923 32.9871C19.9028 33.5187 20.2609 34.1684 20.7383 34.4047L22.857 35.4383C23.3643 35.6745 23.7522 36.3243 23.7821 36.8558C23.7821 36.8558 23.7821 37.1216 23.8417 37.7713C23.8716 37.9485 23.8716 37.9485 23.8716 37.9485C23.9014 38.1848 23.5433 38.6278 23.0659 38.9231L21.0666 40.1635C20.5891 40.4588 20.3205 41.138 20.4697 41.6401L21.6634 45.243C21.8723 45.7451 22.4691 46.129 23.036 46.0995L25.3934 45.9223C25.9306 45.8928 26.5871 46.1881 26.8556 46.572C27.0944 46.9855 27.6017 48.3735 27.3629 48.8755L26.2588 50.9428C25.9903 51.4153 26.1096 52.1241 26.4975 52.5376L29.3324 55.0478C29.7502 55.3727 30.4962 55.4022 30.9438 55.1069L32.9133 53.7779C33.3609 53.4826 34.0771 53.394 34.4948 53.6303C34.9126 53.8665 36.0764 54.8411 36.0764 55.3727L36.1659 57.7057C36.1958 58.2373 36.6434 58.828 37.1805 58.9461L40.9106 59.7139C41.4477 59.8025 42.1042 59.4481 42.3429 58.9756L43.3873 56.8788C43.6261 56.3768 44.2826 55.9928 44.8197 55.9633C44.8197 55.9633 45.0883 55.9633 45.7448 55.9042C45.9536 55.8747 45.9536 55.8747 45.9536 55.8747C46.1924 55.8452 46.64 56.1996 46.9384 56.6426L48.1917 58.6212C48.4901 59.0938 49.1466 59.3595 49.6837 59.2119L53.3243 58.0306C53.8316 57.8239 54.2195 57.2332 54.1896 56.6721L54.0106 54.339C53.9808 53.8074 54.2792 53.1577 54.6671 52.8919C55.0849 52.6557 56.4874 52.1536 56.9947 52.3899L59.0835 53.4826C59.561 53.7484 60.2771 53.6303 60.6949 53.2463L63.2314 50.4408C63.5596 50.0273 63.5894 49.289 63.291 48.846L61.9482 46.8969C61.6498 46.4539 61.5603 45.7451 61.799 45.3316C62.0676 45.0068 63.0523 43.855 63.6193 43.8255ZM43.9842 52.1241C35.0021 52.1241 27.6912 44.8887 27.6912 35.9994C27.6912 27.1101 35.0021 19.8747 43.9842 19.8747C52.9662 19.8747 60.2771 27.1101 60.2771 35.9994C60.2771 44.8887 52.996 52.1241 43.9842 52.1241Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1647_51">
              <rect width="88" height="72" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Unparalleled Durability:",
      description:
        "Our cable harness is built to withstand extreme temperatures, harsh weather conditions, and heavy-duty usage. It guarantees optimal performance in the most demanding military operations.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="86"
          height="71"
          viewBox="0 0 86 71"
          fill="none"
        >
          <g clip-path="url(#clip0_1647_57)">
            <path
              d="M65.9071 71H20.0929C9.01119 71 0 62.0304 0 50.9348V20.0652C0 8.99877 9.01119 0 20.0929 0H65.8779C76.9888 0 85.9708 8.99877 85.9708 20.0652V50.9348C86 62.0304 76.9888 71 65.9071 71Z"
              fill="#0060A4"
            />
            <path
              d="M65.324 54.0505C68.4444 54.0797 71.244 52.6236 73.0229 50.2938C73.2854 49.9443 73.0521 49.4492 72.6147 49.4492H65.9656L62.9036 44.4984L65.9656 39.5477H72.6147C73.0521 39.5477 73.2854 39.0526 73.0229 38.7031C71.3023 36.4607 68.6194 35.0046 65.5573 34.9464C61.5913 34.8881 58.1501 37.2761 56.6628 40.6834H29.6876C28.2294 37.3344 24.9341 34.9755 21.0555 34.9464C17.9351 34.9464 15.1355 36.4316 13.3858 38.7322C13.1233 39.0817 13.3566 39.5768 13.794 39.5768H20.4139L23.476 44.5276L20.4139 49.4783H13.794C13.3566 49.4783 13.1233 49.9734 13.3858 50.3229C15.1063 52.5653 17.7893 54.0214 20.8513 54.0797C24.8174 54.1379 28.2586 51.7499 29.7459 48.3426H56.7211C58.1501 51.6625 61.4454 54.0214 65.324 54.0505Z"
              fill="white"
            />
            <path
              d="M45.4358 29.2093V26.2388H63.1957L65.2662 27.5493L73.1401 25.9767V22.8024L65.2662 21.2298L63.1957 22.5403H45.4358V19.5699C45.4358 19.1621 45.0566 18.8418 44.59 18.8418H43.1611C42.6945 18.8418 42.3154 19.1621 42.3154 19.5699V19.7446C41.353 19.1913 40.1865 18.8418 38.9325 18.8418H18.9854C15.6026 18.8418 12.8613 21.2298 12.8613 24.2003V24.608C12.8613 27.5785 15.6026 29.9665 18.9854 29.9665H38.9617C40.2157 29.9665 41.3822 29.6461 42.3445 29.0637V29.2384C42.3445 29.6461 42.7237 29.9665 43.1903 29.9665H44.6192C45.0858 29.9374 45.4358 29.617 45.4358 29.2093ZM17.0024 21.4628V20.2397H38.9617V21.4337H17.0024V21.4628ZM17.0024 24.9283V23.7343H38.9617V24.9283H17.0024ZM17.0024 28.3939V27.1999H38.9617V28.3939H17.0024Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1647_57">
              <rect width="86" height="71" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Customization Options:",
      description:
        "We offer flexible customization options to meet your specific requirements. Whether you need unique connectors, specialized shielding, or tailored lengths, our team of experts will work closely with you to deliver the perfect solution.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    gap: 20,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="flex w-full flex-col items-center justify-center lg:mt-44 sm:mt-36 mt-24 container mx-auto">
      <p className="lg:text-5xl sm:text-[40px] text-2xl font-bold tracking-wide font-exo lg:pb-16 sm:pb-14 pb-8 px-10 text-amBlue text-center">
        Defense Industry
      </p>
      <div className="text-center text-amBlue lg:text-lg sm:text-base text-sm font-semibold lg:leading-10 leading-6 tracking-wide font-khula sm:pb-14 pb-8 sm:px-20 px-10">
        Our cable harnesses are manufactured using the highest quality
        materials, adhering to strict industry standards. We prioritize
        excellence and reliability, ensuring that our products consistently meet
        and exceed your expectations . So we provide The ultimate cable harness
        and box-assembly solution for the Defense Industry
      </div>
      <img src={defence_01} alt="background" className="w-full pb-10" />
      <div className="xl:w-[1200px] md:w-[768px] w-[320px] mx-auto">
        <Slider
          {...settings}
          className="card mx-auto pb-10 overflow-hidden z-10"
        >
          {data.map((item, index) => (
            <div key={index} className="w-full h-full flex justify-center p-4">
              <div className="flex justify-center">
                <div className="bg-amCard hover:ring-1 ring-amYellow/30 hover:bg-gray-100 rounded-xl p-8 sm:w-[370px] w-80 sm:h-[450px] h-[380px] shadow-md space-y-2 relative z-10">
                  <div className="sm:h-36 h-24 sm:w-36 w-24 sm:scale-100 scale-90 mx-auto flex justify-center items-center">
                    {item.icon}
                  </div>
                  <p className="font-bold font-exo text-amBlue pt-4 tracking-widest sm:text-xl text-center pb-2">
                    {item.title}
                  </p>
                  <p className="font-khula text-amBlue md:text-base text-sm sm:text-center text-justify lg:leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex lg:gap-20 gap-10 sm:px-20 px-10 py-10">
        <img src={defence_02} alt="" className="flex-1" />
        <div className="text-amBlue flex-1">
          <p className="font-exo font-bold lg:text-4xl sm:text-3xl text-xl pb-10">
            Our Commitment to Quality
          </p>
          <p className="font-khula leading-7 pb-10">
            Quality is the cornerstone of our operations. We understand that in
            the defense industry, there is zero room for error. That's why we
            have implemented rigorous quality control processes at every stage
            of production. Our highly skilled team, state-of-the-art facilities,
            and cutting-edge technology ensure that every cable harness and box
            assembly we produce adheres to the highest industry standards.
            <br /> <br />
            Our products are built to withstand extreme conditions, ensuring
            reliability in the most challenging environments.
          </p>
          <Link
            to="/contact"
            className="text-amYellow w-fit font-lato text-bold sm:text-base text-sm flex gap-2 border border-amBlue/30 px-10 py-3 rounded hover:bg-amBlue group"
          >
            <p>Contact Us</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-amBlue rotate-45 group-hover:translate-x-1 group-hover:text-amYellow duration-300"
            >
              <path
                fill="currentColor"
                d="M11 19.5V7.914l-4.5 4.5L5.086 11L12 4.086L18.914 11L17.5 12.414l-4.5-4.5V19.5h-2Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
