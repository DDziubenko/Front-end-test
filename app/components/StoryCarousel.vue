<template>
  <section
    class="bg-[ivory] px-4 py-16 dt:px-11 dt:py-[100px]"
    aria-labelledby="story-carousel-heading"
  >
    <div
      class="flex flex-col gap-[60px] max-w-[2546px] mx-auto dt:gap-20 3xldt:flex-row 3xldt:items-start 3xldt:gap-32"
      @mouseenter="pauseAutoplay"
      @mouseleave="resumeAutoplay"
      @focusin="pauseAutoplay"
      @focusout="resumeAutoplay"
    >
      <!-- Heading -->
      <div class="w-full dt:max-w-[1008px] 3xldt:w-[900px] 3xldt:shrink-0">
        <p
          id="story-carousel-heading"
          class="font-display font-black text-[32px] dt:text-[36px] leading-[1.1] text-[#333333]"
        >
          Bonny Moon serves as a symbol of togetherness, where each gathering is
          enriched with the spirit of openness, friendship and adventure. Our
          mission is simple: to craft unforgettable moments through collective
          rituals in good music, great food, and playful drinks.
        </p>
      </div>

      <!-- Content -->
      <div
        class="flex flex-col gap-8 ldt:flex-row ldt:items-start ldt:justify-between 3xldt:flex-1"
      >
        <!-- Images Section - Mobile -->
        <div class="flex flex-col gap-8 ldt:hidden">
          <!-- Single image with caption -->
          <div class="flex flex-col gap-4">
            <div class="h-[343px] w-full overflow-hidden bg-[#dbcab3] relative">
              <transition name="fade-fast" mode="out-in">
                <NuxtImg
                  v-if="carouselItems[1]"
                  :key="carouselItems[1]?.id"
                  :src="carouselItems[1]?.src"
                  :alt="carouselItems[1]?.alt"
                  class="w-full h-full object-cover absolute inset-0"
                  format="webp"
                  loading="lazy"
                />
              </transition>
            </div>
            <p class="font-sans text-[15px] leading-normal text-[#585858]">
              There's an undeniable gravitational pull to Bonny Moon, attracting
              people of all ages and backgrounds. Our destinies are linked.
            </p>
          </div>

          <!-- Two images side by side -->
          <div class="flex gap-4">
            <div class="flex-1 h-[260px] overflow-hidden bg-[#dbcab3] relative">
              <transition name="fade-fast" mode="out-in">
                <NuxtImg
                  v-if="carouselItems[0]"
                  :key="carouselItems[0]?.id"
                  :src="carouselItems[0]?.src"
                  :alt="carouselItems[0]?.alt"
                  class="w-full h-full object-cover absolute inset-0"
                  format="webp"
                  loading="lazy"
                />
              </transition>
            </div>
            <div class="flex-1 h-[200px] overflow-hidden bg-[#dbcab3] relative">
              <transition name="fade-fast" mode="out-in">
                <NuxtImg
                  v-if="carouselItems[2]"
                  :key="carouselItems[2]?.id"
                  :src="carouselItems[2]?.src"
                  :alt="carouselItems[2]?.alt"
                  class="w-full h-full object-cover absolute inset-0"
                  format="webp"
                  loading="lazy"
                />
              </transition>
            </div>
          </div>
        </div>

        <!-- Images Section - Desktop -->
        <div class="hidden ldt:flex ldt:gap-8">
          <!-- Image 1 -->
          <div
            class="w-[314px] h-[520px] overflow-hidden bg-[#dbcab3] shrink-0 relative"
          >
            <transition name="fade-fast" mode="out-in">
              <NuxtImg
                v-if="carouselItems[0]"
                :key="carouselItems[0]?.id"
                :src="carouselItems[0]?.src"
                :alt="carouselItems[0]?.alt"
                class="w-full h-full object-cover absolute inset-0"
                format="webp"
                loading="lazy"
              />
            </transition>
          </div>

          <!-- Image 2 with caption -->
          <div class="flex flex-col gap-4 shrink-0">
            <div
              class="w-[314px] h-[320px] overflow-hidden bg-[#dbcab3] relative"
            >
              <transition name="fade-fast" mode="out-in">
                <NuxtImg
                  v-if="carouselItems[1]"
                  :key="carouselItems[1]?.id"
                  :src="carouselItems[1]?.src"
                  :alt="carouselItems[1]?.alt"
                  class="w-full h-full object-cover absolute inset-0"
                  format="webp"
                  loading="lazy"
                />
              </transition>
            </div>
            <p
              class="font-sans text-[16px] leading-normal text-[#585858] w-[314px]"
            >
              There's an undeniable gravitational pull to Bonny Moon, attracting
              people of all ages and backgrounds. Our destinies are linked.
            </p>
          </div>

          <!-- Image 3 -->
          <div
            class="w-[314px] h-[440px] overflow-hidden bg-[#dbcab3] shrink-0 relative"
          >
            <transition name="fade-fast" mode="out-in">
              <NuxtImg
                v-if="carouselItems[2]"
                :key="carouselItems[2]?.id"
                :src="carouselItems[2]?.src"
                :alt="carouselItems[2]?.alt"
                class="w-full h-full object-cover absolute inset-0"
                format="webp"
                loading="lazy"
              />
            </transition>
          </div>
        </div>

        <!-- About Section -->
        <div
          class="flex flex-col gap-8 ldt:w-[314px] 2xl:w-[500px] ldt:shrink-0 ldt:justify-between ldt:self-stretch"
        >
          <!-- About content -->
          <div
            class="flex flex-col gap-8 border-t border-[#d1c1aa] pt-8 ldt:pt-0 ldt:border-0"
          >
            <p
              class="font-taykari text-[36px] dt:text-[48px] 2xl:text-[64px] dt:h-[52px] 2xl:h-auto leading-[1.1] text-[#333333]"
            >
              About Us
            </p>
            <div
              class="flex flex-col gap-4 font-sans text-[15px] dt:text-[16px] 2xl:text-[24px] leading-normal text-[#585858]"
            >
              <p>
                Bonny Moon is where creativity flourishes, fueled by each of us
                as members of our nostalgic community, uniting in profound
                connections and openness of spirit.
              </p>
              <p>
                Lifelong friendships are formed, and strangers unite over shared
                passions. You arrive as you are, embracing familiar faces while
                staying open to new connections.
              </p>
            </div>
          </div>

          <!-- Navigation arrows -->
          <div class="flex gap-6 justify-end items-center">
            <button
              type="button"
              @click="handlePrevious"
              class="carousel-arrow carousel-arrow-prev w-8 h-8 cursor-pointer transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26E21] rounded-full"
              aria-label="Previous slide"
            />
            <button
              type="button"
              @click="handleNext"
              class="carousel-arrow carousel-arrow-next w-8 h-8 cursor-pointer transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26E21] rounded-full"
              aria-label="Next slide"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

// Data Structure with accessible descriptions
const items = [
  {
    id: 1,
    src: "/images/carousel/gallery-lotion.webp",
    alt: "Sun-kissed skin with body art application",
  },
  {
    id: 2,
    src: "/images/carousel/gallery-drink.webp",
    alt: "Refreshing drink served in a traditional clay cup",
  },
  {
    id: 3,
    src: "/images/carousel/gallery-shells.webp",
    alt: "Decorative hanging shells swaying in the breeze",
  },
];

const carouselItems = ref([...items]);
let autoplayInterval: ReturnType<typeof setInterval> | null = null;
const isPaused = ref(false);

const handleNext = () => {
  const lastImage = carouselItems.value.pop();
  if (lastImage) {
    carouselItems.value.unshift(lastImage);
  }
  if (!isPaused.value) resetAutoplay();
};

const handlePrevious = () => {
  const firstImage = carouselItems.value.shift();
  if (firstImage) {
    carouselItems.value.push(firstImage);
  }
  if (!isPaused.value) resetAutoplay();
};

const pauseAutoplay = () => {
  isPaused.value = true;
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
};

const resumeAutoplay = () => {
  isPaused.value = false;
  resetAutoplay();
};

const resetAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
  autoplayInterval = setInterval(handleNext, 5000);
};

onMounted(() => {
  resetAutoplay();
});

onBeforeUnmount(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
});
</script>
