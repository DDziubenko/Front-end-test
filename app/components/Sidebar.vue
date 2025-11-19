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
    <aside
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
                class="font-['Bai_Jamjuree',sans-serif] font-bold leading-[1.4] text-[11px] text-black uppercase whitespace-nowrap"
              >
                Select a space:
              </p>
            </div>

            <!-- Menu Items -->
            <div class="flex flex-col gap-8 items-start w-full">
              <!-- Beach Experience -->
              <a
                href="#beach-experience"
                class="flex flex-col items-start text-black w-full transition-colors duration-300 hover:text-[#F26E21] focus:text-[#F26E21] focus:outline-none focus-visible:text-[#F26E21] focus-visible:outline-none"
                aria-label="Book Beach Experience - Reserve beach day bed or lounge chair"
              >
                <h2
                  class="font-['Ostrich_Sans',sans-serif] font-black leading-[1.1] text-[36px] mb-0"
                >
                  Beach Experience
                </h2>
                <p
                  class="font-['Bai_Jamjuree',sans-serif] font-normal leading-[1.5] text-base w-full"
                >
                  Reserve a beach day bed or lounge chair.
                </p>
              </a>

              <!-- Restaurant reservation -->
              <a
                href="#restaurant-reservation"
                class="flex flex-col items-start text-black w-full transition-colors duration-300 hover:text-[#F26E21] focus:text-[#F26E21] focus:outline-none focus-visible:text-[#F26E21] focus-visible:outline-none"
                aria-label="Book Restaurant Reservation - Reserve table for dining on deck or beach"
              >
                <h2
                  class="font-['Ostrich_Sans',sans-serif] font-black leading-[1.1] text-[36px] mb-0"
                >
                  Restaurant reservation
                </h2>
                <p
                  class="font-['Bai_Jamjuree',sans-serif] font-normal leading-[1.5] text-base w-full"
                >
                  Book a table for dining, whether on our deck area, or right on
                  the beach.
                </p>
              </a>

              <!-- Private Event -->
              <a
                href="#private-event"
                class="flex flex-col items-start text-black w-full transition-colors duration-300 hover:text-[#F26E21] focus:text-[#F26E21] focus:outline-none focus-visible:text-[#F26E21] focus-visible:outline-none"
                aria-label="Book Private Event - Contact us for special event planning"
              >
                <h2
                  class="font-['Ostrich_Sans',sans-serif] font-black leading-[1.1] text-[36px] mb-0"
                >
                  Private Event
                </h2>
                <p
                  class="font-['Bai_Jamjuree',sans-serif] font-normal leading-[1.5] text-base w-full"
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
            <picture class="h-[208px] w-[402px] relative shrink-0 block">
              <source
                :srcset="`${sidebar1_402w} 402w, ${sidebar1_603w} 603w, ${sidebar1_804w} 804w`"
                sizes="(max-width: 402px) 402px, (max-width: 603px) 603px, 402px"
                type="image/webp"
              />
              <img
                :src="sidebar1_804w_jpg"
                :srcset="`${sidebar1_804w_jpg} 804w`"
                alt="Beach Experience - Beach day beds and lounge chairs at Bonny Moon Beach Club"
                class="h-[208px] w-[402px] object-cover"
                loading="lazy"
                width="402"
                height="208"
              />
            </picture>
            <!-- Image 2 -->
            <picture class="h-[303px] w-[314px] relative shrink-0 block">
              <source
                :srcset="`${sidebar2_314w} 314w, ${sidebar2_471w} 471w, ${sidebar2_628w} 628w`"
                sizes="(max-width: 314px) 314px, (max-width: 471px) 471px, 314px"
                type="image/webp"
              />
              <img
                :src="sidebar2_628w_jpg"
                :srcset="`${sidebar2_628w_jpg} 628w`"
                alt="Restaurant Reservation - Beachfront dining at Bonny Moon Beach Club"
                class="h-[303px] w-[314px] object-cover"
                loading="lazy"
                width="314"
                height="303"
              />
            </picture>
            <!-- Image 3 -->
            <picture class="h-[173px] w-[141px] relative shrink-0 block">
              <source
                :srcset="`${sidebar3_141w} 141w, ${sidebar3_212w} 212w, ${sidebar3_282w} 282w`"
                sizes="(max-width: 141px) 141px, (max-width: 212px) 212px, 141px"
                type="image/webp"
              />
              <img
                :src="sidebar3_282w_jpg"
                :srcset="`${sidebar3_282w_jpg} 282w`"
                alt="Private Event - Special event planning at Bonny Moon Beach Club"
                class="h-[173px] w-[141px] object-cover"
                loading="lazy"
                width="141"
                height="173"
              />
            </picture>
          </div>
        </div>
      </div>
    </aside>
  </Teleport>
</template>

<script setup lang="ts">
import doodleIcon from "~/assets/icons/doodle.svg";
import logoBlack from "~/assets/icons/logo-black.svg";
import riCross from "~/assets/icons/ri_cross.svg";
import sidebar1_402w from "~/assets/images/sidebar/sidebar-1-402w.webp";
import sidebar1_603w from "~/assets/images/sidebar/sidebar-1-603w.webp";
import sidebar1_804w_jpg from "~/assets/images/sidebar/sidebar-1-804w.jpg";
import sidebar1_804w from "~/assets/images/sidebar/sidebar-1-804w.webp";
import sidebar2_314w from "~/assets/images/sidebar/sidebar-2-314w.webp";
import sidebar2_471w from "~/assets/images/sidebar/sidebar-2-471w.webp";
import sidebar2_628w_jpg from "~/assets/images/sidebar/sidebar-2-628w.jpg";
import sidebar2_628w from "~/assets/images/sidebar/sidebar-2-628w.webp";
import sidebar3_141w from "~/assets/images/sidebar/sidebar-3-141w.webp";
import sidebar3_212w from "~/assets/images/sidebar/sidebar-3-212w.webp";
import sidebar3_282w_jpg from "~/assets/images/sidebar/sidebar-3-282w.jpg";
import sidebar3_282w from "~/assets/images/sidebar/sidebar-3-282w.webp";

const { isOpen, close } = useSidebar();
</script>
