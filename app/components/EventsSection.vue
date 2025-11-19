<template>
  <section
    class="bg-[#FFFFF0] px-4 py-16 dt:px-11 dt:py-[100px]"
    aria-label="Upcoming events at Bonny Moon"
  >
    <!-- Mobile Layout -->
    <div class="dt:hidden flex flex-col gap-[60px]">
      <h2 class="font-taykari text-[36px] leading-[1.1] text-[#333333]">
        What's happening
      </h2>

      <div class="flex flex-col gap-8">
        <!-- DJ Event -->
        <article
          class="flex flex-col gap-4"
          aria-labelledby="dj-event-mobile-title"
        >
          <div class="h-[343px] w-full bg-[#E5E5D8] relative overflow-hidden">
            <NuxtImg
              :src="djEvent.image"
              :alt="djEvent.imageAlt"
              :loading="djEvent.loading"
              :width="djEvent.width"
              :height="djEvent.height"
              :quality="djEvent.quality ?? 85"
              fetchpriority="high"
              densities="x1 x2"
              class="w-full h-full object-cover"
              decoding="async"
            />
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-1.5">
              <NuxtImg
                src="/icons/doodle.svg"
                alt=""
                aria-hidden="true"
                width="12"
                height="12"
                class="w-3 h-3"
              />
              <span
                class="font-family-sans font-bold text-[11px] uppercase tracking-normal text-[#333333]"
              >
                {{ djEvent.label }}
              </span>
            </div>

            <h3
              id="dj-event-mobile-title"
              class="font-['Ostrich_Sans'] text-[32px] font-black leading-[1.1] text-[#333333]"
            >
              {{ djEvent.title }}
            </h3>

            <LinkWithLine
              text="Book Event"
              href="#"
              :wavyWidth="86"
              :wavyHeight="5"
              class="w-fit mt-2"
              :aria-label="`Book ${djEvent.title}`"
            />
          </div>
        </article>

        <!-- Moonless Event -->
        <article
          class="flex flex-col gap-4"
          aria-labelledby="moonless-event-mobile-title"
        >
          <div class="h-[343px] w-full bg-[#E5E5D8] relative overflow-hidden">
            <NuxtImg
              :src="moonlessEvent.image"
              :alt="moonlessEvent.imageAlt"
              :loading="moonlessEvent.loading"
              :width="moonlessEvent.width"
              :height="moonlessEvent.height"
              :quality="moonlessEvent.quality ?? 85"
              densities="x1 x2"
              class="w-full h-full object-cover"
              decoding="async"
            />
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-1.5">
              <NuxtImg
                src="/icons/doodle.svg"
                alt=""
                aria-hidden="true"
                width="12"
                height="12"
                class="w-3 h-3"
              />
              <span
                class="font-family-sans font-bold text-[11px] uppercase tracking-normal text-[#333333]"
              >
                {{ moonlessEvent.label }}
              </span>
            </div>

            <h3
              id="moonless-event-mobile-title"
              class="font-['Ostrich_Sans'] text-[32px] font-black leading-[1.1] text-[#333333]"
            >
              {{ moonlessEvent.title }}
            </h3>

            <LinkWithLine
              text="Book Event"
              href="#"
              :wavyWidth="86"
              :wavyHeight="5"
              class="w-fit mt-2"
              :aria-label="`Book ${moonlessEvent.title}`"
            />
          </div>
        </article>

        <!-- Chess Event -->
        <article
          class="flex flex-col gap-4"
          aria-labelledby="chess-event-mobile-title"
        >
          <div class="h-[343px] w-full bg-[#E5E5D8] relative overflow-hidden">
            <NuxtImg
              :src="chessEvent.image"
              :alt="chessEvent.imageAlt"
              :loading="chessEvent.loading"
              :width="chessEvent.width"
              :height="chessEvent.height"
              :quality="chessEvent.quality ?? 85"
              densities="x1 x2"
              class="w-full h-full object-cover"
              decoding="async"
            />
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-1.5">
              <NuxtImg
                src="/icons/doodle.svg"
                alt=""
                aria-hidden="true"
                width="12"
                height="12"
                class="w-3 h-3"
              />
              <span
                class="font-family-sans font-bold text-[11px] uppercase tracking-normal text-[#333333]"
              >
                {{ chessEvent.label }}
              </span>
            </div>

            <h3
              id="chess-event-mobile-title"
              class="font-['Ostrich_Sans'] text-[32px] font-black leading-[1.1] text-[#333333]"
            >
              {{ chessEvent.title }}
            </h3>

            <LinkWithLine
              text="Book Event"
              href="#"
              :wavyWidth="86"
              :wavyHeight="5"
              class="w-fit mt-2"
              :aria-label="`Book ${chessEvent.title}`"
            />
          </div>
        </article>

        <!-- All Events Button -->
        <a
          :href="cta.href"
          class="relative flex items-center justify-center w-[343px] h-[56px] mx-auto group event-button-mobile"
          :aria-label="cta.ariaLabel"
        >
          <span
            class="font-family-sans font-semibold text-base text-[#333333] relative z-10 group-hover:text-[#F26E21] transition-colors"
            >{{ cta.label }}</span
          >
          <!-- CSS masks handle the SVG shapes via classes -->
        </a>
      </div>
    </div>

    <!-- Desktop Layout -->
    <div class="max-w-[1352px] mx-auto hidden dt:flex gap-8">
      <!-- Left Column (Featured Event: DJ Night) -->
      <div
        class="w-[49%] max-w-[660px] flex flex-col gap-4 shrink"
        aria-labelledby="featured-event-title"
      >
        <div class="h-[664px] w-full bg-[#E5E5D8] relative overflow-hidden">
          <NuxtImg
            :src="featuredEvent.image"
            :alt="featuredEvent.imageAlt"
            :loading="featuredEvent.loading"
            :width="featuredEvent.width"
            :height="featuredEvent.height"
            :quality="featuredEvent.quality ?? 85"
            fetchpriority="high"
            densities="x1 x2"
            class="w-full h-full object-cover"
            decoding="async"
          />
        </div>

        <div class="flex items-end gap-3">
          <div class="flex flex-col gap-3 flex-1">
            <div class="flex items-center gap-1.5">
              <NuxtImg
                src="/icons/doodle.svg"
                alt=""
                aria-hidden="true"
                width="12"
                height="12"
                class="w-3 h-3"
              />
              <span
                class="font-family-sans font-bold text-[11px] uppercase tracking-normal text-[#333333]"
              >
                {{ featuredEvent.label }}
              </span>
            </div>
            <h3
              id="featured-event-title"
              class="font-['Ostrich_Sans'] text-[36px] font-black leading-[1.1] text-[#333333]"
            >
              {{ featuredEvent.title }}
            </h3>
          </div>

          <LinkWithLine
            text="Book Event"
            href="#"
            :wavyWidth="86"
            :wavyHeight="5"
            class="shrink-0 mb-1"
            :aria-label="`Book ${featuredEvent.title}`"
          />
        </div>
      </div>

      <!-- Middle Column (Title + Moonless Sky) -->
      <div class="flex-1 flex flex-col gap-16 shrink">
        <h2 class="font-taykari text-[48px] leading-[1.1] text-[#333333]">
          What's happening
        </h2>

        <article
          v-if="moonlessEvent"
          class="flex flex-col gap-4"
          aria-labelledby="moonless-event-title"
        >
          <div class="h-[280px] w-full bg-[#E5E5D8] relative overflow-hidden">
            <NuxtImg
              :src="moonlessEvent.image"
              :alt="moonlessEvent.imageAlt"
              :loading="moonlessEvent.loading"
              :width="moonlessEvent.width"
              :height="moonlessEvent.height"
              :quality="moonlessEvent.quality ?? 85"
              densities="x1 x2"
              class="w-full h-full object-cover"
              decoding="async"
            />
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-1.5">
              <NuxtImg
                src="/icons/doodle.svg"
                alt=""
                aria-hidden="true"
                width="12"
                height="12"
                class="w-3 h-3"
              />
              <span
                class="font-family-sans font-bold text-[11px] uppercase tracking-normal text-[#333333]"
              >
                {{ moonlessEvent.label }}
              </span>
            </div>

            <h3
              id="moonless-event-title"
              class="font-['Ostrich_Sans'] text-[36px] font-black leading-[1.1] text-[#333333]"
            >
              {{ moonlessEvent.title }}
            </h3>

            <LinkWithLine
              text="Book Event"
              href="#"
              :wavyWidth="86"
              :wavyHeight="5"
              class="w-fit mt-2"
              :aria-label="`Book ${moonlessEvent.title}`"
            />
          </div>
        </article>
      </div>

      <!-- Right Column (Chess Event + Button) -->
      <div class="w-[23%] max-w-[314px] flex flex-col justify-between shrink">
        <article
          v-if="chessEvent"
          class="flex flex-col gap-4"
          aria-labelledby="chess-event-title"
        >
          <div class="h-[450px] w-full bg-[#E5E5D8] relative overflow-hidden">
            <NuxtImg
              :src="chessEvent.image"
              :alt="chessEvent.imageAlt"
              :loading="chessEvent.loading"
              :width="chessEvent.width"
              :height="chessEvent.height"
              :quality="chessEvent.quality ?? 85"
              densities="x1 x2"
              class="w-full h-full object-cover"
              decoding="async"
            />
          </div>

          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-1.5">
              <NuxtImg
                src="/icons/doodle.svg"
                alt=""
                aria-hidden="true"
                width="12"
                height="12"
                class="w-3 h-3"
              />
              <span
                class="font-family-sans font-bold text-[11px] uppercase tracking-normal text-[#333333]"
              >
                {{ chessEvent.label }}
              </span>
            </div>

            <h3
              id="chess-event-title"
              class="font-['Ostrich_Sans'] text-[36px] font-black leading-[1.1] text-[#333333]"
            >
              {{ chessEvent.title }}
            </h3>

            <LinkWithLine
              text="Book Event"
              href="#"
              :wavyWidth="86"
              :wavyHeight="5"
              class="w-fit mt-2"
              :aria-label="`Book ${chessEvent.title}`"
            />
          </div>
        </article>

        <a
          :href="cta.href"
          class="relative flex items-center justify-center w-[141px] h-[56px] group self-start event-button-desktop"
          :aria-label="cta.ariaLabel"
        >
          <span
            class="font-family-sans font-semibold text-base text-[#333333] relative z-10 group-hover:text-[#F26E21] transition-colors"
            >{{ cta.label }}</span
          >
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type LoadingStrategy = "eager" | "lazy";

type EventCard = {
  id: string;
  title: string;
  label: string;
  image: string;
  imageAlt: string;
  loading: LoadingStrategy;
  width: number;
  height: number;
  quality?: number;
};

const djEvent: EventCard = {
  id: "dj-night",
  title: "DJ Night by the Sea",
  label: "Party ・ Every Friday / 8:00 pm",
  image: "/images/events/events-dj.webp",
  imageAlt: "DJ performing an energetic sunset set beside the sea",
  loading: "eager",
  width: 1320,
  height: 1328,
  quality: 90,
};

const moonlessEvent: EventCard = {
  id: "moonless-sky",
  title: "Moonless Sky Session",
  label: "Session ・ 24th of July",
  image: "/images/events/events-moonless.webp",
  imageAlt: "Guests enjoying the Moonless Sky Session indoors at Bonny Moon",
  loading: "lazy",
  width: 1040,
  height: 560,
  quality: 88,
};

const chessEvent: EventCard = {
  id: "chess-social",
  title: "Sunset Chess Social",
  label: "Social ・ Sundays / 5:00 pm",
  image: "/images/events/events-chess.webp",
  imageAlt: "Chess pieces arranged on a board beside refreshments",
  loading: "lazy",
  width: 628,
  height: 560,
  quality: 88,
};

const featuredEvent = djEvent;

const cta = {
  href: "#",
  label: "All Events",
  ariaLabel: "View the full list of Bonny Moon events",
};
</script>

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
