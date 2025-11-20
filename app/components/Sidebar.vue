<template>
  <Teleport to="body">
    <!-- Overlay -->
    <div
      v-show="isOpen"
      class="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
      :class="isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      @click="close"
    />

    <!-- Sidebar -->
    <div
      ref="sidebarRef"
      name="sidebar"
      aria-label="Sidebar"
      role="dialog"
      aria-modal="true"
      class="fixed top-0 left-0 w-full bg-[ivory] z-50 overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out h-full lg:h-auto lg:max-h-[90vh]"
      :class="[
        isOpen
          ? 'translate-x-0 opacity-100 lg:translate-y-0 lg:translate-x-0'
          : '-translate-x-full opacity-0 lg:translate-x-0 lg:-translate-y-full lg:opacity-0',
      ]"
    >
      <div class="flex flex-col gap-[44px] lg:h-auto">
        <!-- Header -->
        <div
          class="flex items-center justify-between px-4 py-6 lg:px-[44px] lg:py-6 h-[104px] shrink-0"
        >
          <div class="h-12 w-[51.2px] shrink-0">
            <img :src="logoGray" alt="Logo" class="w-full h-full block" />
          </div>
          <button
            @click="close"
            class="bg-transparent border-0 p-0 cursor-pointer w-8 h-8 flex items-center justify-center"
            aria-label="Close menu"
          >
            <img :src="riCross" alt="Close" class="w-full h-full block" />
          </button>
        </div>

        <!-- Line separator -->
        <div class="absolute h-px left-4 lg:left-[44px] top-[104px] w-[calc(100%-2rem)] lg:w-[calc(100%-88px)] bg-[#E5E5D8] pointer-events-none"></div>

        <!-- Content -->
        <div
          class="flex flex-col 2xl:flex-row items-start 2xl:justify-between px-4 lg:px-[44px] pb-16 overflow-x-hidden relative"
        >
          <!-- Navigation -->
          <div
            class="flex flex-col gap-8 lg:gap-[32px] items-start w-full lg:w-[314px] shrink-0"
          >
            <!-- Headline -->
            <div class="flex gap-[6px] items-center w-full">
              <div class="w-3 h-3 shrink-0 relative">
                <img
                  :src="doodleIcon"
                  alt="Doodle"
                  class="w-full h-full block"
                />
              </div>
              <p
                class="font-sans font-bold leading-[1.4] text-[11px] text-[#585858] uppercase whitespace-nowrap"
              >
                DISCOVER
              </p>
            </div>

            <!-- Menu Items -->
            <div class="flex flex-col gap-8 lg:gap-[32px] items-start w-full">
              <!-- Home -->
              <a
                href="#"
                class="block cursor-pointer text-[#333333] w-full transition-colors duration-300 hover:text-[#F26E21] focus:text-[#F26E21] focus:outline-none focus-visible:text-[#F26E21] focus-visible:outline-none"
                aria-label="Home"
              >
                <h2
                  class="font-display font-black leading-[1.1] text-[36px] mb-0 whitespace-pre-wrap"
                >
                  Home
                </h2>
              </a>

              <!-- Drink & Dine -->
              <a
                href="#"
                class="block cursor-pointer text-[#333333] w-full transition-colors duration-300 hover:text-[#F26E21] focus:text-[#F26E21] focus:outline-none focus-visible:text-[#F26E21] focus-visible:outline-none"
                aria-label="Drink & Dine"
              >
                <h2
                  class="font-display font-black leading-[1.1] text-[36px] mb-0 whitespace-pre-wrap"
                >
                  Drink & Dine
                </h2>
              </a>

              <!-- Our SPACES -->
              <a
                href="#"
                class="block cursor-pointer text-[#333333] w-full transition-colors duration-300 hover:text-[#F26E21] focus:text-[#F26E21] focus:outline-none focus-visible:text-[#F26E21] focus-visible:outline-none"
                aria-label="Our SPACES"
              >
                <h2
                  class="font-display font-black leading-[1.1] text-[36px] mb-0 whitespace-pre-wrap"
                >
                  Our SPACES
                </h2>
              </a>

              <!-- What's happening -->
              <a
                href="#"
                class="block cursor-pointer text-[#333333] w-full transition-colors duration-300 hover:text-[#F26E21] focus:text-[#F26E21] focus:outline-none focus-visible:text-[#F26E21] focus-visible:outline-none"
                aria-label="What's happening"
              >
                <h2
                  class="font-display font-black leading-[1.1] text-[36px] mb-0 whitespace-pre-wrap"
                >
                  What's happening
                </h2>
              </a>
            </div>
          </div>

          <!-- Image group - below links on screens less than 2xl breakpoint (1536px), wrappable -->
          <div
            class="flex flex-wrap gap-8 lg:gap-[32px] items-end relative shrink-0 w-full 2xl:w-auto mt-8 2xl:mt-0 max-w-full lg:h-[303px]"
          >
            <!-- Image 1 - Small square -->
            <div class="h-[141px] w-[141px] relative shrink-0 block">
              <NuxtImg
                src="/images/sidebar/sidebar-1.webp"
                sizes="141px"
                alt="Sidebar image 1"
                class="h-[141px] w-[141px] object-cover object-center"
                loading="lazy"
                width="141"
                height="141"
              />
            </div>
            <!-- Image 2 - Large horizontal -->
            <div class="h-[208px] w-[314px] relative shrink-0 block">
              <NuxtImg
                src="/images/sidebar/sidebar-2.webp"
                sizes="314px"
                alt="Sidebar image 2"
                class="h-[208px] w-[314px] object-cover object-center"
                loading="lazy"
                width="314"
                height="208"
              />
            </div>
            <!-- Image 3 - Large vertical -->
            <div class="h-[303px] w-[314px] relative shrink-0 block">
              <NuxtImg
                src="/images/sidebar/sidebar-3.webp"
                sizes="314px"
                alt="Sidebar image 3"
                class="h-[303px] w-[314px] object-cover object-center"
                loading="lazy"
                width="314"
                height="303"
              />
            </div>
            <!-- Image 4 - Small vertical -->
            <div class="h-[230px] w-[141px] relative shrink-0 block">
              <NuxtImg
                src="/images/sidebar/sidebar-4.webp"
                sizes="141px"
                alt="Sidebar image 4"
                class="h-[230px] w-[141px] object-cover object-center"
                loading="lazy"
                width="141"
                height="230"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const { isOpen, close } = useSidebar();

const doodleIcon = "/icons/doodle.svg"
const logoGray = "/icons/logo-gray.svg"
const riCross = "/icons/ri_cross.svg"

// Accessibility & Scroll Lock
const sidebarRef = ref<HTMLElement | null>(null);
let lastActiveElement: HTMLElement | null = null;

watch(isOpen, async (value) => {
  if (import.meta.client) {
    if (value) {
      // Lock scroll
      document.body.style.overflow = "hidden";
      lastActiveElement = document.activeElement as HTMLElement;

      await nextTick();

      // Focus trap: set focus to the first focusable element (Close button is usually best first target)
      const closeBtn = sidebarRef.value?.querySelector(
        'button[aria-label="Close menu"]',
      ) as HTMLElement;
      if (closeBtn) {
        closeBtn.focus();
      }
    } else {
      // Unlock scroll
      document.body.style.overflow = "";

      // Return focus
      if (lastActiveElement) {
        lastActiveElement.focus();
      }
    }
  }
});

// Handle keyboard events
const handleKeydown = (e: KeyboardEvent) => {
  if (!isOpen.value) return;

  if (e.key === "Escape") {
    close();
    e.preventDefault();
  }

  if (e.key === "Tab" && sidebarRef.value) {
    const focusableElements = sidebarRef.value.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }
};

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener("keydown", handleKeydown);
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener("keydown", handleKeydown);
    document.body.style.overflow = "";
  }
});
</script>
