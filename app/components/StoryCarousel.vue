<template>
  <section
    class="bg-[ivory] px-4 py-16 dt:px-11 dt:py-[100px]"
    aria-labelledby="story-carousel-heading"
  >
    <div
      class="flex flex-col gap-[60px] max-w-[2546px] mx-auto dt:gap-20 min-[2561px]:flex-row min-[2561px]:items-start min-[2561px]:gap-32"
    >
      <!-- Heading -->
      <div
        class="w-full dt:max-w-[1008px] min-[2561px]:w-[900px] min-[2561px]:shrink-0"
      >
        <p
          id="story-carousel-heading"
          class="font-['Ostrich_Sans',sans-serif] font-black text-[32px] dt:text-[36px] leading-[1.1] text-[#333333]"
        >
          Bonny Moon serves as a symbol of togetherness, where each gathering is
          enriched with the spirit of openness, friendship and adventure. Our
          mission is simple: to craft unforgettable moments through collective
          rituals in good music, great food, and playful drinks.
        </p>
      </div>

      <!-- Content -->
      <div
        class="flex flex-col gap-8 ldt:flex-row ldt:items-start ldt:justify-between min-[2561px]:flex-1"
      >
        <!-- Images Section - Mobile -->
        <div class="flex flex-col gap-8 ldt:hidden">
          <!-- Single image with caption -->
          <div class="flex flex-col gap-4">
            <div class="h-[343px] w-full overflow-hidden bg-[#dbcab3] relative">
              <transition name="fade-fast" mode="out-in">
                <img
                  :key="currentImages[1]"
                  :src="currentImages[1]"
                  alt="Body art spelling Bonny on sun-kissed skin"
                  class="w-full h-full object-cover absolute inset-0"
                />
              </transition>
            </div>
            <p
              class="font-['Bai_Jamjuree',sans-serif] text-[15px] leading-[1.5] text-[#585858]"
            >
              There's an undeniable gravitational pull to Bonny Moon, attracting
              people of all ages and backgrounds. Our destinies are linked.
            </p>
          </div>

          <!-- Two images side by side -->
          <div class="flex gap-4">
            <div class="flex-1 h-[260px] overflow-hidden bg-[#dbcab3] relative">
              <transition name="fade-fast" mode="out-in">
                <img
                  :key="currentImages[0]"
                  :src="currentImages[0]"
                  alt="Clay cup with refreshing drink"
                  class="w-full h-full object-cover absolute inset-0"
                />
              </transition>
            </div>
            <div class="flex-1 h-[200px] overflow-hidden bg-[#dbcab3] relative">
              <transition name="fade-fast" mode="out-in">
                <img
                  :key="currentImages[2]"
                  :src="currentImages[2]"
                  alt="Hanging shells decoration"
                  class="w-full h-full object-cover absolute inset-0"
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
              <img
                :key="currentImages[0]"
                :src="currentImages[0]"
                alt="Clay cup with refreshing drink"
                class="w-full h-full object-cover absolute inset-0"
              />
            </transition>
          </div>

          <!-- Image 2 with caption -->
          <div class="flex flex-col gap-4 shrink-0">
            <div
              class="w-[314px] h-[320px] overflow-hidden bg-[#dbcab3] relative"
            >
              <transition name="fade-fast" mode="out-in">
                <img
                  :key="currentImages[1]"
                  :src="currentImages[1]"
                  alt="Body art spelling Bonny on sun-kissed skin"
                  class="w-full h-full object-cover absolute inset-0"
                />
              </transition>
            </div>
            <p
              class="font-['Bai_Jamjuree',sans-serif] text-[16px] leading-[1.5] text-[#585858] w-[314px]"
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
              <img
                :key="currentImages[2]"
                :src="currentImages[2]"
                alt="Hanging shells decoration"
                class="w-full h-full object-cover absolute inset-0"
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
              class="font-['TayKari',sans-serif] text-[36px] dt:text-[48px] 2xl:text-[64px] dt:h-[52px] 2xl:h-auto leading-[1.1] text-[#333333]"
            >
              About Us
            </p>
            <div
              class="flex flex-col gap-4 font-['Bai_Jamjuree',sans-serif] text-[15px] dt:text-[16px] 2xl:text-[24px] leading-normal text-[#585858]"
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
              class="carousel-arrow carousel-arrow-prev w-8 h-8 cursor-pointer transition-colors duration-300"
              aria-label="Previous"
            />
            <button
              type="button"
              @click="handleNext"
              class="carousel-arrow carousel-arrow-next w-8 h-8 cursor-pointer transition-colors duration-300"
              aria-label="Next"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import carouselImage1 from "~/assets/images/carousel/18ef24887b705493abe8147b7b2e48c99e905fd3.jpg";
import carouselImage2 from "~/assets/images/carousel/d09c4192ed2e121d57d95022a3bb65e76953410a.png";
import carouselImage3 from "~/assets/images/carousel/daafbd7146264d75eb81a99d59c6745d94807f23.jpg";

const images = [carouselImage1, carouselImage2, carouselImage3];
const currentImages = ref([...images]);

let autoplayInterval: ReturnType<typeof setInterval> | null = null;

const handleNext = () => {
  const lastImage = currentImages.value.pop();
  if (lastImage) {
    currentImages.value.unshift(lastImage);
  }
  resetAutoplay();
};

const handlePrevious = () => {
  const firstImage = currentImages.value.shift();
  if (firstImage) {
    currentImages.value.push(firstImage);
  }
  resetAutoplay();
};

const resetAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
  autoplayInterval = setInterval(handleNext, 5000);
};

onMounted(() => {
  autoplayInterval = setInterval(handleNext, 5000);
});

onBeforeUnmount(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
});
</script>
