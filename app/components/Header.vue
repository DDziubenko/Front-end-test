<template>
  <header class="w-full bg-transparent">
    <div class="flex items-center justify-between p-4 md:py-6 md:px-[44px]">
      <div class="flex items-center gap-0 md:gap-8">
        <NuxtLink
          to="/"
          class="hidden md:block h-12 w-[51.2px] shrink-0"
          aria-label="Go to homepage"
        >
          <img
            :src="logoImage"
            alt="Bonny Moon Logo - Home"
            class="w-full h-full block"
            width="51"
            height="48"
          />
        </NuxtLink>
        <button
          @click="open"
          class="bg-transparent border-0 p-0 cursor-pointer w-8 h-8 flex items-center justify-center"
          aria-label="Open menu"
        >
          <img
            :src="menuIconMobile"
            alt="Menu"
            class="w-full h-full block md:hidden"
          />
          <img
            :src="menuIconDesktop"
            alt="Menu"
            class="w-full h-full hidden md:block"
          />
        </button>
      </div>

      <p
        class="font-['TayKari',sans-serif] text-[32px] leading-[1.1] text-[#f26e21] tracking-[2.88px] m-0 shrink-0 uppercase"
      >
        BOOKING
      </p>
    </div>
  </header>
</template>

<script setup lang="ts">
const { open } = useSidebar();

const logoImage = "/icons/logo.svg"
const menuIconDesktop = "/icons/menu-desktop.svg"
const menuIconMobile = "/icons/menu-mobile.svg"
</script>
