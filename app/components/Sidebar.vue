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
            <img :src="logoBlack" alt="Logo" class="w-full h-full block" />
          </div>
          <button
            @click="close"
            class="bg-transparent border-0 p-0 cursor-pointer w-8 h-8 flex items-center justify-center"
            aria-label="Close menu"
          >
            <img :src="riCross" alt="Close" class="w-full h-full block" />
          </button>
        </div>

        <!-- Content -->
        <div
          class="flex flex-col xl:flex-row items-start xl:justify-between px-4 lg:px-[44px] pb-16 overflow-x-hidden"
        >
          <!-- Navigation -->
          <div
            class="flex flex-col gap-8 items-start w-full lg:w-[314px] shrink-0"
          >
            <!-- Headline -->
            <div class="flex gap-1.5 items-center w-full">
              <div class="w-[14px] h-3 shrink-0 relative">
                <img
                  :src="doodleIcon"
                  alt="Doodle"
                  class="w-full h-full block"
                />
              </div>
              <p
                class="font-sans font-bold leading-[1.4] text-[11px] text-black uppercase whitespace-nowrap"
              >
                Select a space:
              </p>
            </div>

            <!-- Menu Items -->
            <div class="flex flex-col gap-8 items-start w-full">
              <!-- Beach Experience -->
              <a
                href="#"
                class="flex flex-col items-start text-black w-full transition-colors duration-300 hover:text-[#F26E21] focus:text-[#F26E21] focus:outline-none focus-visible:text-[#F26E21] focus-visible:outline-none"
                aria-label="Book Beach Experience - Reserve beach day bed or lounge chair"
              >
                <h2
                  class="font-display font-black leading-[1.1] text-[36px] mb-0"
                >
                  Beach Experience
                </h2>
                <p
                  class="font-sans font-normal leading-normal text-base w-full"
                >
                  Reserve a beach day bed or lounge chair.
                </p>
              </a>

              <!-- Restaurant reservation -->
              <a
                href="#"
                class="flex flex-col items-start text-black w-full transition-colors duration-300 hover:text-[#F26E21] focus:text-[#F26E21] focus:outline-none focus-visible:text-[#F26E21] focus-visible:outline-none"
                aria-label="Book Restaurant Reservation - Reserve table for dining on deck or beach"
              >
                <h2
                  class="font-display font-black leading-[1.1] text-[36px] mb-0"
                >
                  Restaurant reservation
                </h2>
                <p
                  class="font-sans font-normal leading-normal text-base w-full"
                >
                  Book a table for dining, whether on our deck area, or right on
                  the beach.
                </p>
              </a>

              <!-- Private Event -->
              <a
                href="#"
                class="flex flex-col items-start text-black w-full transition-colors duration-300 hover:text-[#F26E21] focus:text-[#F26E21] focus:outline-none focus-visible:text-[#F26E21] focus-visible:outline-none"
                aria-label="Book Private Event - Contact us for special event planning"
              >
                <h2
                  class="font-display font-black leading-[1.1] text-[36px] mb-0"
                >
                  Private Event
                </h2>
                <p
                  class="font-sans font-normal leading-normal text-base w-full"
                >
                  Planning a special event? Contact us for more information.
                </p>
              </a>
            </div>
          </div>

          <!-- Image group - below links on screens less than 1100px (xl breakpoint), wrappable -->
          <div
            class="flex flex-wrap gap-8 items-end relative shrink-0 w-full xl:w-auto mt-8 xl:mt-0 max-w-full"
          >
            <!-- Image 1 -->
            <div class="h-[208px] w-[402px] relative shrink-0 block">
              <NuxtImg
                src="/images/sidebar/sidebar-beach.webp"
                sizes="402px"
                alt="Beach Experience - Beach day beds and lounge chairs at Bonny Moon Beach Club"
                class="h-[208px] w-[402px] object-cover"
                loading="lazy"
                width="402"
                height="208"
              />
            </div>
            <!-- Image 2 -->
            <div class="h-[303px] w-[314px] relative shrink-0 block">
              <NuxtImg
                src="/images/sidebar/sidebar-cup.webp"
                sizes="314px"
                alt="Restaurant Reservation - Beachfront dining at Bonny Moon Beach Club"
                class="h-[303px] w-[314px] object-cover"
                loading="lazy"
                width="314"
                height="303"
              />
            </div>
            <!-- Image 3 -->
            <div class="h-[173px] w-[141px] relative shrink-0 block">
              <NuxtImg
                src="/images/sidebar/sidebar-flag.webp"
                sizes="141px"
                alt="Private Event - Special event planning at Bonny Moon Beach Club"
                class="h-[173px] w-[141px] object-cover"
                loading="lazy"
                width="141"
                height="173"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import doodleIcon from "~/assets/icons/doodle.svg";
import logoBlack from "~/assets/icons/logo-black.svg";
import riCross from "~/assets/icons/ri_cross.svg";

const { isOpen, close } = useSidebar();

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
