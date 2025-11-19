<template>
  <section class="bg-[#FFFFF0] px-4 py-16 dt:px-11 dt:py-[100px]">
    <!-- Mobile Layout -->
    <div class="dt:hidden flex flex-col gap-[60px]">
      <h2 class="font-taykari text-[36px] leading-[1.1] text-[#333333]">
        What's happening
      </h2>

      <div class="flex flex-col gap-8">
        <!-- Event 1: Moonless Sky Session -->
        <div class="flex flex-col gap-4">
          <div class="h-[343px] w-full bg-[#E5E5D8] relative overflow-hidden">
            <img
              src="/assets/images/events/fabeb4efd621f7cc383eb628b37bde89dff171ac.png"
              alt="Moonless Sky Session"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-1.5">
              <img src="/assets/icons/doodle.svg" alt="" class="w-3 h-3" />
              <span
                class="font-family-sans font-bold text-[11px] uppercase tracking-normal text-[#333333]"
              >
                Session ・ 24th of July
              </span>
            </div>

            <h3
              class="font-['Ostrich_Sans'] text-[32px] font-black leading-[1.1] text-[#333333]"
            >
              Moonless Sky Session
            </h3>

            <a
              href="#"
              class="flex flex-col items-center gap-2 w-fit mt-2 group experience-link"
            >
              <span
                class="font-family-sans font-semibold text-base text-[#333333] group-hover:text-[#F26E21] transition-colors"
                >Book Event</span
              >
              <WavyLine :width="86" :height="5" class="experience-wave" />
            </a>
          </div>
        </div>

        <!-- Event 2: DJ Night by the Sea -->
        <div class="flex flex-col gap-4">
          <div class="h-[343px] w-full bg-[#E5E5D8] relative overflow-hidden">
            <img
              src="/assets/images/events/188de89e05862dfb0cb142eb8ca808a9cc841af4.jpg"
              alt="DJ Night by the Sea"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-1.5">
              <img src="/assets/icons/doodle.svg" alt="" class="w-3 h-3" />
              <span
                class="font-family-sans font-bold text-[11px] uppercase tracking-normal text-[#333333]"
              >
                Party ・ Every Friday / 8:00 pm
              </span>
            </div>

            <h3
              class="font-['Ostrich_Sans'] text-[32px] font-black leading-[1.1] text-[#333333]"
            >
              DJ Night by the Sea
            </h3>

            <a
              href="#"
              class="flex flex-col items-center gap-2 w-fit mt-2 group experience-link"
            >
              <span
                class="font-family-sans font-semibold text-base text-[#333333] group-hover:text-[#F26E21] transition-colors"
                >Book Event</span
              >
              <WavyLine :width="86" :height="5" class="experience-wave" />
            </a>
          </div>
        </div>

        <!-- Event 3: Weekly Resident DJ sets -->
        <div class="flex flex-col gap-4">
          <div class="h-[343px] w-full bg-[#E5E5D8] relative overflow-hidden">
            <img
              src="/assets/images/events/8b7f92cb053ef479a27f7ea2951e7ae6fbcc793e.png"
              alt="Weekly Resident DJ sets"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-1.5">
              <img src="/assets/icons/doodle.svg" alt="" class="w-3 h-3" />
              <span
                class="font-family-sans font-bold text-[11px] uppercase tracking-normal text-[#333333]"
              >
                Music ・ Every Sunday, 2024
              </span>
            </div>

            <h3
              class="font-['Ostrich_Sans'] text-[32px] font-black leading-[1.1] text-[#333333]"
            >
              Weekly Resident DJ sets
            </h3>

            <a
              href="#"
              class="flex flex-col items-center gap-2 w-fit mt-2 group experience-link"
            >
              <span
                class="font-family-sans font-semibold text-base text-[#333333] group-hover:text-[#F26E21] transition-colors"
                >Book Event</span
              >
              <WavyLine :width="86" :height="5" class="experience-wave" />
            </a>
          </div>
        </div>

        <!-- All Events Button -->
        <a
          href="#"
          class="relative flex items-center justify-center w-[343px] h-[56px] mx-auto group event-button-mobile"
        >
          <span
            class="font-family-sans font-semibold text-base text-[#333333] relative z-10 group-hover:text-[#F26E21] transition-colors"
            >All Events</span
          >
          <!-- CSS masks handle the SVG shapes via classes -->
        </a>
      </div>
    </div>

    <!-- Desktop Layout -->
    <div class="max-w-[1352px] mx-auto hidden dt:flex gap-8">
      <!-- Left Column (Featured Event: DJ Night) -->
      <div class="w-[49%] max-w-[660px] flex flex-col gap-4 shrink">
        <div class="h-[664px] w-full bg-[#E5E5D8] relative overflow-hidden">
          <img
            src="/assets/images/events/188de89e05862dfb0cb142eb8ca808a9cc841af4.jpg"
            alt="DJ Night by the Sea"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="flex items-end gap-3">
          <div class="flex flex-col gap-3 flex-1">
            <div class="flex items-center gap-1.5">
              <img src="/assets/icons/doodle.svg" alt="" class="w-3 h-3" />
              <span
                class="font-family-sans font-bold text-[11px] uppercase tracking-normal text-[#333333]"
              >
                Party ・ Every Friday / 8:00 pm
              </span>
            </div>
            <h3
              class="font-['Ostrich_Sans'] text-[36px] font-black leading-[1.1] text-[#333333]"
            >
              DJ Night by the Sea
            </h3>
          </div>

          <a
            href="#"
            class="flex flex-col items-center gap-2 shrink-0 mb-1 group experience-link"
          >
            <span
              class="font-family-sans font-semibold text-base text-[#333333] group-hover:text-[#F26E21] transition-colors"
              >Book Event</span
            >
            <WavyLine :width="86" :height="5" class="experience-wave" />
          </a>
        </div>
      </div>

      <!-- Middle Column (Title + Moonless Sky) -->
      <div class="flex-1 flex flex-col gap-16 shrink">
        <h2 class="font-taykari text-[48px] leading-[1.1] text-[#333333]">
          What's happening
        </h2>

        <div class="flex flex-col gap-4">
          <div class="h-[280px] w-full bg-[#E5E5D8] relative overflow-hidden">
            <img
              src="/assets/images/events/fabeb4efd621f7cc383eb628b37bde89dff171ac.png"
              alt="Moonless Sky Session"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-1.5">
              <img src="/assets/icons/doodle.svg" alt="" class="w-3 h-3" />
              <span
                class="font-family-sans font-bold text-[11px] uppercase tracking-normal text-[#333333]"
              >
                Session ・ 24th of July
              </span>
            </div>

            <h3
              class="font-['Ostrich_Sans'] text-[36px] font-black leading-[1.1] text-[#333333]"
            >
              Moonless Sky Session
            </h3>

            <a
              href="#"
              class="flex flex-col items-center gap-2 w-fit mt-2 group experience-link"
            >
              <span
                class="font-family-sans font-semibold text-base text-[#333333] group-hover:text-[#F26E21] transition-colors"
                >Book Event</span
              >
              <WavyLine :width="86" :height="5" class="experience-wave" />
            </a>
          </div>
        </div>
      </div>

      <!-- Right Column (Weekly Resident + Button) -->
      <div class="w-[23%] max-w-[314px] flex flex-col justify-between shrink">
        <div class="flex flex-col gap-4">
          <div class="h-[280px] w-full bg-[#E5E5D8] relative overflow-hidden">
            <img
              src="/assets/images/events/8b7f92cb053ef479a27f7ea2951e7ae6fbcc793e.png"
              alt="Weekly Resident DJ sets"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-1.5">
              <img src="/assets/icons/doodle.svg" alt="" class="w-3 h-3" />
              <span
                class="font-family-sans font-bold text-[11px] uppercase tracking-normal text-[#333333]"
              >
                Music ・ Every Sunday, 2024
              </span>
            </div>

            <h3
              class="font-['Ostrich_Sans'] text-[36px] font-black leading-[1.1] text-[#333333]"
            >
              Weekly Resident DJ sets
            </h3>

            <a
              href="#"
              class="flex flex-col items-center gap-2 w-fit mt-2 group experience-link"
            >
              <span
                class="font-family-sans font-semibold text-base text-[#333333] group-hover:text-[#F26E21] transition-colors"
                >Book Event</span
              >
              <WavyLine :width="86" :height="5" class="experience-wave" />
            </a>
          </div>
        </div>

        <a
          href="#"
          class="relative flex items-center justify-center w-[141px] h-[56px] group self-start event-button-desktop"
        >
          <span
            class="font-family-sans font-semibold text-base text-[#333333] relative z-10 group-hover:text-[#F26E21] transition-colors"
            >All Events</span
          >
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.event-button-mobile::before,
.event-button-mobile::after,
.event-button-desktop::before,
.event-button-desktop::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333333;
  transition: background-color 0.3s ease;
  pointer-events: none;
}

.event-button-mobile:hover::before,
.event-button-mobile:hover::after,
.event-button-desktop:hover::before,
.event-button-desktop:hover::after {
  background-color: #f26e21;
}

/* Mobile Button Masks */
.event-button-mobile::before {
  -webkit-mask: url("/assets/icons/events/button-ellipse.svg") no-repeat
    center / contain;
  mask: url("/assets/icons/events/button-ellipse.svg") no-repeat center /
    contain;
  z-index: 1;
}

.event-button-mobile::after {
  -webkit-mask: url("/assets/icons/events/button-wave-mobile.svg") no-repeat
    center / contain;
  mask: url("/assets/icons/events/button-wave-mobile.svg") no-repeat center /
    contain;
  z-index: 2;
}

/* Desktop Button Masks */
.event-button-desktop::before {
  -webkit-mask: url("/assets/icons/events/button-ellipse.svg") no-repeat
    center / contain;
  mask: url("/assets/icons/events/button-ellipse.svg") no-repeat center /
    contain;
  z-index: 1;
}

.event-button-desktop::after {
  -webkit-mask: url("/assets/icons/events/button-wave-desktop.svg") no-repeat
    center / contain;
  mask: url("/assets/icons/events/button-wave-desktop.svg") no-repeat center /
    contain;
  z-index: 2;
}
</style>
