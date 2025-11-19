<template>
  <footer
    class="bg-[#FFFFF0] px-4 pt-16 pb-5 dt:px-11 dt:pt-[100px] dt:pb-5 flex flex-col justify-between relative w-full footer-section"
  >
    <!-- Top Section: Logo and Navigation -->
    <div
      class="flex flex-col gap-8 dt:flex-row dt:justify-between dt:items-start w-full"
    >
      <!-- Logo -->
      <div class="w-[112px] h-[72px] shrink-0">
        <img
          src="/assets/icons/logo-l-black.svg"
          alt="Bonny Moon"
          class="w-full h-full object-contain"
        />
      </div>

      <!-- Navigation Links -->
      <nav class="flex justify-between items-start w-full dt:w-auto dt:gap-8">
        <a
          href="#"
          class="flex flex-col items-center gap-2 group hover:text-[#F26E21] transition-colors duration-300"
        >
          <span
            class="font-family-sans font-semibold text-base text-[#333333] group-hover:text-[#F26E21] transition-colors duration-300"
            >Home</span
          >
          <WavyLine
            :width="42"
            :height="6"
            color="currentColor"
            class="text-[#333333] group-hover:text-[#F26E21] transition-colors duration-300"
          />
        </a>
        <a
          href="#"
          class="flex flex-col items-center gap-2 group hover:text-[#F26E21] transition-colors duration-300"
        >
          <span
            class="font-family-sans font-semibold text-base text-[#333333] group-hover:text-[#F26E21] transition-colors duration-300"
            >Spaces</span
          >
          <WavyLine
            :width="53"
            :height="6"
            color="currentColor"
            class="text-[#333333] group-hover:text-[#F26E21] transition-colors duration-300"
          />
        </a>
        <a
          href="#"
          class="flex flex-col items-center gap-2 group hover:text-[#F26E21] transition-colors duration-300"
        >
          <span
            class="font-family-sans font-semibold text-base text-[#333333] group-hover:text-[#F26E21] transition-colors duration-300"
            >Drink & Dine</span
          >
          <WavyLine
            :width="90"
            :height="6"
            color="currentColor"
            class="text-[#333333] group-hover:text-[#F26E21] transition-colors duration-300"
          />
        </a>
        <a
          href="#"
          class="flex flex-col items-center gap-2 group hover:text-[#F26E21] transition-colors duration-300"
        >
          <span
            class="font-family-sans font-semibold text-base text-[#333333] group-hover:text-[#F26E21] transition-colors duration-300"
            >Events</span
          >
          <WavyLine
            :width="50"
            :height="6"
            color="currentColor"
            class="text-[#333333] group-hover:text-[#F26E21] transition-colors duration-300"
          />
        </a>
      </nav>
    </div>

    <!-- Images Section -->
    <!-- Mobile Layout -->
    <div class="dt:hidden flex flex-col gap-4 w-full mt-8 mb-4">
      <!-- Row 1 -->
      <div class="flex gap-4 items-end">
        <div class="flex-1 h-[230px] bg-[#E5E5D8] relative overflow-hidden">
          <!-- Placeholder 1 -->
        </div>
        <div class="flex-1 h-[141px] bg-[#E5E5D8] relative overflow-hidden">
          <!-- Placeholder 2 -->
        </div>
      </div>
      <!-- Row 2 -->
      <div class="h-[228px] w-full bg-[#E5E5D8] relative overflow-hidden">
        <!-- Placeholder 3 -->
      </div>
      <!-- Row 3 -->
      <div class="h-[343px] w-full bg-[#E5E5D8] relative overflow-hidden">
        <!-- Placeholder 4 -->
      </div>
      <!-- Row 4 -->
      <div class="flex gap-4 items-end">
        <div class="flex-1 h-[230px] bg-[#E5E5D8] relative overflow-hidden">
          <!-- Placeholder 5 -->
        </div>
        <div class="flex-1 h-[141px] bg-[#E5E5D8] relative overflow-hidden">
          <!-- Placeholder 6 -->
        </div>
      </div>
    </div>

    <!-- Desktop Layout -->
    <div
      class="hidden dt:flex flex-wrap gap-8 items-end w-full mt-8 mb-8 justify-between"
    >
      <!-- Column 1 -->
      <div class="flex gap-8 items-end flex-1 min-w-[300px]">
        <div
          class="w-1/2 aspect-[141/230] bg-[#E5E5D8] relative overflow-hidden"
        >
          <!-- Placeholder 1 -->
        </div>
        <div
          class="w-1/2 aspect-[141/141] bg-[#E5E5D8] relative overflow-hidden"
        >
          <!-- Placeholder 2 -->
        </div>
      </div>
      <!-- Column 2 -->
      <div
        class="flex-1 min-w-[300px] aspect-[314/208] bg-[#E5E5D8] relative overflow-hidden"
      >
        <!-- Placeholder 3 -->
      </div>
      <!-- Column 3 -->
      <div
        class="flex-1 min-w-[300px] aspect-[314/314] bg-[#E5E5D8] relative overflow-hidden"
      >
        <!-- Placeholder 4 -->
      </div>
      <!-- Column 4 -->
      <div class="flex gap-8 items-end flex-1 min-w-[300px]">
        <div
          class="w-1/2 aspect-[141/230] bg-[#E5E5D8] relative overflow-hidden"
        >
          <!-- Placeholder 5 -->
        </div>
        <div
          class="w-1/2 aspect-[141/141] bg-[#E5E5D8] relative overflow-hidden"
        >
          <!-- Placeholder 6 -->
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

<script setup lang="ts"></script>

<style scoped>
@media (min-width: 2561px) {
  .footer-section {
    min-height: 100dvh;
  }
}
</style>
