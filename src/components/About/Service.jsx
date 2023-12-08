import React from "react";
import Slider from "react-slick";
import CallUs from "../Shared/CallUs";
import { Link } from "react-router-dom";

const Service = () => {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="136"
          height="136"
          viewBox="0 0 136 136"
          fill="none"
        >
          <g clipPath="url(#clip0_840_218)">
            <path
              d="M74.2264 17.7812H61.8281V52.3114H74.2264V17.7812Z"
              fill="#0593A1"
            />
            <path
              d="M80.371 21.425L68.0272 0L55.6289 21.425H80.371Z"
              fill="#0593A1"
            />
            <path
              d="M74.2264 83.7422H61.8281V118.272H74.2264V83.7422Z"
              fill="#485678"
            />
            <path
              d="M55.6289 114.629L68.0272 136L80.371 114.629H55.6289Z"
              fill="#485678"
            />
            <path
              d="M52.3114 61.8281H17.7812V74.2264H52.3114V61.8281Z"
              fill="#DF4937"
            />
            <path
              d="M21.425 55.6289L0 68.0272L21.425 80.371V55.6289Z"
              fill="#DF4937"
            />
            <path
              d="M118.272 61.8281H83.7422V74.2264H118.272V61.8281Z"
              fill="#FDD303"
            />
            <path
              d="M114.629 80.371L136 68.0272L114.629 55.6289V80.371Z"
              fill="#FDD303"
            />
            <path
              d="M94.3998 41.7085L106.961 48.1795L81.8384 43.2855L69.2227 36.8145L94.3998 41.7085Z"
              fill="#C7B77A"
            />
            <path
              d="M63.7872 45.733L94.4022 41.709L94.0759 95.054L63.4609 99.1324L63.7872 45.733Z"
              fill="#FFEB9C"
            />
            <path
              d="M38.6094 40.8384L69.2243 36.8145L94.4015 41.7085L63.7865 45.7325L38.6094 40.8384Z"
              fill="#706745"
            />
            <path
              d="M63.7846 45.7319L63.4584 99.1314L38.2812 94.2373L38.6075 40.8379L63.7846 45.7319Z"
              fill="#BAAB72"
            />
            <path
              d="M71.8875 56.3367L102.557 52.2584L94.4001 41.709L63.7852 45.733L71.8875 56.3367Z"
              fill="#E7D58D"
            />
            <path
              d="M45.1888 55.2481L63.7862 45.7319L38.6091 40.8379L20.0117 50.3541L45.1888 55.2481Z"
              fill="#C7B77A"
            />
            <g opacity="0.5">
              <path
                d="M83.4163 78.4682C83.5251 79.3926 83.1444 79.9364 82.8182 80.2627C82.1656 80.8608 81.1868 81.0783 80.4799 80.7521C80.0993 80.5889 79.6099 80.2083 79.6642 79.2295L79.7186 70.5833L86.7878 69.822C85.4827 66.8312 82.5463 64.9824 79.1205 65.3086C75.6946 65.6349 72.8126 68.1363 71.4531 71.5078L78.5223 70.7465L78.4679 79.447C78.4679 80.6977 79.0117 81.6221 79.9361 82.0571C80.4255 82.2747 80.9149 82.329 81.4587 82.2203C82.1656 82.1115 82.9269 81.7852 83.5251 81.2415C84.3951 80.4258 84.7758 79.2838 84.6127 78.1419L83.4163 78.4682Z"
                fill="#3C3C3B"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_840_218">
              <rect width="136" height="136" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Low MOQ & order value",
      link: "/manufacturing",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="119"
          height="139"
          viewBox="0 0 119 139"
          fill="none"
        >
          <g clipPath="url(#clip0_845_412)">
            <path
              d="M59.4983 0L65.3147 11.6606L78.2076 13.586L68.9091 22.7178L71.0611 35.5683L59.4983 29.5517L47.9356 35.5683L50.0876 22.7178L40.7891 13.586L53.682 11.6606L59.4983 0Z"
              fill="#FFD020"
            />
            <path
              d="M25.583 21.1348L29.7233 29.4351L38.901 30.8055L32.2823 37.3059L33.8139 46.4525L25.583 42.1701L17.3527 46.4525L18.8843 37.3059L12.2656 30.8055L21.4433 29.4351L25.583 21.1348Z"
              fill="#FFD020"
            />
            <path
              d="M10.3226 48.5137L13.5315 54.9469L20.6458 56.0093L15.5151 61.048L16.7022 68.1376L10.3226 64.8183L3.9429 68.1376L5.13006 61.048L0 56.0093L7.1136 54.9469L10.3226 48.5137Z"
              fill="#FFD020"
            />
            <path
              d="M93.4189 21.1348L89.2793 29.4351L80.1016 30.8055L86.7203 37.3059L85.1887 46.4525L93.4189 42.1701L101.65 46.4525L100.118 37.3059L106.737 30.8055L97.5592 29.4351L93.4189 21.1348Z"
              fill="#FFD020"
            />
            <path
              d="M108.679 48.5137L105.469 54.9469L98.3555 56.0093L103.486 61.048L102.298 68.1376L108.679 64.8183L115.058 68.1376L113.871 61.048L119.001 56.0093L111.888 54.9469L108.679 48.5137Z"
              fill="#FFD020"
            />
            <path
              d="M76.7719 97.2285L89.8966 129.54L75.1329 126.45L75.1846 126.429L66.7535 138.931L53.6289 106.619L76.7719 97.2285Z"
              fill="#3B93FF"
            />
            <path
              d="M65.6895 106.876L52.1103 138.999L43.8565 126.38L43.9076 126.402L29.1016 129.284L42.6808 97.1602L65.6895 106.876Z"
              fill="#4DB1FF"
            />
            <path
              d="M94.9449 74.9729C94.9449 76.8023 92.7102 78.4358 92.4343 80.1881C92.1516 81.9873 93.7692 84.2275 93.2186 85.9227C92.6579 87.6475 90.027 88.5098 89.2132 90.1031C88.3906 91.7131 89.2333 94.3465 88.1771 95.7974C87.1155 97.2551 84.3477 97.2638 83.0753 98.5356C81.8028 99.8073 81.7941 102.574 80.3356 103.635C78.8839 104.69 76.2491 103.849 74.6382 104.67C73.0441 105.484 72.1813 108.113 70.4556 108.673C68.7594 109.224 66.5181 107.607 64.7178 107.89C62.9646 108.165 61.3302 110.399 59.4998 110.399C57.6694 110.399 56.035 108.165 54.2818 107.89C52.4816 107.607 50.2402 109.224 48.544 108.673C46.8183 108.113 45.9555 105.484 44.3614 104.67C42.7505 103.848 40.1157 104.69 38.664 103.635C37.2055 102.574 37.1968 99.8073 35.9243 98.5356C34.6519 97.2638 31.8834 97.2551 30.8225 95.7974C29.7662 94.3465 30.6083 91.7131 29.7864 90.1031C28.9726 88.5098 26.3417 87.6475 25.781 85.9227C25.2304 84.2275 26.848 81.9873 26.5653 80.1881C26.29 78.4358 24.0547 76.8023 24.0547 74.9729C24.0547 73.1434 26.2894 71.5099 26.5653 69.7576C26.848 67.9584 25.2304 65.7182 25.781 64.023C26.3417 62.2982 28.9726 61.4359 29.7864 59.8426C30.6089 58.2326 29.7662 55.5992 30.8225 54.1483C31.8841 52.6906 34.6519 52.6819 35.9243 51.4101C37.1968 50.1384 37.2055 47.3714 38.664 46.311C40.1157 45.2553 42.7505 46.0969 44.3614 45.2755C45.9555 44.4621 46.8183 41.8327 48.544 41.2723C50.2402 40.722 52.4816 42.3387 54.2818 42.0562C56.035 41.781 57.6694 39.5469 59.4998 39.5469C61.3302 39.5469 62.9646 41.7803 64.7178 42.0562C66.5181 42.3387 68.7594 40.722 70.4556 41.2723C72.1813 41.8327 73.0441 44.4621 74.6382 45.2755C76.2491 46.0976 78.8839 45.2553 80.3356 46.311C81.7941 47.372 81.8028 50.1384 83.0753 51.4101C84.3477 52.6819 87.1162 52.6906 88.1771 54.1483C89.2333 55.5992 88.3913 58.2326 89.2132 59.8426C90.027 61.4359 92.6579 62.2982 93.2186 64.023C93.7692 65.7182 92.1516 67.9584 92.4343 69.7576C92.7102 71.5099 94.9449 73.1434 94.9449 74.9729Z"
              fill="#0060A4"
            />
            <path
              d="M59.5002 101.431C74.1208 101.431 85.9731 89.5849 85.9731 74.9723C85.9731 60.3596 74.1208 48.5137 59.5002 48.5137C44.8797 48.5137 33.0273 60.3596 33.0273 74.9723C33.0273 89.5849 44.8797 101.431 59.5002 101.431Z"
              fill="white"
            />
            <path
              d="M59.5006 98.9401C72.7449 98.9401 83.4816 88.2092 83.4816 74.972C83.4816 61.7348 72.7449 51.0039 59.5006 51.0039C46.2562 51.0039 35.5195 61.7348 35.5195 74.972C35.5195 88.2092 46.2562 98.9401 59.5006 98.9401Z"
              fill="#0060A4"
            />
            <path
              d="M74.4842 65.2672L56.9157 87.2387L55.039 89.5863L52.6492 87.5817L44.5156 80.7578L49.7961 75.4809L54.3433 80.8947L67.6788 60.3594L74.4842 65.2672Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_845_412">
              <rect width="119" height="139" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Flexibility & quality",
      link: "/quality",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="162"
          height="92"
          viewBox="0 0 162 92"
          fill="none"
        >
          <g clipPath="url(#clip0_840_253)">
            <path d="M112.871 0H103.91V29.6922H112.871V0Z" fill="#E2C097" />
            <path
              d="M110.607 3.41992H106.191V26.2728H110.607V3.41992Z"
              fill="#C9A173"
            />
            <path d="M139.253 0H112.871V29.6922H139.253V0Z" fill="#C9A173" />
            <path
              d="M135.8 3.41992H116.32V26.2728H135.8V3.41992Z"
              fill="#E2C097"
            />
            <path
              d="M135.358 25.6665H132.278L116.75 3.99023H119.83L135.358 25.6665Z"
              fill="#C9A173"
            />
            <path d="M85.1913 0H76.2305V29.6922H85.1913V0Z" fill="#E2C097" />
            <path
              d="M82.9272 3.41992H78.5117V26.2728H82.9272V3.41992Z"
              fill="#C9A173"
            />
            <path d="M111.573 0H85.1914V29.6922H111.573V0Z" fill="#C9A173" />
            <path
              d="M108.121 3.41992H88.6406V26.2728H108.121V3.41992Z"
              fill="#E2C097"
            />
            <path
              d="M107.678 25.6665H104.599L89.0703 3.99023H92.15L107.678 25.6665Z"
              fill="#C9A173"
            />
            <path
              d="M126.789 29.6914H117.828V59.3837H126.789V29.6914Z"
              fill="#E2C097"
            />
            <path
              d="M124.505 33.1113H120.09V55.9642H124.505V33.1113Z"
              fill="#C9A173"
            />
            <path
              d="M153.151 29.6914H126.77V59.3837H153.151V29.6914Z"
              fill="#C9A173"
            />
            <path
              d="M149.703 33.1113H130.223V55.9642H149.703V33.1113Z"
              fill="#E2C097"
            />
            <path
              d="M149.257 55.3571H146.177L130.648 33.6992H133.728L149.257 55.3571Z"
              fill="#C9A173"
            />
            <path
              d="M99.1991 29.6914H90.2383V59.3837H99.1991V29.6914Z"
              fill="#E2C097"
            />
            <path
              d="M96.9155 33.1113H92.5V55.9642H96.9155V33.1113Z"
              fill="#C9A173"
            />
            <path
              d="M125.561 29.6914H99.1797V59.3837H125.561V29.6914Z"
              fill="#C9A173"
            />
            <path
              d="M122.129 33.1113H102.648V55.9642H122.129V33.1113Z"
              fill="#E2C097"
            />
            <path
              d="M121.667 55.3571H118.587L103.059 33.6992H106.138L121.667 55.3571Z"
              fill="#C9A173"
            />
            <path
              d="M71.5194 29.6914H62.5586V59.3837H71.5194V29.6914Z"
              fill="#E2C097"
            />
            <path
              d="M69.2358 33.1113H64.8203V55.9642H69.2358V33.1113Z"
              fill="#C9A173"
            />
            <path
              d="M97.9011 29.6914H71.5195V59.3837H97.9011V29.6914Z"
              fill="#C9A173"
            />
            <path
              d="M94.4488 33.1113H74.9688V55.9642H94.4488V33.1113Z"
              fill="#E2C097"
            />
            <path
              d="M93.988 55.3571H90.9083L75.3984 33.6992H78.4781L93.988 55.3571Z"
              fill="#C9A173"
            />
            <path
              d="M52.6874 14.3217L44.4872 14.2849C30.3873 14.2665 25.7678 14.2665 22.5953 21.8412H23.4858H26.1574C27.0294 21.8412 27.7529 22.5399 27.7529 23.4224V42.7269C27.7529 44.7309 26.1203 46.3488 24.0981 46.3488H15.0259H14.5992C14.358 46.7533 14.0797 47.121 13.7458 47.4703L4.61799 57.0675C3.72747 58.0051 3.22655 59.2369 3.22655 60.5239L3.208 64.7157V66.5543V67.4V69.2385V70.1026L3.18945 71.9412L3.15234 76.4639C3.15234 77.0707 3.28221 77.6406 3.54195 78.1554C4.00576 79.1114 4.85917 79.8836 5.93521 80.2329L10.6661 81.7221L11.5195 81.9795L12.4471 82.2737L40.183 82.384L56.9916 82.4576V61.2777V55.7621V18.6054C56.973 16.2521 55.0435 14.34 52.6874 14.3217ZM51.5371 43.205C51.5371 45.1722 50.0715 46.7717 48.2719 46.7717H33.4485C31.6489 46.7717 30.1833 45.1722 30.1833 43.205V25.0035C30.1833 23.0363 31.6489 21.4368 33.4485 21.4368H48.2719C50.0715 21.4368 51.5371 23.0363 51.5371 25.0035V43.205Z"
              fill="#0593A1"
            />
            <path
              d="M1.52094 58.0433C1.50239 60.5988 1.66936 62.6763 1.87344 62.6763C2.09607 62.6763 2.26304 60.5988 2.28159 58.0433C2.30014 55.4877 2.13317 53.4102 1.91054 53.4102C1.70647 53.4102 1.52094 55.4877 1.52094 58.0433Z"
              fill="#3C3C3B"
            />
            <path
              d="M25.3416 58.0245C25.323 61.3155 15.6386 64.0549 8.58871 64.0181C5.54611 63.9998 3.61665 63.5401 2.856 62.7128C1.83562 61.6281 2.54061 59.9182 2.55916 58.0429C2.55916 56.2044 1.90983 54.4394 2.91166 53.3547C3.67231 52.509 5.58321 52.1229 8.66292 52.1413C15.7129 52.1596 25.3601 54.7336 25.3416 58.0245Z"
              fill="#008491"
            />
            <path
              d="M1.81744 53.3548C-0.594383 53.2261 -0.594383 62.6945 1.78033 62.7129C2.00296 60.9479 2.04006 55.1014 1.81744 53.3548Z"
              fill="#FFE697"
            />
            <path
              d="M3.04182 53.3555H2.59656H1.65039C1.70604 53.3555 1.7617 53.5209 1.79881 53.8151C2.02144 55.3962 2.00288 60.6728 1.7617 62.254C1.7246 62.5297 1.66894 62.6952 1.61328 62.6952H2.55946H3.00472C3.33866 59.441 3.37576 56.3155 3.04182 53.3555Z"
              fill="#3C3C3B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.7348 42.7451V23.4405C27.7348 22.5764 27.0298 21.8594 26.1393 21.8594H23.4677C19.8686 29.7651 17.0671 37.9465 15.0078 46.367H24.0614C26.1022 46.367 27.7348 44.7307 27.7348 42.7451Z"
              fill="#69F4FF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.2722 21.4375H33.4488C31.6492 21.4375 30.1836 23.037 30.1836 25.0042V43.2057C30.1836 45.1729 31.6492 46.7724 33.4488 46.7724H48.2722C50.0718 46.7724 51.5375 45.1729 51.5375 43.2057V25.0042C51.5375 23.037 50.0718 21.4375 48.2722 21.4375Z"
              fill="#69F4FF"
            />
            <path
              d="M34.248 79.0195C34.248 83.579 30.5189 87.2929 25.8994 87.2929C21.2798 87.2929 17.5508 83.5974 17.5508 79.0195C17.5508 74.4415 21.2798 70.7461 25.8994 70.7461C30.5004 70.7461 34.248 74.4599 34.248 79.0195Z"
              fill="#9B9B9B"
            />
            <path
              d="M25.8988 66.0586C18.6634 66.0586 12.8008 71.85 12.8008 79.0202C12.8008 86.1905 18.6448 92.0002 25.8803 92.0002C33.0972 92.0002 38.9783 86.2089 38.9783 79.0386C38.9968 71.8683 33.1343 66.0586 25.8988 66.0586ZM25.8803 87.0178C21.4277 87.0178 17.8285 83.4327 17.8285 79.0202C17.8285 74.6078 21.4462 71.041 25.8988 71.041C30.3514 71.041 33.9506 74.6261 33.9506 79.0386C33.9506 83.4327 30.3328 87.0178 25.8803 87.0178Z"
              fill="#3C3C3B"
            />
            <path
              d="M30.9441 79.0203C30.9441 81.7781 28.6807 84.0211 25.8978 84.0211C23.115 84.0211 20.8516 81.7781 20.8516 79.0203C20.8516 76.2625 23.115 74.0195 25.8978 74.0195C28.6807 74.0195 30.9441 76.2625 30.9441 79.0203Z"
              fill="#D6D6D6"
            />
            <path
              d="M59.6442 58.043H56.9727V79.0206H59.6442V58.043Z"
              fill="#3C3C3B"
            />
            <path
              d="M59.625 53.3359V82.4582L121.238 82.734L149.103 82.8627L149.901 82.6237L152.053 81.9986C154.131 81.3919 155.597 79.6085 155.782 77.5126C155.801 77.3655 155.801 77.2184 155.801 77.0713L155.875 53.3359H59.625Z"
              fill="#0593A1"
            />
            <path
              d="M155.838 53.3359H59.625V56.204H155.838V53.3359Z"
              fill="#008491"
            />
            <path
              d="M134.356 87.2929C138.967 87.2929 142.705 83.5887 142.705 79.0195C142.705 74.4502 138.967 70.7461 134.356 70.7461C129.746 70.7461 126.008 74.4502 126.008 79.0195C126.008 83.5887 129.746 87.2929 134.356 87.2929Z"
              fill="#9B9B9B"
            />
            <path
              d="M134.375 66.0586C127.14 66.0586 121.277 71.85 121.277 79.0202C121.277 86.1905 127.121 92.0002 134.357 92.0002C141.592 92.0002 147.455 86.2089 147.455 79.0386C147.455 71.8683 141.592 66.0586 134.375 66.0586ZM134.357 87.0178C129.904 87.0178 126.305 83.4327 126.305 79.0202C126.305 74.6078 129.923 71.041 134.375 71.041C138.828 71.041 142.427 74.6261 142.427 79.0386C142.409 83.4327 138.809 87.0178 134.357 87.0178Z"
              fill="#3C3C3B"
            />
            <path
              d="M139.405 79.0203C139.405 81.7781 137.142 84.0211 134.359 84.0211C131.576 84.0211 129.312 81.7781 129.312 79.0203C129.312 76.2625 131.576 74.0195 134.359 74.0195C137.142 74.0195 139.405 76.2625 139.405 79.0203Z"
              fill="#D6D6D6"
            />
            <path
              d="M159.421 73.3945C158.475 73.3945 157.658 73.9093 157.287 74.6447H153.261C151.87 74.6447 150.738 75.7662 150.738 77.1451C150.738 78.524 151.87 79.6455 153.261 79.6455H157.287C157.658 80.3809 158.475 80.8957 159.421 80.8957C162.76 80.8957 162.964 73.3945 159.421 73.3945Z"
              fill="#D6D6D6"
            />
            <path
              d="M145.191 67.162C145.21 69.2763 148.271 71.0413 152.965 71.0229C154.987 71.0046 157.084 70.7104 157.584 70.1772C158.252 69.4786 158.215 64.8271 157.547 64.1285C157.028 63.5769 154.969 63.3379 152.909 63.3379C148.234 63.3747 145.191 65.0477 145.191 67.162Z"
              fill="#008491"
            />
            <path
              d="M158.085 63.9248C159.755 63.8329 159.755 70.3964 158.122 70.4148C157.955 69.183 157.937 65.1382 158.085 63.9248Z"
              fill="#FFE697"
            />
            <path
              d="M157.232 63.9238H157.529H158.178C158.141 63.9238 158.104 64.0525 158.086 64.2364C157.937 65.3395 157.956 68.9982 158.123 70.0829C158.16 70.2851 158.197 70.3955 158.234 70.3955H157.585H157.288C157.028 68.1341 157.01 65.9646 157.232 63.9238Z"
              fill="#3C3C3B"
            />
          </g>
          <defs>
            <clipPath id="clip0_840_253">
              <rect width="162" height="92" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Fast turnaround",
      link: "/manufacturing",
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
        breakpoint: 1050,
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
    <div className="z-10 relative container mx-auto lg:px-20 md:px-10 px-6">
      <p className="text-center font-exo lg:text-4xl sm:text-3xl text-xl font-bold text-amBlue tracking-wide sm:pb-16 pb-10 z-10">
        We are all about customer service :
      </p>
      <Slider
        {...settings}
        className="card container lg:w-[1200px] md:w-[850px] mx-auto pb-10 overflow-hidden z-10"
      >
        {services.map((item, index) => (
          <div
            key={index}
            className="w-full h-full flex justify-center p-4 hover:-translate-y-2 duration-200"
          >
            <div className="flex justify-center">
              <div className="bg-amCard rounded-xl p-8 sm:w-[354px] w-72 sm:h-[300px] h-[250px] shadow-md space-y-2 relative z-10 ">
                <div className="sm:h-40 h-24 sm:w-40 w-24 mx-auto flex justify-center items-center">
                  {item.icon}
                </div>
                <p className="font-bold font-lato text-amBlue pt-4 tracking-widest">
                  {item.title}
                </p>
                <Link className="flex absolute bottom-6 gap-2 group" to={item.link}>
                  <p className="text-gray-400 font-lato font-semibold tracking-widest group-hover:text-amYellow cursor-pointer">
                    Read more
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="text-amYellow rotate-45 group-hover:ml-2 duration-300"
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
        ))}
      </Slider>
      <CallUs />
    </div>
  );
};

export default Service;
