<template>
  <footer
    class="bg-[#FFFFF0] px-4 pt-16 pb-5 dt:px-11 dt:pt-[100px] dt:pb-5 flex flex-col justify-between relative w-full 2xl:min-h-dvh"
  >
    <!-- Top Section: Logo and Navigation -->
    <div
      class="flex flex-col gap-8 dt:flex-row dt:justify-between dt:items-start w-full"
    >
      <!-- Logo -->
      <div class="w-[112px] h-[72px] shrink-0">
        <NuxtImg
          src="/icons/logo-l-black.svg"
          alt="Bonny Moon logo"
          width="112"
          height="72"
          class="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      <!-- Navigation Links -->
      <nav
        class="flex justify-between items-start w-full dt:w-auto dt:gap-8"
        aria-label="Footer navigation"
      >
        <LinkWithLine text="Home" href="#" :wavyWidth="42" :wavyHeight="6" />
        <LinkWithLine text="Spaces" href="#" :wavyWidth="53" :wavyHeight="6" />
        <LinkWithLine
          text="Drink & Dine"
          href="#"
          :wavyWidth="90"
          :wavyHeight="6"
        />
        <LinkWithLine text="Events" href="#" :wavyWidth="50" :wavyHeight="6" />
      </nav>
    </div>

    <!-- Images Section -->
    <!-- Mobile Layout -->
    <div class="dt:hidden flex flex-col gap-4 w-full mt-8 mb-4">
      <!-- Row 1 -->
      <div class="flex gap-4 items-end">
        <div class="flex-1 h-[230px] bg-[#E5E5D8] relative overflow-hidden">
          <NuxtImg
            :src="beachImage.src"
            :alt="beachImage.alt"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div class="flex-1 h-[141px] bg-[#E5E5D8] relative overflow-hidden">
          <NuxtImg
            :src="gardenImage.src"
            :alt="gardenImage.alt"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <!-- Row 2 -->
      <div class="h-[228px] w-full bg-[#E5E5D8] relative overflow-hidden">
        <NuxtImg
          :src="djImage.src"
          :alt="djImage.alt"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <!-- Row 3 -->
      <div class="h-[343px] w-full bg-[#E5E5D8] relative overflow-hidden">
        <NuxtImg
          :src="chessImage.src"
          :alt="chessImage.alt"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <!-- Row 4 -->
      <div class="flex gap-4 items-end">
        <div class="flex-1 h-[230px] bg-[#E5E5D8] relative overflow-hidden">
          <NuxtImg
            :src="foodImage.src"
            :alt="foodImage.alt"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div class="flex-1 h-[141px] bg-[#E5E5D8] relative overflow-hidden">
          <NuxtImg
            :src="cocktailImage.src"
            :alt="cocktailImage.alt"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <!-- Desktop Layout -->
    <div
      class="hidden dt:flex flex-wrap gap-8 items-end w-full mt-8 mb-8 justify-between"
    >
      <!-- Column 1 -->
      <div class="flex gap-8 items-end flex-1 min-w-[300px]">
        <div class="w-1/2 aspect-141/230 bg-[#E5E5D8] relative overflow-hidden">
          <NuxtImg
            :src="beachImage.src"
            :alt="beachImage.alt"
            loading="lazy"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="w-1/2 aspect-141/141 bg-[#E5E5D8] relative overflow-hidden">
          <NuxtImg
            :src="gardenImage.src"
            :alt="gardenImage.alt"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <!-- Column 2 -->
      <div
        class="flex-1 min-w-[300px] aspect-314/208 bg-[#E5E5D8] relative overflow-hidden"
      >
        <NuxtImg
          :src="djImage.src"
          :alt="djImage.alt"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <!-- Column 3 -->
      <div
        class="flex-1 min-w-[300px] aspect-314/314 bg-[#E5E5D8] relative overflow-hidden"
      >
        <NuxtImg
          :src="chessImage.src"
          :alt="chessImage.alt"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <!-- Column 4 -->
      <div class="flex gap-8 items-end flex-1 min-w-[300px]">
        <div class="w-1/2 aspect-141/230 bg-[#E5E5D8] relative overflow-hidden">
          <NuxtImg
            :src="foodImage.src"
            :alt="foodImage.alt"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div class="w-1/2 aspect-141/141 bg-[#E5E5D8] relative overflow-hidden">
          <NuxtImg
            :src="cocktailImage.src"
            :alt="cocktailImage.alt"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <!-- Bottom Section: Copyright and Legal -->
    <div
      class="w-full pt-4 border-t border-[#E5E5D8] flex flex-col dt:flex-row dt:justify-between gap-4"
    >
      <p class="font-family-sans text-[15px] dt:text-base text-[#333333]">
        Bonny Moon 2025 | All rights reserved
      </p>
      <div
        class="flex gap-8 font-family-sans text-[15px] dt:text-base text-[#333333]"
      >
        <a href="#" class="hover:text-[#F26E21] transition-colors"
          >Contact Us</a
        >
        <a href="#" class="hover:text-[#F26E21] transition-colors"
          >Privacy Policy</a
        >
        <a href="#" class="hover:text-[#F26E21] transition-colors">Cookies</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
type FooterImage = {
  src: string;
  alt: string;
};

const footerImages = [
  {
    src: "/images/footer/footer-1.webp",
    alt: "Sunset beach lounge at Bonny Moon",
  },
  {
    src: "/images/footer/footer-2.webp",
    alt: "Lush garden corner inside the club",
  },
  {
    src: "/images/footer/footer-3.webp",
    alt: "Live DJ set during an evening event",
  },
  {
    src: "/images/footer/footer-4.webp",
    alt: "Guests enjoying a chess match",
  },
  {
    src: "/images/footer/footer-5.webp",
    alt: "Signature Bonny Moon tasting menu",
  },
  {
    src: "/images/footer/footer-6.webp",
    alt: "Bonny Moon signature cocktail",
  },
] as const satisfies readonly FooterImage[];

const [beachImage, gardenImage, djImage, chessImage, foodImage, cocktailImage] =
  footerImages;
</script>
