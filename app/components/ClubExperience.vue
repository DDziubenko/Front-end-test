<template>
  <section
    class="bg-[#FFFFF0] px-4 py-16 dt:px-11 dt:py-[100px] min-[2650px]:max-w-[2895px] min-[2650px]:mx-auto"
  >
    <h2
      class="font-taykari text-[36px] dt:text-[48px] font-normal leading-[1.1] text-[#333] mb-8 dt:mb-16"
    >
      <span>CLUB EXPERIENCE</span>
    </h2>

    <div
      class="flex flex-col gap-8 dt:gap-10 min-[1601px]:flex-row min-[1601px]:flex-wrap min-[1601px]:items-start min-[1601px]:gap-4 min-[1601px]:justify-between"
    >
      <!-- Music & Events -->
      <div
        class="border-b border-[#e5e5d8] pb-10 flex flex-col dt:flex-row min-[1601px]:flex-col min-[1601px]:max-w-[802px] gap-8 min-[1601px]:flex-1 min-[1601px]:border-b-0"
      >
        <div
          class="hidden xl:flex min-[1601px]:hidden! w-[314px] shrink-0 items-center justify-start"
        >
          <span
            class="font-['Ostrich_Sans'] text-[132px] leading-none tracking-[1.98px] text-[#FFFFF0] opacity-50"
          >
            1.
          </span>
        </div>

        <div
          class="flex gap-6 dt:gap-8 dt:w-[314px] min-[1601px]:w-full dt:shrink-0"
        >
          <img
            src="/assets/icons/club-experience/music illustration.svg"
            alt="Music & Events"
            class="w-[163px] h-[117.28px] dt:w-[141px] dt:h-[102px] shrink-0"
          />
          <h3
            class="flex-1 font-['Ostrich_Sans'] text-[32px] dt:text-[36px] font-black leading-[1.1] text-[#333333]"
          >
            Music & Events
          </h3>
        </div>

        <div
          class="flex flex-col gap-6 dt:flex-1 dt:flex-row min-[1601px]:flex-col dt:justify-between dt:items-start"
        >
          <p
            class="font-family-sans text-[15px] dt:text-base leading-normal text-[#585858] dt:w-[314px] min-[1601px]:w-full"
          >
            Feel the rhythm of Bonny Moon. Join us for DJ sets, parties, and
            events that celebrate life and spark emotion.
          </p>

          <a
            href="#"
            class="experience-link flex flex-col items-start dt:items-center min-[1601px]:items-start gap-2 dt:shrink-0"
          >
            <span
              class="font-family-sans font-semibold text-base leading-normal text-[#333333]"
            >
              Follow Us
            </span>
            <WavyLine :width="82" :height="7" class="experience-wave" />
          </a>
        </div>
      </div>

      <!-- Dining & Drinks -->
      <div
        class="border-b min-[1601px]:max-w-[802px] border-[#e5e5d8] pb-10 flex flex-col dt:flex-row min-[1601px]:flex-col gap-8 min-[1601px]:flex-1 min-[1601px]:border-b-0"
      >
        <div
          class="hidden xl:flex min-[1601px]:hidden! w-[314px] shrink-0 items-center justify-start"
        >
          <span
            class="font-['Ostrich_Sans'] text-[132px] leading-none tracking-[1.98px] text-[#FFFFF0] opacity-50"
          >
            2.
          </span>
        </div>

        <div
          class="flex gap-6 dt:gap-8 dt:w-[314px] min-[1601px]:w-full dt:shrink-0"
        >
          <img
            src="/assets/icons/club-experience/cake illustration.svg"
            alt="Dining & Drinks"
            class="w-[164px] h-[118px] dt:w-[141px] dt:h-[102px] shrink-0"
          />
          <h3
            class="flex-1 font-['Ostrich_Sans'] text-[32px] dt:text-[36px] font-black leading-[1.1] text-[#333333]"
          >
            Dining & Drinks
          </h3>
        </div>

        <div
          class="flex flex-col gap-6 dt:flex-1 dt:flex-row min-[1601px]:flex-col dt:justify-between dt:items-start"
        >
          <p
            class="font-family-sans text-[15px] dt:text-base leading-normal text-[#585858] dt:w-[314px] min-[1601px]:w-full"
          >
            Indulge in beach comfort food and drinks, featuring wood-fired
            dishes, local seafood, and signature cocktails.
          </p>

          <a
            href="#"
            class="experience-link flex flex-col items-start dt:items-center min-[1601px]:items-start gap-2 dt:shrink-0"
          >
            <span
              class="font-family-sans font-semibold text-base leading-normal text-[#333333]"
            >
              View Menu
            </span>
            <WavyLine :width="82" :height="7" class="experience-wave" />
          </a>
        </div>
      </div>

      <!-- Amenities & Niceties -->
      <div
        class="border-b min-[1601px]:max-w-[802px] border-[#e5e5d8] pb-10 flex flex-col dt:flex-row min-[1601px]:flex-col gap-8 min-[1601px]:flex-1 min-[1601px]:border-b-0"
      >
        <div
          class="hidden xl:flex min-[1601px]:hidden! w-[314px] shrink-0 items-center justify-start"
        >
          <span
            class="font-['Ostrich_Sans'] text-[132px] leading-none tracking-[1.98px] text-[#FFFFF0] opacity-50"
          >
            3.
          </span>
        </div>

        <div
          class="flex gap-6 dt:gap-8 dt:w-[314px] min-[1601px]:w-full dt:shrink-0"
        >
          <img
            src="/assets/icons/club-experience/palmer illustration.svg"
            alt="Amenities & Niceties"
            class="w-[164px] h-[118px] dt:w-[141px] dt:h-[102px] shrink-0"
          />
          <h3
            class="flex-1 font-['Ostrich_Sans'] text-[32px] dt:text-[36px] font-black leading-[1.1] text-[#333333]"
          >
            AMENITIES & NICETIES
          </h3>
        </div>

        <div
          class="flex flex-col gap-6 dt:flex-1 dt:flex-row min-[1601px]:flex-col dt:justify-between dt:items-start"
        >
          <p
            class="font-family-sans text-[15px] dt:text-base leading-normal text-[#585858] dt:w-[314px] min-[1601px]:w-full"
          >
            Our club offers exclusive amenities, including sun loungers,
            cabanas, and a fantastic team to satisfy your every whim.
          </p>

          <a
            href="#"
            class="experience-link flex flex-col items-start dt:items-center min-[1601px]:items-start gap-2 dt:shrink-0"
          >
            <span
              class="font-family-sans font-semibold text-base leading-normal text-[#333333]"
            >
              Book Event
            </span>
            <WavyLine :width="86" :height="7" class="experience-wave" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
