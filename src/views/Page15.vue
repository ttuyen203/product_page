<script setup>
import { ref } from "vue";
import image from "../assets/image.png";
import image_1 from "../assets/image (1).png";
import image_2 from "../assets/image (2).png";
import image_3 from "../assets/image (3).png";
import image_4 from "../assets/image (4).png";
import image_5 from "../assets/image (5).png";
import video_banner_2 from "../assets/video-banner-2.png";
import img_banner_2 from "../assets/img-banner-2.png";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import logo_2 from "../assets/logo (2).png";

const isOpen = ref(false);
const isView = ref(false);

const handleReadMore = () => {
  isView.value = !isView.value;
  console.log(isView.value);
};

const isOpenStore = ref(false);
const isOpenCompany = ref(false);

const changeImage = (src) => {
  document.getElementById("mainImage").src = src;
};
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="bg-[#F9F9FA] w-[390px]">
      <div class="flex w-[390px] flex-col items-center relative">
        <!-- frame btn change language -->
        <div class="absolute right-0">
          <div class="flex-col pt-4 px-6">
            <div
              @click="isOpen = !isOpen"
              class="flex items-center gap-1 py-1.5 px-3 bg-white rounded-[100px] mb-[7px]"
            >
              <div>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Software/world">
                    <g id="Vector">
                      <path
                        d="M8.00667 0C3.58667 0 0 3.58667 0 8.00667C0 12.4267 3.58667 16.0133 8.00667 16.0133C12.4267 16.0133 16.0133 12.4267 16.0133 8.00667C16.0133 3.58667 12.4267 0 8.00667 0ZM2.30667 11.4533C1.85333 10.7067 1.54 9.86667 1.41333 8.96667C1.41333 8.95333 1.41333 8.94667 1.41333 8.93333C1.37333 8.62667 1.34667 8.32 1.34667 8.00667C1.34667 7.76 1.36 7.51333 1.38667 7.27333C2.27333 7.08 3.32667 6.96 4.06667 7.09333C4.47333 7.16667 4.66 7.29333 4.73333 7.39333C4.78 7.46 4.87333 7.64667 4.71333 8.12667C4.46667 8.87333 4.29333 9.41333 4.18667 9.82C4.08667 10.2133 4.02667 10.5533 4.06 10.8667C4.1 11.2133 4.24 11.4533 4.36 11.6467C4.38 11.68 4.40667 11.72 4.42667 11.7533C4.52667 11.9067 4.62667 12.06 4.74667 12.3C5.02667 12.86 5 13.4667 4.90667 13.9C4.64667 13.76 4.4 13.6067 4.16 13.44C4.14667 13.4267 4.13333 13.42 4.11333 13.4067C3.89333 13.2533 3.69333 13.08 3.49333 12.9C3.47333 12.88 3.45333 12.86 3.42667 12.84C3.01333 12.4467 2.65333 12.0067 2.34667 11.52C2.33333 11.4933 2.31333 11.4667 2.3 11.4467L2.30667 11.4533ZM8.55333 12.2133C9.26 13.5533 9.14667 14.06 9.06 14.2133C8.93333 14.44 8.54 14.5933 7.87333 14.6533C7.6 14.6533 7.33333 14.6333 7.06667 14.6C7.05333 14.6 7.04667 14.6 7.03333 14.6C6.72667 14.5533 6.43333 14.4933 6.14667 14.4067C6.34 13.72 6.43333 12.6933 5.93333 11.7067C5.78 11.3933 5.63333 11.1733 5.53333 11.0133C5.51333 10.98 5.49333 10.9533 5.48 10.9333C5.38667 10.78 5.38 10.7533 5.38 10.72C5.37333 10.66 5.38 10.52 5.47333 10.1533C5.56667 9.8 5.72667 9.3 5.97333 8.54667C6.21333 7.82667 6.2 7.14667 5.80667 6.60667C5.44 6.1 4.84667 5.88 4.3 5.78C3.5 5.63333 2.53333 5.71333 1.69333 5.85333C1.69333 5.85333 1.69333 5.84667 1.69333 5.84C1.76667 5.62 1.86 5.4 1.96 5.19333C1.97333 5.16667 1.98667 5.14 2 5.11333C2.09333 4.92 2.19333 4.73333 2.30667 4.55333C2.32667 4.52667 2.34 4.49333 2.36 4.46667C2.47333 4.28 2.6 4.1 2.73333 3.93333C2.74667 3.91333 2.76 3.9 2.77333 3.88C2.92 3.69333 3.08 3.50667 3.25333 3.34C3.32667 3.35333 3.40667 3.34667 3.48667 3.32667C3.93333 3.22667 4.7 3.13333 5.50667 3.19333C6.32 3.25333 7.08 3.45333 7.59333 3.86667C7.90667 4.12 8.14 4.4 8.39333 4.70667C8.42 4.74 8.45333 4.78 8.48 4.81333C8.75333 5.14 9.09333 5.54667 9.6 5.78C10.1333 6.03333 10.7533 6.05333 11.5 5.86667C12.14 5.7 12.9133 5.37333 13.8733 4.84667C14 5.08 14.1133 5.32 14.2067 5.57333C14.2067 5.58 14.2067 5.58667 14.2133 5.59333C14.3067 5.83333 14.3867 6.07333 14.4467 6.32667C14.4467 6.34667 14.4533 6.36667 14.46 6.38667C14.5933 6.90667 14.66 7.45333 14.66 8.02C14.66 8.03333 14.66 8.04 14.66 8.04667C14.66 9 14.4467 9.91333 14.08 10.7333C13.5467 8.58667 12.5667 7.82 11.7667 7.58C10.8 7.28667 9.73333 7.67333 8.98667 8.58C8.10667 9.64667 7.93333 11.08 8.54 12.2267L8.55333 12.2133ZM10.24 1.72C10.44 1.79333 10.64 1.87333 10.8333 1.96667C10.86 1.98 10.8933 1.99333 10.92 2.00667C11.1 2.09333 11.28 2.19333 11.4533 2.3C11.4867 2.32 11.5133 2.34 11.5467 2.35333C11.72 2.46 11.8867 2.58 12.0467 2.7C12.0733 2.72 12.0933 2.73333 12.12 2.75333C12.2933 2.89333 12.4667 3.04 12.6267 3.19333C12.6267 3.19333 12.64 3.2 12.64 3.20667C12.8133 3.37333 12.9733 3.54667 13.1267 3.72667C12.2667 4.18667 11.64 4.44 11.1733 4.56C10.62 4.7 10.34 4.64 10.1667 4.56C9.96 4.46667 9.78667 4.28667 9.50667 3.94667C9.48 3.91333 9.45333 3.88 9.42 3.84C9.17333 3.54 8.85333 3.15333 8.42667 2.80667C7.60667 2.15333 6.53333 1.91333 5.6 1.84667C5.55333 1.84667 5.5 1.84667 5.45333 1.84C6.24 1.51333 7.10667 1.33333 8.01333 1.33333C8.78 1.33333 9.51333 1.46 10.1933 1.7C10.2133 1.7 10.2267 1.71333 10.2467 1.72H10.24ZM10.44 14.2067C10.5333 13.52 10.3 12.6667 9.73333 11.5867C9.3 10.7667 9.62667 9.9 10.0333 9.40667C10.3467 9.02667 10.8733 8.67333 11.4 8.83333C12.2 9.07333 12.8 10.3933 13.04 12.3667C12.34 13.1733 11.4533 13.8067 10.4467 14.2L10.44 14.2067Z"
                        fill="#3A424E"
                      />
                      <path
                        d="M8.00667 0C3.58667 0 0 3.58667 0 8.00667C0 12.4267 3.58667 16.0133 8.00667 16.0133C12.4267 16.0133 16.0133 12.4267 16.0133 8.00667C16.0133 3.58667 12.4267 0 8.00667 0ZM2.30667 11.4533C1.85333 10.7067 1.54 9.86667 1.41333 8.96667C1.41333 8.95333 1.41333 8.94667 1.41333 8.93333C1.37333 8.62667 1.34667 8.32 1.34667 8.00667C1.34667 7.76 1.36 7.51333 1.38667 7.27333C2.27333 7.08 3.32667 6.96 4.06667 7.09333C4.47333 7.16667 4.66 7.29333 4.73333 7.39333C4.78 7.46 4.87333 7.64667 4.71333 8.12667C4.46667 8.87333 4.29333 9.41333 4.18667 9.82C4.08667 10.2133 4.02667 10.5533 4.06 10.8667C4.1 11.2133 4.24 11.4533 4.36 11.6467C4.38 11.68 4.40667 11.72 4.42667 11.7533C4.52667 11.9067 4.62667 12.06 4.74667 12.3C5.02667 12.86 5 13.4667 4.90667 13.9C4.64667 13.76 4.4 13.6067 4.16 13.44C4.14667 13.4267 4.13333 13.42 4.11333 13.4067C3.89333 13.2533 3.69333 13.08 3.49333 12.9C3.47333 12.88 3.45333 12.86 3.42667 12.84C3.01333 12.4467 2.65333 12.0067 2.34667 11.52C2.33333 11.4933 2.31333 11.4667 2.3 11.4467L2.30667 11.4533ZM8.55333 12.2133C9.26 13.5533 9.14667 14.06 9.06 14.2133C8.93333 14.44 8.54 14.5933 7.87333 14.6533C7.6 14.6533 7.33333 14.6333 7.06667 14.6C7.05333 14.6 7.04667 14.6 7.03333 14.6C6.72667 14.5533 6.43333 14.4933 6.14667 14.4067C6.34 13.72 6.43333 12.6933 5.93333 11.7067C5.78 11.3933 5.63333 11.1733 5.53333 11.0133C5.51333 10.98 5.49333 10.9533 5.48 10.9333C5.38667 10.78 5.38 10.7533 5.38 10.72C5.37333 10.66 5.38 10.52 5.47333 10.1533C5.56667 9.8 5.72667 9.3 5.97333 8.54667C6.21333 7.82667 6.2 7.14667 5.80667 6.60667C5.44 6.1 4.84667 5.88 4.3 5.78C3.5 5.63333 2.53333 5.71333 1.69333 5.85333C1.69333 5.85333 1.69333 5.84667 1.69333 5.84C1.76667 5.62 1.86 5.4 1.96 5.19333C1.97333 5.16667 1.98667 5.14 2 5.11333C2.09333 4.92 2.19333 4.73333 2.30667 4.55333C2.32667 4.52667 2.34 4.49333 2.36 4.46667C2.47333 4.28 2.6 4.1 2.73333 3.93333C2.74667 3.91333 2.76 3.9 2.77333 3.88C2.92 3.69333 3.08 3.50667 3.25333 3.34C3.32667 3.35333 3.40667 3.34667 3.48667 3.32667C3.93333 3.22667 4.7 3.13333 5.50667 3.19333C6.32 3.25333 7.08 3.45333 7.59333 3.86667C7.90667 4.12 8.14 4.4 8.39333 4.70667C8.42 4.74 8.45333 4.78 8.48 4.81333C8.75333 5.14 9.09333 5.54667 9.6 5.78C10.1333 6.03333 10.7533 6.05333 11.5 5.86667C12.14 5.7 12.9133 5.37333 13.8733 4.84667C14 5.08 14.1133 5.32 14.2067 5.57333C14.2067 5.58 14.2067 5.58667 14.2133 5.59333C14.3067 5.83333 14.3867 6.07333 14.4467 6.32667C14.4467 6.34667 14.4533 6.36667 14.46 6.38667C14.5933 6.90667 14.66 7.45333 14.66 8.02C14.66 8.03333 14.66 8.04 14.66 8.04667C14.66 9 14.4467 9.91333 14.08 10.7333C13.5467 8.58667 12.5667 7.82 11.7667 7.58C10.8 7.28667 9.73333 7.67333 8.98667 8.58C8.10667 9.64667 7.93333 11.08 8.54 12.2267L8.55333 12.2133ZM10.24 1.72C10.44 1.79333 10.64 1.87333 10.8333 1.96667C10.86 1.98 10.8933 1.99333 10.92 2.00667C11.1 2.09333 11.28 2.19333 11.4533 2.3C11.4867 2.32 11.5133 2.34 11.5467 2.35333C11.72 2.46 11.8867 2.58 12.0467 2.7C12.0733 2.72 12.0933 2.73333 12.12 2.75333C12.2933 2.89333 12.4667 3.04 12.6267 3.19333C12.6267 3.19333 12.64 3.2 12.64 3.20667C12.8133 3.37333 12.9733 3.54667 13.1267 3.72667C12.2667 4.18667 11.64 4.44 11.1733 4.56C10.62 4.7 10.34 4.64 10.1667 4.56C9.96 4.46667 9.78667 4.28667 9.50667 3.94667C9.48 3.91333 9.45333 3.88 9.42 3.84C9.17333 3.54 8.85333 3.15333 8.42667 2.80667C7.60667 2.15333 6.53333 1.91333 5.6 1.84667C5.55333 1.84667 5.5 1.84667 5.45333 1.84C6.24 1.51333 7.10667 1.33333 8.01333 1.33333C8.78 1.33333 9.51333 1.46 10.1933 1.7C10.2133 1.7 10.2267 1.71333 10.2467 1.72H10.24ZM10.44 14.2067C10.5333 13.52 10.3 12.6667 9.73333 11.5867C9.3 10.7667 9.62667 9.9 10.0333 9.40667C10.3467 9.02667 10.8733 8.67333 11.4 8.83333C12.2 9.07333 12.8 10.3933 13.04 12.3667C12.34 13.1733 11.4533 13.8067 10.4467 14.2L10.44 14.2067Z"
                        fill="black"
                        fill-opacity="0.2"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <p class="text-[#2E353E] text-sm font-semibold cursor-pointer">
                ENG
              </p>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Arrows/chevron/down">
                    <g id="Icon (Stroke)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.5286 6.19526C3.78895 5.93491 4.21106 5.93491 4.47141 6.19526L8 9.72386L11.5286 6.19526C11.7889 5.93491 12.2111 5.93491 12.4714 6.19526C12.7318 6.45561 12.7318 6.87772 12.4714 7.13807L8.94281 10.6667C8.42211 11.1874 7.57789 11.1874 7.05719 10.6667L3.5286 7.13807C3.26825 6.87772 3.26825 6.45561 3.5286 6.19526Z"
                        fill="#3A424E"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.5286 6.19526C3.78895 5.93491 4.21106 5.93491 4.47141 6.19526L8 9.72386L11.5286 6.19526C11.7889 5.93491 12.2111 5.93491 12.4714 6.19526C12.7318 6.45561 12.7318 6.87772 12.4714 7.13807L8.94281 10.6667C8.42211 11.1874 7.57789 11.1874 7.05719 10.6667L3.5286 7.13807C3.26825 6.87772 3.26825 6.45561 3.5286 6.19526Z"
                        fill="black"
                        fill-opacity="0.2"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <!-- box content change language -->
            <div
              v-if="isOpen"
              class="border shadow-gray-400 shadow-inner transition-all duration-200 ease-in-out"
            >
              <div
                class="text-[#2E353E] text-sm font-semibold bg-white text-center py-2 hover:bg-[#e1ecdc] cursor-pointer"
              >
                ENG
              </div>
              <div
                class="text-[#2E353E] text-sm font-semibold bg-white text-center py-2 hover:bg-[#e1ecdc] cursor-pointer"
              >
                VIE
              </div>
            </div>
          </div>
        </div>

        <!-- Frame image -->
        <div
          class="flex pt-[55px] px-4 pb-4 flex-col justify-center items-start gap-2.5 bg-white"
        >
          <!-- Main Image -->
          <div>
            <img
              :src="image"
              alt=""
              class="w-[358px] h-[358px]"
              id="mainImage"
            />
          </div>
          <!-- List image -->
          <div class="flex justify-center items-center gap-2">
            <!-- arrow left -->
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41418 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.99997 13.4142C7.21892 12.6332 7.21892 11.3668 7.99997 10.5858L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z"
                  fill="#C38F51"
                />
              </svg>
            </div>

            <!-- image item -->
            <div>
              <img
                :src="image_1"
                alt=""
                class="w-[90px] h-[90px] border hover:border-[#C38F51] cursor-pointer"
                @click="changeImage(image_1)"
              />
            </div>

            <!-- image item -->
            <div>
              <img
                :src="image_2"
                alt=""
                class="w-[90px] h-[90px] border hover:border-[#C38F51] cursor-pointer"
                @click="changeImage(image_2)"
              />
            </div>

            <!-- image item -->
            <div>
              <img
                :src="image_3"
                alt=""
                class="w-[90px] h-[90px] border hover:border-[#C38F51] cursor-pointer"
                @click="changeImage(image_3)"
              />
            </div>

            <!-- arrow right -->
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16 10.5858C16.781 11.3668 16.781 12.6332 16 13.4142L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289Z"
                  fill="#C38F51"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Text -->
        <div class="flex p-4 justify-center items-center gap-2.5 bg-[#C38F51]">
          <p
            class="text-white text-base font-normal leading-[21.28px] tracking-[0.32px]"
          >
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero
          </p>
        </div>

        <!-- Infor Product -->
        <div class="flex flex-col gap-4 items-center w-full">
          <!-- Name, price, size -->
          <div class="flex px-4 flex-col items-center bg-white w-full">
            <!-- Name, price -->
            <div
              class="flex py-4 flex-col items-center gap-2.5 border-b border-[#E0E2E6] w-full"
            >
              <p
                class="text-[#2E353E] text-xl font-semibold leading-[25px] tracking-[0.4px]"
              >
                Necklace
              </p>
              <p
                class="text-[#2E353E] text-base font-medium leading-[21.28px] tracking-[0.32px]"
              >
                $50.00 USD
              </p>
            </div>
            <!-- Size -->
            <div class="flex py-4 justify-center items-center gap-4">
              <p
                class="text-[#2E353E] text-base font-semibold leading-[21.28px] tracking-[0.32px]"
              >
                Size
              </p>

              <div class="flex items-start gap-2">
                <div
                  class="flex h-[36px] py-2 px-6 justify-center items-center gap-2.5 rounded-[100px] border border-[#E0E2E6]"
                >
                  <p
                    class="text-[#2E353E] text-base font-normal leading-[21.28px] tracking-[0.32px]"
                  >
                    X
                  </p>
                </div>

                <div
                  class="flex h-[36px] py-2 px-6 justify-center items-center gap-2.5 rounded-[100px] border border-[#E0E2E6]"
                >
                  <p
                    class="text-[#2E353E] text-base font-normal leading-[21.28px] tracking-[0.32px]"
                  >
                    XS
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Desc -->
          <div
            class="flex py-6 px-4 flex-col items-center gap-4 bg-white w-full"
          >
            <!-- Nav -->
            <div class="flex justify-center items-center gap-2">
              <div
                class="flex py-2 px-6 justify-center items-center gap-2.5 rounded-[100px] bg-[#C38F51]"
              >
                <p
                  class="text-white text-base font-semibold leading-[21.28px] tracking-[0.32px]"
                >
                  Description
                </p>
              </div>
              <div class="flex px-6 items-center gap-2.5 rounded-[100px]">
                <p
                  class="text-[#626F82] text-base font-semibold leading-[21.28px] tracking-[0.32px]"
                >
                  Information
                </p>
              </div>
            </div>

            <!-- Desc content -->
            <div class="flex flex-col items-center gap-1">
              <div class="flex flex-col items-start gap-1">
                <p v-if="isView" class="text-[#2E353E] text-center">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi.
                </p>

                <p v-else class="text-[#2E353E] text-center line-clamp-3">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi.
                </p>
              </div>
              <div
                class="flex items-center gap-2 rounded-[100px]"
                @click="handleReadMore"
              >
                <p
                  class="text-[#C38F51] font-semibold leading-[21.28px] tracking-[0.32px] cursor-pointer"
                >
                  {{ isView ? "Collapse" : "Readmore" }}
                </p>
              </div>
            </div>
          </div>

          <!-- Video banner -->
          <div
            class="flex flex-col items-start gap-2.5 border border-[#E0E2E6] relative"
          >
            <img :src="video_banner_2" alt="" />
            <div
              class="absolute left-[157px] bottom-[75.19px] p-2.5 flex justify-center items-center w-[60px] h-[60px] gap-2.5 border border-[#ffffff33] bg-[#ffffff33] rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 6.25357C6 3.76455 8.85628 2.35812 10.8291 3.8757L18.5489 9.81397C20.11 11.0149 20.11 13.3688 18.5489 14.5697L10.8291 20.508C8.85628 22.0256 6 20.6191 6 18.1301V6.25357Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <!-- Image banner -->
          <div class="flex flex-col items-start gap-2.5 border borde-[#E0E2E6]">
            <img :src="img_banner_2" alt="" />
          </div>

          <!-- Related products -->
          <div
            class="flex py-6 px-4 flex-col items-center gap-4 bg-white w-full"
          >
            <!-- Related products title -->
            <div class="flex justify-center items-center gap-2">
              <p
                class="text-[#2E353E] text-2xl font-semibold leading-[30px] tracking-[0.48px]"
              >
                Related products
              </p>
            </div>
            <!-- Related products content -->
            <div class="flex items-start gap-4 w-full">
              <Swiper
                :slidesPerView="2.3"
                :spaceBetween="40"
                :pagination="{
                  clickable: true,
                }"
                :modules="modules"
              >
                <!-- Slide 1 -->
                <swiper-slide>
                  <div class="flex w-[160px] flex-col items-center gap-2">
                    <!-- image product -->
                    <div>
                      <img :src="image_4" alt="" class="w-[160px] h-[160px]" />
                    </div>
                    <div class="flex flex-col items-center gap-1">
                      <p
                        class="text-[#2E353E] font-semibold leading-[21.28px] tracking-[0.32px]"
                      >
                        Waistband
                      </p>
                      <p
                        class="text-[#C38F51] text-sm font-semibold leading-[18.62px] tracking-[0.28px]"
                      >
                        $50.00 USD
                      </p>
                    </div>
                  </div>
                </swiper-slide>

                <!-- Slide 2 -->
                <swiper-slide>
                  <div class="flex w-[160px] flex-col items-center gap-2">
                    <!-- image product -->
                    <div>
                      <img :src="image_4" alt="" class="w-[160px] h-[160px]" />
                    </div>
                    <div class="flex flex-col items-center gap-1">
                      <p
                        class="text-[#2E353E] font-semibold leading-[21.28px] tracking-[0.32px]"
                      >
                        Waistband
                      </p>
                      <p
                        class="text-[#C38F51] text-sm font-semibold leading-[18.62px] tracking-[0.28px]"
                      >
                        $50.00 USD
                      </p>
                    </div>
                  </div>
                </swiper-slide>

                <!-- Slide 3 -->
                <swiper-slide>
                  <div class="flex w-[160px] flex-col items-center gap-2">
                    <!-- image product -->
                    <div>
                      <img :src="image_4" alt="" class="w-[160px] h-[160px]" />
                    </div>
                    <div class="flex flex-col items-center gap-1">
                      <p
                        class="text-[#2E353E] font-semibold leading-[21.28px] tracking-[0.32px]"
                      >
                        Waistband
                      </p>
                      <p
                        class="text-[#C38F51] text-sm font-semibold leading-[18.62px] tracking-[0.28px]"
                      >
                        $50.00 USD
                      </p>
                    </div>
                  </div>
                </swiper-slide>

                <!-- Slide 4 -->
                <swiper-slide>
                  <div class="flex w-[160px] flex-col items-center gap-2">
                    <!-- image product -->
                    <div>
                      <img :src="image_4" alt="" class="w-[160px] h-[160px]" />
                    </div>
                    <div class="flex flex-col items-center gap-1">
                      <p
                        class="text-[#2E353E] font-semibold leading-[21.28px] tracking-[0.32px]"
                      >
                        Waistband
                      </p>
                      <p
                        class="text-[#C38F51] text-sm font-semibold leading-[18.62px] tracking-[0.28px]"
                      >
                        $50.00 USD
                      </p>
                    </div>
                  </div>
                </swiper-slide>
              </Swiper>
            </div>
          </div>
        </div>

        <!-- Infor store and company -->
        <div
          class="flex p-4 justify-center items-start flex-col gap-2.5 w-full"
        >
          <!-- Store -->
          <div class="border-b border-[#E0E2E6] w-full">
            <div
              class="flex py-4 justify-between items-center w-full"
              @click="isOpenStore = !isOpenStore"
            >
              <p
                class="text-[#2E353E] text-lg font-semibold leading-[22.5px] tracking-[0.36px]"
              >
                Store
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5858 8.8104C11.3668 8.02935 12.6332 8.02935 13.4142 8.8104L18.7071 14.1033C19.0976 14.4938 19.0976 15.127 18.7071 15.5175C18.3166 15.908 17.6834 15.908 17.2929 15.5175L12 10.2246L6.70711 15.5175C6.31658 15.908 5.68342 15.908 5.29289 15.5175C4.90237 15.127 4.90237 14.4938 5.29289 14.1033L10.5858 8.8104Z"
                  fill="#3A424E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5858 8.8104C11.3668 8.02935 12.6332 8.02935 13.4142 8.8104L18.7071 14.1033C19.0976 14.4938 19.0976 15.127 18.7071 15.5175C18.3166 15.908 17.6834 15.908 17.2929 15.5175L12 10.2246L6.70711 15.5175C6.31658 15.908 5.68342 15.908 5.29289 15.5175C4.90237 15.127 4.90237 14.4938 5.29289 14.1033L10.5858 8.8104Z"
                  fill="black"
                  fill-opacity="0.2"
                />
              </svg>
            </div>
            <!-- Collapse item store-->
            <div class="flex flex-col gap-4 w-full pb-5" v-if="isOpenStore">
              <!-- QR and name -->
              <div class="flex gap-4 items-center">
                <img
                  :src="logo_2"
                  alt=""
                  class="w-[52px] h-[52px] rounded-[4px] border border-[#E0E2E6]"
                />
                <div class="flex flex-col gap-1 flex-1">
                  <p
                    class="text-[#2E353E] text-lg font-semibold leading-[22.5px] tracking-[0.36px]"
                  >
                    SofaKart
                  </p>
                  <p
                    class="text-[#626F82] text-base font-normal leading-[21.28px] tracking-[0.32px]"
                  >
                    Business owned
                  </p>
                </div>
              </div>

              <!-- Phone number and address -->
              <div class="flex flex-col gap-3">
                <!-- Phone number -->
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.63042 1.33398H12.3571C12.7948 1.33398 13.1699 1.33398 13.4825 1.35898C13.8076 1.38397 14.1453 1.44646 14.4579 1.60892C14.933 1.84637 15.3082 2.23378 15.5458 2.69617C15.7083 3.0086 15.7708 3.33353 15.7958 3.67095C15.8208 3.98338 15.8208 4.3583 15.8208 4.7957V16.1931C15.8208 16.6305 15.8208 17.0054 15.7958 17.3179C15.7708 17.6428 15.7083 17.9802 15.5458 18.2926C15.3082 18.7675 14.9205 19.1424 14.4579 19.3799C14.1453 19.5423 13.8201 19.6048 13.4825 19.6298C13.1699 19.6548 12.7948 19.6548 12.3571 19.6548H7.63042C7.19277 19.6548 6.81763 19.6548 6.50502 19.6298C6.17991 19.6048 5.84229 19.5423 5.52967 19.3799C5.0545 19.1424 4.67937 18.755 4.44179 18.2926C4.27923 17.9802 4.2167 17.6553 4.1917 17.3179C4.16669 17.0179 4.16669 16.6305 4.16669 16.1931V4.7957C4.16669 4.3583 4.16669 3.98338 4.1917 3.67095C4.2167 3.34603 4.27923 3.0086 4.44179 2.69617C4.67937 2.22128 5.06701 1.84637 5.52967 1.60892C5.84229 1.44646 6.17991 1.38397 6.50502 1.35898C6.81763 1.33398 7.19277 1.33398 7.63042 1.33398ZM8.33067 4.67073C8.33067 4.20833 8.70581 3.83342 9.16847 3.83342H10.8316C11.2942 3.83342 11.6694 4.20833 11.6694 4.67073C11.6694 5.13312 11.2942 5.50804 10.8316 5.50804H9.16847C8.70581 5.50804 8.33067 5.13312 8.33067 4.67073Z"
                      fill="#C0C5CD"
                    />
                  </svg>
                  <p
                    class="text-[#2E353E] font-normal leading-[21.28px] tracking-[0.32px]"
                  >
                    0988 777 777
                  </p>
                </div>
                <!-- Address -->
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 8.83228C2.5 4.69572 5.8625 1.33398 10 1.33398C14.1375 1.33398 17.5 4.69572 17.5 8.83228C17.5 9.91953 17.1375 11.1318 16.625 12.2815C16.1 13.4562 15.4 14.631 14.6375 15.6932C13.8875 16.743 13.0625 17.6928 12.3125 18.3926C11.9375 18.7425 11.5625 19.0425 11.2 19.2549C10.8625 19.4549 10.4375 19.6548 10 19.6548C9.5625 19.6548 9.1375 19.4549 8.8 19.2549C8.4375 19.0425 8.0625 18.7425 7.6875 18.3926C6.9375 17.6928 6.1125 16.743 5.3625 15.6932C4.6125 14.6435 3.9 13.4562 3.375 12.2815C2.8625 11.1193 2.5 9.91953 2.5 8.83228ZM5.8375 8.83228C5.8375 6.5328 7.7 4.67073 10 4.67073C12.3 4.67073 14.1625 6.5328 14.1625 8.83228C14.1625 11.1318 12.3 12.9938 10 12.9938C7.7 12.9938 5.8375 11.1318 5.8375 8.83228Z"
                      fill="#C0C5CD"
                    />
                  </svg>
                  <p
                    class="text-[#2E353E] font-normal leading-[21.28px] tracking-[0.32px]"
                  >
                    Hanoi, Vietnam
                  </p>
                </div>
              </div>
            </div>

            <!-- Collapse item store-->
            <div class="flex flex-col gap-4 w-full pb-5" v-if="isOpenStore">
              <!-- QR and name -->
              <div class="flex gap-4 items-center">
                <img
                  :src="logo_2"
                  alt=""
                  class="w-[52px] h-[52px] rounded-[4px] border border-[#E0E2E6]"
                />
                <div class="flex flex-col gap-1 flex-1">
                  <p
                    class="text-[#2E353E] text-lg font-semibold leading-[22.5px] tracking-[0.36px]"
                  >
                    SofaKart
                  </p>
                  <p
                    class="text-[#626F82] text-base font-normal leading-[21.28px] tracking-[0.32px]"
                  >
                    Business owned
                  </p>
                </div>
              </div>

              <!-- Phone number and address -->
              <div class="flex flex-col gap-3">
                <!-- Phone number -->
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.63042 1.33398H12.3571C12.7948 1.33398 13.1699 1.33398 13.4825 1.35898C13.8076 1.38397 14.1453 1.44646 14.4579 1.60892C14.933 1.84637 15.3082 2.23378 15.5458 2.69617C15.7083 3.0086 15.7708 3.33353 15.7958 3.67095C15.8208 3.98338 15.8208 4.3583 15.8208 4.7957V16.1931C15.8208 16.6305 15.8208 17.0054 15.7958 17.3179C15.7708 17.6428 15.7083 17.9802 15.5458 18.2926C15.3082 18.7675 14.9205 19.1424 14.4579 19.3799C14.1453 19.5423 13.8201 19.6048 13.4825 19.6298C13.1699 19.6548 12.7948 19.6548 12.3571 19.6548H7.63042C7.19277 19.6548 6.81763 19.6548 6.50502 19.6298C6.17991 19.6048 5.84229 19.5423 5.52967 19.3799C5.0545 19.1424 4.67937 18.755 4.44179 18.2926C4.27923 17.9802 4.2167 17.6553 4.1917 17.3179C4.16669 17.0179 4.16669 16.6305 4.16669 16.1931V4.7957C4.16669 4.3583 4.16669 3.98338 4.1917 3.67095C4.2167 3.34603 4.27923 3.0086 4.44179 2.69617C4.67937 2.22128 5.06701 1.84637 5.52967 1.60892C5.84229 1.44646 6.17991 1.38397 6.50502 1.35898C6.81763 1.33398 7.19277 1.33398 7.63042 1.33398ZM8.33067 4.67073C8.33067 4.20833 8.70581 3.83342 9.16847 3.83342H10.8316C11.2942 3.83342 11.6694 4.20833 11.6694 4.67073C11.6694 5.13312 11.2942 5.50804 10.8316 5.50804H9.16847C8.70581 5.50804 8.33067 5.13312 8.33067 4.67073Z"
                      fill="#C0C5CD"
                    />
                  </svg>
                  <p
                    class="text-[#2E353E] font-normal leading-[21.28px] tracking-[0.32px]"
                  >
                    0988 777 777
                  </p>
                </div>
                <!-- Address -->
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 8.83228C2.5 4.69572 5.8625 1.33398 10 1.33398C14.1375 1.33398 17.5 4.69572 17.5 8.83228C17.5 9.91953 17.1375 11.1318 16.625 12.2815C16.1 13.4562 15.4 14.631 14.6375 15.6932C13.8875 16.743 13.0625 17.6928 12.3125 18.3926C11.9375 18.7425 11.5625 19.0425 11.2 19.2549C10.8625 19.4549 10.4375 19.6548 10 19.6548C9.5625 19.6548 9.1375 19.4549 8.8 19.2549C8.4375 19.0425 8.0625 18.7425 7.6875 18.3926C6.9375 17.6928 6.1125 16.743 5.3625 15.6932C4.6125 14.6435 3.9 13.4562 3.375 12.2815C2.8625 11.1193 2.5 9.91953 2.5 8.83228ZM5.8375 8.83228C5.8375 6.5328 7.7 4.67073 10 4.67073C12.3 4.67073 14.1625 6.5328 14.1625 8.83228C14.1625 11.1318 12.3 12.9938 10 12.9938C7.7 12.9938 5.8375 11.1318 5.8375 8.83228Z"
                      fill="#C0C5CD"
                    />
                  </svg>
                  <p
                    class="text-[#2E353E] font-normal leading-[21.28px] tracking-[0.32px]"
                  >
                    Hanoi, Vietnam
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Company -->
          <div class="border-b border-[#E0E2E6] w-full">
            <div
              class="flex py-4 justify-between items-center w-full"
              @click="isOpenCompany = !isOpenCompany"
            >
              <p
                class="text-[#2E353E] text-lg font-semibold leading-[22.5px] tracking-[0.36px]"
              >
                Company
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5858 8.8104C11.3668 8.02935 12.6332 8.02935 13.4142 8.8104L18.7071 14.1033C19.0976 14.4938 19.0976 15.127 18.7071 15.5175C18.3166 15.908 17.6834 15.908 17.2929 15.5175L12 10.2246L6.70711 15.5175C6.31658 15.908 5.68342 15.908 5.29289 15.5175C4.90237 15.127 4.90237 14.4938 5.29289 14.1033L10.5858 8.8104Z"
                  fill="#3A424E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.5858 8.8104C11.3668 8.02935 12.6332 8.02935 13.4142 8.8104L18.7071 14.1033C19.0976 14.4938 19.0976 15.127 18.7071 15.5175C18.3166 15.908 17.6834 15.908 17.2929 15.5175L12 10.2246L6.70711 15.5175C6.31658 15.908 5.68342 15.908 5.29289 15.5175C4.90237 15.127 4.90237 14.4938 5.29289 14.1033L10.5858 8.8104Z"
                  fill="black"
                  fill-opacity="0.2"
                />
              </svg>
            </div>
            <!-- Collapse item store-->
            <div class="flex flex-col gap-4 w-full pb-5" v-if="isOpenCompany">
              <!-- QR and name -->
              <div class="flex gap-4 items-center">
                <img
                  :src="logo_2"
                  alt=""
                  class="w-[52px] h-[52px] rounded-[4px] border border-[#E0E2E6]"
                />
                <div class="flex flex-col gap-1 flex-1">
                  <p
                    class="text-[#2E353E] text-lg font-semibold leading-[22.5px] tracking-[0.36px]"
                  >
                    SofaKart
                  </p>
                  <p
                    class="text-[#626F82] text-base font-normal leading-[21.28px] tracking-[0.32px]"
                  >
                    Business owned
                  </p>
                </div>
              </div>

              <!-- Phone number and address -->
              <div class="flex flex-col gap-3">
                <!-- Phone number -->
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.63042 1.33398H12.3571C12.7948 1.33398 13.1699 1.33398 13.4825 1.35898C13.8076 1.38397 14.1453 1.44646 14.4579 1.60892C14.933 1.84637 15.3082 2.23378 15.5458 2.69617C15.7083 3.0086 15.7708 3.33353 15.7958 3.67095C15.8208 3.98338 15.8208 4.3583 15.8208 4.7957V16.1931C15.8208 16.6305 15.8208 17.0054 15.7958 17.3179C15.7708 17.6428 15.7083 17.9802 15.5458 18.2926C15.3082 18.7675 14.9205 19.1424 14.4579 19.3799C14.1453 19.5423 13.8201 19.6048 13.4825 19.6298C13.1699 19.6548 12.7948 19.6548 12.3571 19.6548H7.63042C7.19277 19.6548 6.81763 19.6548 6.50502 19.6298C6.17991 19.6048 5.84229 19.5423 5.52967 19.3799C5.0545 19.1424 4.67937 18.755 4.44179 18.2926C4.27923 17.9802 4.2167 17.6553 4.1917 17.3179C4.16669 17.0179 4.16669 16.6305 4.16669 16.1931V4.7957C4.16669 4.3583 4.16669 3.98338 4.1917 3.67095C4.2167 3.34603 4.27923 3.0086 4.44179 2.69617C4.67937 2.22128 5.06701 1.84637 5.52967 1.60892C5.84229 1.44646 6.17991 1.38397 6.50502 1.35898C6.81763 1.33398 7.19277 1.33398 7.63042 1.33398ZM8.33067 4.67073C8.33067 4.20833 8.70581 3.83342 9.16847 3.83342H10.8316C11.2942 3.83342 11.6694 4.20833 11.6694 4.67073C11.6694 5.13312 11.2942 5.50804 10.8316 5.50804H9.16847C8.70581 5.50804 8.33067 5.13312 8.33067 4.67073Z"
                      fill="#C0C5CD"
                    />
                  </svg>
                  <p
                    class="text-[#2E353E] font-normal leading-[21.28px] tracking-[0.32px]"
                  >
                    0988 777 777
                  </p>
                </div>
                <!-- Address -->
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 8.83228C2.5 4.69572 5.8625 1.33398 10 1.33398C14.1375 1.33398 17.5 4.69572 17.5 8.83228C17.5 9.91953 17.1375 11.1318 16.625 12.2815C16.1 13.4562 15.4 14.631 14.6375 15.6932C13.8875 16.743 13.0625 17.6928 12.3125 18.3926C11.9375 18.7425 11.5625 19.0425 11.2 19.2549C10.8625 19.4549 10.4375 19.6548 10 19.6548C9.5625 19.6548 9.1375 19.4549 8.8 19.2549C8.4375 19.0425 8.0625 18.7425 7.6875 18.3926C6.9375 17.6928 6.1125 16.743 5.3625 15.6932C4.6125 14.6435 3.9 13.4562 3.375 12.2815C2.8625 11.1193 2.5 9.91953 2.5 8.83228ZM5.8375 8.83228C5.8375 6.5328 7.7 4.67073 10 4.67073C12.3 4.67073 14.1625 6.5328 14.1625 8.83228C14.1625 11.1318 12.3 12.9938 10 12.9938C7.7 12.9938 5.8375 11.1318 5.8375 8.83228Z"
                      fill="#C0C5CD"
                    />
                  </svg>
                  <p
                    class="text-[#2E353E] font-normal leading-[21.28px] tracking-[0.32px]"
                  >
                    Hanoi, Vietnam
                  </p>
                </div>
              </div>
            </div>

            <!-- Collapse item store-->
            <div class="flex flex-col gap-4 w-full pb-5" v-if="isOpenCompany">
              <!-- QR and name -->
              <div class="flex gap-4 items-center">
                <img
                  :src="logo_2"
                  alt=""
                  class="w-[52px] h-[52px] rounded-[4px] border border-[#E0E2E6]"
                />
                <div class="flex flex-col gap-1 flex-1">
                  <p
                    class="text-[#2E353E] text-lg font-semibold leading-[22.5px] tracking-[0.36px]"
                  >
                    SofaKart
                  </p>
                  <p
                    class="text-[#626F82] text-base font-normal leading-[21.28px] tracking-[0.32px]"
                  >
                    Business owned
                  </p>
                </div>
              </div>

              <!-- Phone number and address -->
              <div class="flex flex-col gap-3">
                <!-- Phone number -->
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.63042 1.33398H12.3571C12.7948 1.33398 13.1699 1.33398 13.4825 1.35898C13.8076 1.38397 14.1453 1.44646 14.4579 1.60892C14.933 1.84637 15.3082 2.23378 15.5458 2.69617C15.7083 3.0086 15.7708 3.33353 15.7958 3.67095C15.8208 3.98338 15.8208 4.3583 15.8208 4.7957V16.1931C15.8208 16.6305 15.8208 17.0054 15.7958 17.3179C15.7708 17.6428 15.7083 17.9802 15.5458 18.2926C15.3082 18.7675 14.9205 19.1424 14.4579 19.3799C14.1453 19.5423 13.8201 19.6048 13.4825 19.6298C13.1699 19.6548 12.7948 19.6548 12.3571 19.6548H7.63042C7.19277 19.6548 6.81763 19.6548 6.50502 19.6298C6.17991 19.6048 5.84229 19.5423 5.52967 19.3799C5.0545 19.1424 4.67937 18.755 4.44179 18.2926C4.27923 17.9802 4.2167 17.6553 4.1917 17.3179C4.16669 17.0179 4.16669 16.6305 4.16669 16.1931V4.7957C4.16669 4.3583 4.16669 3.98338 4.1917 3.67095C4.2167 3.34603 4.27923 3.0086 4.44179 2.69617C4.67937 2.22128 5.06701 1.84637 5.52967 1.60892C5.84229 1.44646 6.17991 1.38397 6.50502 1.35898C6.81763 1.33398 7.19277 1.33398 7.63042 1.33398ZM8.33067 4.67073C8.33067 4.20833 8.70581 3.83342 9.16847 3.83342H10.8316C11.2942 3.83342 11.6694 4.20833 11.6694 4.67073C11.6694 5.13312 11.2942 5.50804 10.8316 5.50804H9.16847C8.70581 5.50804 8.33067 5.13312 8.33067 4.67073Z"
                      fill="#C0C5CD"
                    />
                  </svg>
                  <p
                    class="text-[#2E353E] font-normal leading-[21.28px] tracking-[0.32px]"
                  >
                    0988 777 777
                  </p>
                </div>
                <!-- Address -->
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 8.83228C2.5 4.69572 5.8625 1.33398 10 1.33398C14.1375 1.33398 17.5 4.69572 17.5 8.83228C17.5 9.91953 17.1375 11.1318 16.625 12.2815C16.1 13.4562 15.4 14.631 14.6375 15.6932C13.8875 16.743 13.0625 17.6928 12.3125 18.3926C11.9375 18.7425 11.5625 19.0425 11.2 19.2549C10.8625 19.4549 10.4375 19.6548 10 19.6548C9.5625 19.6548 9.1375 19.4549 8.8 19.2549C8.4375 19.0425 8.0625 18.7425 7.6875 18.3926C6.9375 17.6928 6.1125 16.743 5.3625 15.6932C4.6125 14.6435 3.9 13.4562 3.375 12.2815C2.8625 11.1193 2.5 9.91953 2.5 8.83228ZM5.8375 8.83228C5.8375 6.5328 7.7 4.67073 10 4.67073C12.3 4.67073 14.1625 6.5328 14.1625 8.83228C14.1625 11.1318 12.3 12.9938 10 12.9938C7.7 12.9938 5.8375 11.1318 5.8375 8.83228Z"
                      fill="#C0C5CD"
                    />
                  </svg>
                  <p
                    class="text-[#2E353E] font-normal leading-[21.28px] tracking-[0.32px]"
                  >
                    Hanoi, Vietnam
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Follow us -->
          <div
            class="flex py-2 flex-col justify-center items-start gap-4 w-full"
          >
            <p
              class="text-[#2E353E] text-lg font-semibold leading-[22.5px] tracking-[0.36px]"
            >
              Follow us
            </p>
            <div class="flex items-start gap-2">
              <!-- Youtube -->
              <div class="bg-[#C38F51] p-2.5 rounded-full w-11">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_11_1195)">
                    <path
                      d="M23.4947 7.19565C23.3558 6.70302 23.0905 6.2546 22.7179 5.8946C22.3452 5.5346 21.8842 5.27565 21.3789 5.14302C19.5095 4.65039 12 4.65039 12 4.65039C12 4.65039 4.49051 4.65039 2.62103 5.14302C2.11577 5.27565 1.6484 5.5346 1.28209 5.8946C0.909456 6.2546 0.644193 6.70302 0.505245 7.19565C0.157877 9.0525 -0.0126493 10.9283 -1.777e-05 12.8104C-0.0126493 14.6925 0.157877 16.5683 0.505245 18.4251C0.644193 18.9178 0.909456 19.3662 1.28209 19.7262C1.65472 20.0862 2.11577 20.3451 2.62103 20.4778C4.49051 20.9704 12 20.9704 12 20.9704C12 20.9704 19.5095 20.9704 21.3789 20.4778C21.8842 20.3451 22.3516 20.0862 22.7179 19.7262C23.0905 19.3662 23.3558 18.9178 23.4947 18.4251C23.8421 16.5746 24.0126 14.6925 24 12.8104C24.0126 10.9283 23.8421 9.0525 23.4947 7.19565ZM9.59998 16.303V9.31144L15.8337 12.8104L9.59998 16.3093V16.303Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11_1195">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.810547)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <!-- Tiktok -->
              <div class="bg-[#C38F51] p-2.5 rounded-full w-11">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_11_1197)">
                    <g clip-path="url(#clip1_11_1197)">
                      <path
                        d="M12.2044 1.89453C13.4644 1.89453 14.7344 1.89453 15.9944 1.89453C15.9944 1.98453 15.9944 2.07453 15.9944 2.17453C15.9944 2.38453 16.0144 2.60453 16.0544 2.80453C16.1444 3.33453 16.3144 3.84453 16.5644 4.33453C16.8444 4.86453 17.1944 5.34453 17.6344 5.75453C18.0444 6.14453 18.5044 6.45453 19.0144 6.69453C19.7244 7.02453 20.4644 7.19453 21.2444 7.19453V10.9845C19.3244 10.9745 17.5744 10.4145 15.9944 9.30453V9.39453C15.9944 11.7945 15.9944 14.1845 15.9944 16.5845C15.9944 16.7845 15.9944 16.9945 15.9944 17.1945C15.9944 17.4345 15.9744 17.6745 15.9444 17.9045C15.8844 18.3445 15.7944 18.7845 15.6544 19.2145C15.2644 20.3745 14.6244 21.3745 13.7144 22.2045C12.9144 22.9345 11.9844 23.4545 10.9344 23.7545C10.3944 23.9045 9.84444 23.9945 9.29444 24.0145C9.27444 24.0145 9.25444 24.0145 9.23444 24.0145H8.82444C8.82444 24.0145 8.81444 24.0145 8.80444 24.0145C8.73444 24.0145 8.65444 24.0145 8.58444 24.0045C8.27444 23.9845 7.96444 23.9445 7.65444 23.8845C7.03444 23.7645 6.44444 23.5545 5.88444 23.2745C5.17444 22.9145 4.54444 22.4445 3.99444 21.8645C3.47444 21.3245 3.05444 20.7145 2.73444 20.0345C2.34444 19.2145 2.12444 18.3545 2.07444 17.4545C2.07444 17.4045 2.06444 17.3545 2.05444 17.3045C2.05444 17.1245 2.05444 16.9345 2.05444 16.7545C2.05444 16.7045 2.07444 16.6645 2.07444 16.6145C2.09444 16.2845 2.13444 15.9545 2.20444 15.6245C2.33444 14.9745 2.55444 14.3545 2.86444 13.7645C3.23444 13.0645 3.70444 12.4445 4.27444 11.9145C5.04444 11.1945 5.92444 10.6745 6.92444 10.3545C7.42444 10.1945 7.94444 10.0945 8.46444 10.0545C8.70444 10.0345 8.95444 10.0245 9.19444 10.0345C9.40444 10.0445 9.61444 10.0645 9.82444 10.0745C9.87444 10.0745 9.93444 10.0845 9.98444 10.0945V13.9645C9.98444 13.9645 9.95444 13.9645 9.93444 13.9545C9.74444 13.8945 9.54444 13.8545 9.34444 13.8345C8.96444 13.7945 8.59444 13.8245 8.22444 13.9145C7.64444 14.0645 7.14444 14.3545 6.72444 14.7845C6.48444 15.0245 6.29444 15.3045 6.14444 15.6045C5.82444 16.2545 5.73444 16.9445 5.88444 17.6545C6.06444 18.5245 6.52444 19.2045 7.26444 19.6945C7.92444 20.1345 8.64444 20.2845 9.43444 20.1845C9.82444 20.1345 10.1944 20.0145 10.5444 19.8245C11.1444 19.4845 11.5944 19.0145 11.8944 18.3845C12.0944 17.9545 12.2044 17.5045 12.2044 17.0345C12.2044 12.0245 12.2044 7.01453 12.2044 2.00453C12.2044 1.97453 12.2044 1.94453 12.2044 1.91453V1.89453Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_11_1197">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.810547)"
                      />
                    </clipPath>
                    <clipPath id="clip1_11_1197">
                      <rect
                        width="19.2"
                        height="22.12"
                        fill="white"
                        transform="translate(2.04443 1.89453)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <!-- Facebook -->
              <div class="bg-[#C38F51] p-2.5 rounded-full w-11">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_11_1199)">
                    <path
                      d="M23.4028 12.8626C23.4028 18.5405 19.247 23.2457 13.8091 24.0984V16.1531H16.4618L16.967 12.8689H13.8155V10.7341C13.8155 9.8373 14.2576 8.9594 15.666 8.9594H17.0997V6.16151C17.0997 6.16151 15.7986 5.94046 14.5544 5.94046C11.9586 5.94046 10.2597 7.51309 10.2597 10.3678V12.8752H7.37335V16.1594H10.2597V24.1047C4.81546 23.2457 0.659668 18.5405 0.659668 12.8626C0.659668 6.58467 5.75019 1.49414 12.0344 1.49414C18.3186 1.49414 23.4091 6.58467 23.4091 12.8626H23.4028Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11_1199">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.810547)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <!-- Insta -->
              <div class="bg-[#C38F51] p-2.5 rounded-full w-11">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_11_1201)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.05273 0.882547C8.33236 0.823638 8.74036 0.810547 12 0.810547C15.2596 0.810547 15.6676 0.824729 16.9462 0.882547C18.2247 0.940365 19.0975 1.14437 19.8611 1.44C20.6607 1.74218 21.3862 2.21455 21.9862 2.82546C22.5971 3.42436 23.0684 4.14873 23.3695 4.94946C23.6662 5.71309 23.8691 6.58582 23.928 7.86218C23.9869 9.144 24 9.552 24 12.8105C24 16.0702 23.9858 16.4782 23.928 17.7578C23.8702 19.0342 23.6662 19.9069 23.3695 20.6705C23.0684 21.4714 22.5963 22.1969 21.9862 22.7967C21.3862 23.4076 20.6607 23.8789 19.8611 24.18C19.0975 24.4767 18.2247 24.6796 16.9484 24.7385C15.6676 24.7975 15.2596 24.8105 12 24.8105C8.74036 24.8105 8.33236 24.7964 7.05273 24.7385C5.77636 24.6807 4.90364 24.4767 4.14 24.18C3.33919 23.8789 2.61362 23.4068 2.01382 22.7967C1.40332 22.1975 0.930889 21.4722 0.629454 20.6716C0.333818 19.908 0.130909 19.0353 0.072 17.7589C0.0130909 16.4771 0 16.0691 0 12.8105C0 9.55091 0.0141818 9.14291 0.072 7.86436C0.129818 6.58582 0.333818 5.71309 0.629454 4.94946C0.931334 4.14882 1.40413 3.42362 2.01491 2.82436C2.61386 2.214 3.3387 1.74158 4.13891 1.44C4.90255 1.14437 5.77527 0.941456 7.05164 0.882547H7.05273ZM16.8491 3.04255C15.5836 2.98473 15.204 2.97273 12 2.97273C8.796 2.97273 8.41636 2.98473 7.15091 3.04255C5.98036 3.096 5.34545 3.29127 4.92218 3.456C4.36255 3.67418 3.96218 3.93273 3.54218 4.35273C3.14405 4.74006 2.83765 5.21158 2.64545 5.73273C2.48073 6.156 2.28545 6.79091 2.232 7.96146C2.17418 9.22691 2.16218 9.60655 2.16218 12.8105C2.16218 16.0145 2.17418 16.3942 2.232 17.6596C2.28545 18.8302 2.48073 19.4651 2.64545 19.8884C2.83745 20.4087 3.144 20.8811 3.54218 21.2684C3.92945 21.6665 4.40182 21.9731 4.92218 22.1651C5.34545 22.3298 5.98036 22.5251 7.15091 22.5785C8.41636 22.6364 8.79491 22.6484 12 22.6484C15.2051 22.6484 15.5836 22.6364 16.8491 22.5785C18.0196 22.5251 18.6545 22.3298 19.0778 22.1651C19.6375 21.9469 20.0378 21.6884 20.4578 21.2684C20.856 20.8811 21.1625 20.4087 21.3545 19.8884C21.5193 19.4651 21.7145 18.8302 21.768 17.6596C21.8258 16.3942 21.8378 16.0145 21.8378 12.8105C21.8378 9.60655 21.8258 9.22691 21.768 7.96146C21.7145 6.79091 21.5193 6.156 21.3545 5.73273C21.1364 5.17309 20.8778 4.77273 20.4578 4.35273C20.0705 3.95462 19.5989 3.64823 19.0778 3.456C18.6545 3.29127 18.0196 3.096 16.8491 3.04255ZM10.4673 16.5098C11.3233 16.8661 12.2764 16.9142 13.1639 16.6459C14.0514 16.3775 14.8182 15.8094 15.3334 15.0384C15.8485 14.2675 16.0801 13.3417 15.9884 12.419C15.8968 11.4964 15.4876 10.6342 14.8309 9.97964C14.4123 9.56125 13.906 9.24089 13.3487 9.04162C12.7914 8.84235 12.1968 8.76912 11.6078 8.82722C11.0188 8.88531 10.45 9.07329 9.94233 9.3776C9.43468 9.68191 9.00081 10.095 8.67197 10.5871C8.34312 11.0792 8.12748 11.6381 8.04056 12.2236C7.95365 12.8091 7.99762 13.4065 8.16932 13.9729C8.34101 14.5394 8.63616 15.0607 9.03351 15.4993C9.43087 15.938 9.92054 16.2831 10.4673 16.5098ZM7.63854 8.44909C8.2113 7.87634 8.89126 7.422 9.6396 7.11203C10.3879 6.80206 11.19 6.64252 12 6.64252C12.81 6.64252 13.6121 6.80206 14.3604 7.11203C15.1087 7.422 15.7887 7.87634 16.3615 8.44909C16.9342 9.02185 17.3885 9.70181 17.6985 10.4501C18.0085 11.1985 18.168 12.0005 18.168 12.8105C18.168 13.6205 18.0085 14.4226 17.6985 15.1709C17.3885 15.9193 16.9342 16.5992 16.3615 17.172C15.2047 18.3287 13.6359 18.9786 12 18.9786C10.3641 18.9786 8.79527 18.3287 7.63854 17.172C6.48181 16.0153 5.83197 14.4464 5.83197 12.8105C5.83197 11.1747 6.48181 9.60582 7.63854 8.44909ZM19.536 7.56109C19.6779 7.4272 19.7916 7.2662 19.8701 7.08761C19.9487 6.90902 19.9907 6.71648 19.9935 6.52138C19.9964 6.32628 19.9601 6.1326 19.8867 5.95179C19.8134 5.77099 19.7045 5.60674 19.5665 5.46877C19.4285 5.3308 19.2643 5.22192 19.0835 5.14857C18.9027 5.07521 18.709 5.03888 18.5139 5.04173C18.3188 5.04457 18.1263 5.08653 17.9477 5.16512C17.7691 5.24372 17.6081 5.35734 17.4742 5.49927C17.2138 5.77531 17.0712 6.14195 17.0768 6.52138C17.0823 6.90081 17.2355 7.26314 17.5038 7.53147C17.7721 7.79979 18.1345 7.95298 18.5139 7.95851C18.8933 7.96404 19.26 7.82148 19.536 7.56109Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11_1201">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.810547)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <!-- Twitter -->
              <div class="bg-[#C38F51] p-2.5 rounded-full w-11">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.8196 22.1814H4.42219L10.6944 14.9105L15.6818 22.1814H21.1941L13.7614 11.3989L20.5863 3.43945H18.956L13.0292 10.3248L8.2767 3.43945H2.80579L9.98982 13.8777L2.8196 22.1814ZM5.01626 4.66505H7.48922L18.9699 21.0247H16.4693L5.01626 4.66505Z"
                    fill="white"
                  />
                </svg>
              </div>

              <!-- Shoppee -->
              <div class="bg-[#C38F51] p-2.5 rounded-full w-11">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_11_1205)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.8963 18.7723C15.7567 19.9249 15.0583 20.848 13.9765 21.3102C13.374 21.5677 12.5651 21.7067 11.9248 21.663C10.926 21.6248 9.98763 21.3819 9.12266 20.9379C8.81365 20.7792 8.353 20.4623 7.99929 20.1654C7.9097 20.0904 7.89906 20.0424 7.95834 19.9583C7.99035 19.91 8.04936 19.8229 8.17981 19.6318C8.369 19.3546 8.39261 19.3198 8.41389 19.2873C8.47442 19.1944 8.57277 19.1863 8.66979 19.2627C8.67998 19.2706 8.67998 19.2706 8.68767 19.2766C8.70358 19.289 8.70358 19.289 8.74114 19.3181C8.77914 19.3478 8.80167 19.3652 8.81079 19.3721C9.74362 20.1027 10.8301 20.524 11.9269 20.5662C13.4529 20.5454 14.5502 19.8592 14.7468 18.8057C14.963 17.6462 14.0528 16.6446 12.272 16.0863C11.7151 15.9117 10.3073 15.3482 10.0477 15.1959C8.82876 14.4807 8.25885 13.5439 8.33986 12.3869C8.46396 10.7829 9.95293 9.58668 11.8343 9.57867C12.6757 9.57695 13.5153 9.7518 14.3219 10.0917C14.6074 10.212 15.1174 10.4895 15.2934 10.621C15.3948 10.6954 15.4148 10.7822 15.3567 10.8758C15.3243 10.9301 15.2706 11.0162 15.1575 11.1956L15.1562 11.1976C15.0074 11.4339 15.0027 11.4413 14.9686 11.4966C14.9096 11.5865 14.8402 11.5948 14.7338 11.5273C13.8707 10.9475 12.9139 10.6558 11.8616 10.6347C10.5515 10.6607 9.56962 11.4403 9.50506 12.5024C9.4879 13.4617 10.2074 14.1621 11.7615 14.6961C14.9163 15.7098 16.1235 16.8983 15.8963 18.7723ZM12.0003 2.21189C14.0542 2.21189 15.7283 4.16099 15.8066 6.60086H8.19402C8.27235 4.16099 9.9465 2.21189 12.0003 2.21189ZM22.6297 7.05957C22.6297 6.80622 22.4257 6.60086 22.1741 6.60086H17.2398C17.1188 3.37934 14.8193 0.810547 12.0003 0.810547C9.1814 0.810547 6.88191 3.37934 6.76084 6.60086L1.8195 6.60095C1.57174 6.60545 1.37226 6.8091 1.37226 7.05957C1.37226 7.07155 1.37271 7.08343 1.3736 7.09513H1.37012L2.0745 22.6225C2.07459 22.6657 2.0762 22.7093 2.07942 22.7531C2.08014 22.763 2.08094 22.7728 2.08175 22.7827L2.08327 22.8154L2.08496 22.8171C2.19199 23.8976 2.97613 24.7679 4.04237 24.808L4.04478 24.8104H19.7191C19.7265 24.8105 19.734 24.8105 19.7414 24.8105C19.7488 24.8105 19.7562 24.8105 19.7636 24.8104H19.797C20.8818 24.7807 21.7613 23.8977 21.8541 22.8039L21.8553 22.7887C21.8562 22.7772 21.8571 22.7657 21.8578 22.7542C21.8595 22.7267 21.8606 22.6992 21.8611 22.6719L22.6297 7.08326C22.6301 7.07542 22.6297 7.06749 22.6297 7.05957Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11_1205">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.810547)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <!-- Source -->
          <div
            class="flex py-1 flex-col justify-center items-center gap-2.5 w-full"
          >
            <div class="flex p-1.5 items-center gap-1.5 rounded">
              <img :src="logo_2" alt="" class="w-3.5 h-3.5" />
              <p
                class="text-[#626F82] text-sm font-normal leading-[17.08px] tracking-[0.28px]"
              >
                Powered by
                <span
                  class="text-[#2E353E] text-sm font-bold leading-[17.08px] tracking-[0.28px]"
                  >QR Code Maketing</span
                >
              </p>
            </div>
          </div>
        </div>

        <!-- Button bar -->
        <div
          class="flex w-full px-6 pt-4 pb-6 justify-center items-start gap-4 bg-white"
        >
          <!-- btn call -->
          <div
            class="flex px-8 h-[52px] justify-center items-center gap-3 flex-1 bg-[#F3F4F5] rounded-[100px] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.7713 3.17089C14.9532 2.64942 15.5234 2.37416 16.0449 2.55608C18.9179 3.55832 21.192 5.8324 22.1942 8.7054C22.3761 9.22686 22.1008 9.79706 21.5794 9.97898C21.0579 10.1609 20.4877 9.88563 20.3058 9.36416C19.5045 7.06711 17.6832 5.24579 15.3861 4.44447C14.8646 4.26256 14.5894 3.69236 14.7713 3.17089ZM8.34335 5.08935C8.10855 4.97058 7.83125 4.97058 7.59644 5.08935C7.51435 5.13087 7.40424 5.2232 6.86307 5.76437L6.71904 5.9084C6.20452 6.42292 6.07637 6.56209 5.97311 6.74591C5.85256 6.9605 5.74927 7.3577 5.75 7.60383C5.75065 7.82241 5.78127 7.95114 5.93271 8.48469C6.67402 11.0965 8.07244 13.5613 10.1307 15.6196C12.189 17.6778 14.6538 19.0763 17.2656 19.8176C17.7991 19.969 17.9279 19.9996 18.1464 20.0003C18.3926 20.001 18.7898 19.8977 19.0044 19.7772C19.1882 19.6739 19.3274 19.5457 19.8419 19.0312L20.549 19.7383L19.8419 19.0312L19.9859 18.8872C20.5271 18.346 20.6194 18.2359 20.6609 18.1538C20.7797 17.919 20.7797 17.6417 20.6609 17.4069C20.6194 17.3248 20.5271 17.2147 19.9859 16.6735L20.693 15.9664L19.9859 16.6735L19.8078 16.4955C19.4523 16.14 19.3807 16.0761 19.3301 16.0432C19.0559 15.8649 18.7023 15.8649 18.4281 16.0432C18.3775 16.0761 18.3059 16.1399 17.9503 16.4955C17.9433 16.5025 17.9361 16.5097 17.9287 16.5172C17.8473 16.5989 17.7385 16.7081 17.6077 16.8018L17.0255 15.9888L17.6077 16.8018C17.1412 17.1359 16.5088 17.2437 15.958 17.0831C15.8042 17.0383 15.6775 16.9772 15.5842 16.9322C15.5766 16.9285 15.5692 16.9249 15.562 16.9215C14.1372 16.2374 12.8027 15.3052 11.6239 14.1264C10.4451 12.9476 9.5129 11.6131 8.82878 10.1882C8.82534 10.1811 8.82178 10.1737 8.81811 10.1661C8.77308 10.0727 8.71197 9.94604 8.66715 9.79231L9.61788 9.51516L8.66715 9.7923C8.50658 9.24146 8.61441 8.6091 8.94845 8.1426L8.94845 8.1426C9.04214 8.01175 9.15142 7.90293 9.23308 7.8216C9.24056 7.81416 9.2478 7.80694 9.25478 7.79997C9.61032 7.44442 9.67421 7.37278 9.70709 7.32222L9.70709 7.32221C9.8854 7.04797 9.8854 6.69442 9.70709 6.42018C9.67421 6.36961 9.61032 6.29797 9.25478 5.94242L9.07673 5.76437C8.53556 5.2232 8.42545 5.13087 8.34335 5.08935ZM6.69375 3.30465C7.49612 2.89881 8.44368 2.89881 9.24605 3.30465C9.65432 3.51115 10.0074 3.86526 10.4003 4.25932C10.4303 4.28938 10.4605 4.31968 10.4909 4.35016L10.669 4.52821C10.6891 4.5483 10.709 4.5682 10.7288 4.58796C10.9882 4.8468 11.2203 5.07853 11.3838 5.32999L10.5455 5.87508L11.3838 5.32999C11.9931 6.26713 11.9931 7.47526 11.3838 8.4124C11.2203 8.66386 10.9882 8.89559 10.7288 9.15443C10.709 9.17418 10.6891 9.19409 10.669 9.21418C10.6444 9.23879 10.6252 9.25794 10.6087 9.27461C10.6152 9.28815 10.6226 9.30367 10.6317 9.32261C11.2195 10.5468 12.0211 11.6952 13.0381 12.7122C14.0551 13.7292 15.2035 14.5308 16.4277 15.1185L15.9948 16.02L16.4277 15.1185C16.4466 15.1276 16.4621 15.1351 16.4757 15.1415C16.4848 15.1325 16.4946 15.1227 16.5057 15.1116C16.5149 15.1025 16.5249 15.0924 16.5361 15.0813C16.5562 15.0612 16.5761 15.0412 16.5958 15.0215C16.8547 14.7621 17.0864 14.5299 17.3379 14.3664C18.275 13.7571 19.4831 13.7571 20.4203 14.3664C20.6717 14.5299 20.9035 14.7621 21.1623 15.0215C21.1821 15.0413 21.202 15.0612 21.2221 15.0813L20.5935 15.7098L21.2221 15.0813L21.4001 15.2593C21.4306 15.2898 21.4609 15.32 21.491 15.35C21.885 15.7429 22.2391 16.096 22.4456 16.5042C22.8515 17.3066 22.8515 18.2542 22.4456 19.0565C22.2391 19.4648 21.885 19.8179 21.491 20.2108C21.4609 20.2407 21.4306 20.2709 21.4001 20.3014L21.2561 20.4454C21.2341 20.4674 21.2124 20.4891 21.1909 20.5106C20.7691 20.933 20.435 21.2674 19.9839 21.5209C19.4684 21.8104 18.7317 22.002 18.1405 22.0003C17.6241 21.9987 17.2461 21.8913 16.774 21.757C16.7559 21.7519 16.7378 21.7468 16.7195 21.7416C13.788 20.9095 11.0221 19.3394 8.7165 17.0338C6.41092 14.7282 4.84074 11.9622 4.0087 9.03078C4.00351 9.01248 3.99835 8.99433 3.99323 8.97632C3.85902 8.50419 3.75155 8.12613 3.75001 7.60978C3.74825 7.01855 3.93983 6.28185 4.2294 5.76638L4.2294 5.76638C4.48283 5.31523 4.81724 4.98122 5.23964 4.55933C5.26114 4.53785 5.28287 4.51615 5.30483 4.49419L6.01193 5.20129L5.30483 4.49419L5.44886 4.35016C5.47934 4.31968 5.50954 4.28938 5.53952 4.25932C5.93241 3.86526 6.28548 3.51115 6.69375 3.30465L7.1451 4.197L6.69375 3.30465ZM13.8072 6.00844C13.9912 5.48772 14.5625 5.2148 15.0832 5.39884C17.0729 6.10209 18.6482 7.67735 19.3514 9.66703C19.5355 10.1877 19.2626 10.7591 18.7418 10.9431C18.2211 11.1272 17.6498 10.8542 17.4657 10.3335C16.9639 8.91354 15.8367 7.78641 14.4168 7.28452C13.896 7.10048 13.6231 6.52915 13.8072 6.00844Z"
                fill="#3A424E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.7713 3.17089C14.9532 2.64942 15.5234 2.37416 16.0449 2.55608C18.9179 3.55832 21.192 5.8324 22.1942 8.7054C22.3761 9.22686 22.1008 9.79706 21.5794 9.97898C21.0579 10.1609 20.4877 9.88563 20.3058 9.36416C19.5045 7.06711 17.6832 5.24579 15.3861 4.44447C14.8646 4.26256 14.5894 3.69236 14.7713 3.17089ZM8.34335 5.08935C8.10855 4.97058 7.83125 4.97058 7.59644 5.08935C7.51435 5.13087 7.40424 5.2232 6.86307 5.76437L6.71904 5.9084C6.20452 6.42292 6.07637 6.56209 5.97311 6.74591C5.85256 6.9605 5.74927 7.3577 5.75 7.60383C5.75065 7.82241 5.78127 7.95114 5.93271 8.48469C6.67402 11.0965 8.07244 13.5613 10.1307 15.6196C12.189 17.6778 14.6538 19.0763 17.2656 19.8176C17.7991 19.969 17.9279 19.9996 18.1464 20.0003C18.3926 20.001 18.7898 19.8977 19.0044 19.7772C19.1882 19.6739 19.3274 19.5457 19.8419 19.0312L20.549 19.7383L19.8419 19.0312L19.9859 18.8872C20.5271 18.346 20.6194 18.2359 20.6609 18.1538C20.7797 17.919 20.7797 17.6417 20.6609 17.4069C20.6194 17.3248 20.5271 17.2147 19.9859 16.6735L20.693 15.9664L19.9859 16.6735L19.8078 16.4955C19.4523 16.14 19.3807 16.0761 19.3301 16.0432C19.0559 15.8649 18.7023 15.8649 18.4281 16.0432C18.3775 16.0761 18.3059 16.1399 17.9503 16.4955C17.9433 16.5025 17.9361 16.5097 17.9287 16.5172C17.8473 16.5989 17.7385 16.7081 17.6077 16.8018L17.0255 15.9888L17.6077 16.8018C17.1412 17.1359 16.5088 17.2437 15.958 17.0831C15.8042 17.0383 15.6775 16.9772 15.5842 16.9322C15.5766 16.9285 15.5692 16.9249 15.562 16.9215C14.1372 16.2374 12.8027 15.3052 11.6239 14.1264C10.4451 12.9476 9.5129 11.6131 8.82878 10.1882C8.82534 10.1811 8.82178 10.1737 8.81811 10.1661C8.77308 10.0727 8.71197 9.94604 8.66715 9.79231L9.61788 9.51516L8.66715 9.7923C8.50658 9.24146 8.61441 8.6091 8.94845 8.1426L8.94845 8.1426C9.04214 8.01175 9.15142 7.90293 9.23308 7.8216C9.24056 7.81416 9.2478 7.80694 9.25478 7.79997C9.61032 7.44442 9.67421 7.37278 9.70709 7.32222L9.70709 7.32221C9.8854 7.04797 9.8854 6.69442 9.70709 6.42018C9.67421 6.36961 9.61032 6.29797 9.25478 5.94242L9.07673 5.76437C8.53556 5.2232 8.42545 5.13087 8.34335 5.08935ZM6.69375 3.30465C7.49612 2.89881 8.44368 2.89881 9.24605 3.30465C9.65432 3.51115 10.0074 3.86526 10.4003 4.25932C10.4303 4.28938 10.4605 4.31968 10.4909 4.35016L10.669 4.52821C10.6891 4.5483 10.709 4.5682 10.7288 4.58796C10.9882 4.8468 11.2203 5.07853 11.3838 5.32999L10.5455 5.87508L11.3838 5.32999C11.9931 6.26713 11.9931 7.47526 11.3838 8.4124C11.2203 8.66386 10.9882 8.89559 10.7288 9.15443C10.709 9.17418 10.6891 9.19409 10.669 9.21418C10.6444 9.23879 10.6252 9.25794 10.6087 9.27461C10.6152 9.28815 10.6226 9.30367 10.6317 9.32261C11.2195 10.5468 12.0211 11.6952 13.0381 12.7122C14.0551 13.7292 15.2035 14.5308 16.4277 15.1185L15.9948 16.02L16.4277 15.1185C16.4466 15.1276 16.4621 15.1351 16.4757 15.1415C16.4848 15.1325 16.4946 15.1227 16.5057 15.1116C16.5149 15.1025 16.5249 15.0924 16.5361 15.0813C16.5562 15.0612 16.5761 15.0412 16.5958 15.0215C16.8547 14.7621 17.0864 14.5299 17.3379 14.3664C18.275 13.7571 19.4831 13.7571 20.4203 14.3664C20.6717 14.5299 20.9035 14.7621 21.1623 15.0215C21.1821 15.0413 21.202 15.0612 21.2221 15.0813L20.5935 15.7098L21.2221 15.0813L21.4001 15.2593C21.4306 15.2898 21.4609 15.32 21.491 15.35C21.885 15.7429 22.2391 16.096 22.4456 16.5042C22.8515 17.3066 22.8515 18.2542 22.4456 19.0565C22.2391 19.4648 21.885 19.8179 21.491 20.2108C21.4609 20.2407 21.4306 20.2709 21.4001 20.3014L21.2561 20.4454C21.2341 20.4674 21.2124 20.4891 21.1909 20.5106C20.7691 20.933 20.435 21.2674 19.9839 21.5209C19.4684 21.8104 18.7317 22.002 18.1405 22.0003C17.6241 21.9987 17.2461 21.8913 16.774 21.757C16.7559 21.7519 16.7378 21.7468 16.7195 21.7416C13.788 20.9095 11.0221 19.3394 8.7165 17.0338C6.41092 14.7282 4.84074 11.9622 4.0087 9.03078C4.00351 9.01248 3.99835 8.99433 3.99323 8.97632C3.85902 8.50419 3.75155 8.12613 3.75001 7.60978C3.74825 7.01855 3.93983 6.28185 4.2294 5.76638L4.2294 5.76638C4.48283 5.31523 4.81724 4.98122 5.23964 4.55933C5.26114 4.53785 5.28287 4.51615 5.30483 4.49419L6.01193 5.20129L5.30483 4.49419L5.44886 4.35016C5.47934 4.31968 5.50954 4.28938 5.53952 4.25932C5.93241 3.86526 6.28548 3.51115 6.69375 3.30465L7.1451 4.197L6.69375 3.30465ZM13.8072 6.00844C13.9912 5.48772 14.5625 5.2148 15.0832 5.39884C17.0729 6.10209 18.6482 7.67735 19.3514 9.66703C19.5355 10.1877 19.2626 10.7591 18.7418 10.9431C18.2211 11.1272 17.6498 10.8542 17.4657 10.3335C16.9639 8.91354 15.8367 7.78641 14.4168 7.28452C13.896 7.10048 13.6231 6.52915 13.8072 6.00844Z"
                fill="black"
                fill-opacity="0.2"
              />
            </svg>
            <div
              class="text-[#2E353E] font-bold leading-[21.28px] tracking-[0.32px]"
            >
              Call
            </div>
          </div>
          <!-- btn order -->
          <div
            class="flex px-8 h-[52px] justify-center items-center gap-3 flex-1 bg-[#C38F51] rounded-[100px] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.25 4C2.25 3.44772 2.69772 3 3.25 3H3.85632C4.99427 3 5.99653 3.6369 6.50428 4.58889H20.145C21.0867 4.58889 21.7955 5.44652 21.6182 6.37139L20.2104 13.7121L20.203 13.7413C19.8641 15.0701 18.6674 16 17.296 16H8.64368C7.11275 16 5.8274 14.8472 5.66138 13.3253L4.85042 5.89155C4.84728 5.86278 4.84294 5.83441 4.83746 5.80647C4.8357 5.79855 4.83403 5.7906 4.83247 5.7826C4.73214 5.33024 4.3294 5 3.85632 5H3.25C2.69772 5 2.25 4.55228 2.25 4ZM6.93836 6.58889L7.64958 13.1084C7.70492 13.6157 8.13337 14 8.64368 14H17.296C17.7448 14 18.1375 13.7013 18.2585 13.2713L19.54 6.58889H6.93836ZM5.25 19C5.25 17.8954 6.14543 17 7.25 17C8.35457 17 9.25 17.8954 9.25 19C9.25 20.1046 8.35457 21 7.25 21C6.14543 21 5.25 20.1046 5.25 19ZM16.25 19C16.25 17.8954 17.1454 17 18.25 17C19.3546 17 20.25 17.8954 20.25 19C20.25 20.1046 19.3546 21 18.25 21C17.1454 21 16.25 20.1046 16.25 19Z"
                fill="white"
              />
            </svg>
            <div
              class="text-[#fff] font-bold leading-[21.28px] tracking-[0.32px]"
            >
              Order
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
