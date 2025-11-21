<template>
  <section class="bg-[#FFFFF0] px-4 py-16 dt:px-11 dt:py-[100px]">
    <div class="max-w-[1440px] mx-auto">
      <!-- Mobile Layout -->
      <div class="dt:hidden flex flex-col gap-8">
        <h2
          class="font-taykari text-[36px] font-normal leading-[1.1] text-[#333]"
        >
          Bonny Moon
        </h2>

        <div class="flex flex-col gap-8">
          <!-- Large image -->
          <div class="w-full h-[305px] overflow-hidden bg-[#e5e5d8]">
            <NuxtImg
              src="/images/gallery/gallery-beach.webp"
              alt="Bonny Moon Beach Club view"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <!-- Description text -->
          <p
            class="font-display text-[32px] font-black leading-[1.1] text-[#333]"
          >
            Welcome to Bonny Moon, a place where you arrive as you are. We are a
            nostalgic community, where lifelong friendships are made and
            strangers unite over shared passions.
          </p>

          <!-- Button -->
          <a
            href="#"
            class="mx-auto gallery-button-mobile w-full max-w-[343px]"
            aria-label="View Gallery"
          >
            <NuxtImg
              src="/icons/gallery/button-mobile.svg"
              alt=""
              class="w-full h-auto"
              loading="lazy"
            />
          </a>
        </div>

        <!-- Image grid -->
        <div class="flex flex-col gap-4">
          <!-- Two column row -->
          <div class="flex gap-4">
            <div class="flex-1 flex flex-col gap-4">
              <div
                class="w-full h-[280px] overflow-hidden bg-[#e5e5d8] relative"
              >
                <video
                  ref="videoRefMobile"
                  :poster="galleryVideoPoster"
                  autoplay
                  muted
                  loop
                  playsinline
                  preload="auto"
                  aria-label="Bonny Moon gallery moments"
                  class="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
                >
                  <source :src="galleryVideoSource" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                <NuxtImg
                  :src="galleryVideoPoster"
                  alt="Bonny Moon gallery video poster"
                  class="absolute inset-0 w-full h-full object-cover hidden motion-reduce:block"
                  loading="lazy"
                />
              </div>
              <p
                class="font-sans text-[13px] font-light italic leading-[1.4] text-[#585858]"
              >
                Timeless souls, one joyful vibe
              </p>
            </div>
            <div class="flex-1">
              <div class="w-full h-[200px] overflow-hidden bg-[#e5e5d8]">
                <NuxtImg
                  src="/images/gallery/gallery-cup.webp"
                  alt=""
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <!-- Full width with caption -->
          <div class="flex flex-col gap-4">
            <div class="w-full h-[300px] overflow-hidden bg-[#e5e5d8]">
              <NuxtImg
                src="/images/gallery/gallery-food.webp"
                alt=""
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p
              class="font-sans text-[13px] font-light italic leading-[1.4] text-[#585858]"
            >
              Nostalgia wrapped in sunlight
            </p>
          </div>

          <!-- Last full width image -->
          <div class="w-full h-[393px] overflow-hidden bg-[#e5e5d8]">
            <NuxtImg
              src="/images/gallery/gallery-garden.webp"
              alt=""
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Desktop Layout -->
      <div class="hidden dt:flex gap-8 relative">
        <!-- Left column -->
        <div class="flex flex-col gap-8 w-[314px] shrink-0 pb-[88px]">
          <div class="flex flex-col gap-4">
            <div class="w-full h-[364px] overflow-hidden bg-[#e5e5d8]">
              <NuxtImg
                src="/images/gallery/gallery-garden.webp"
                alt="Graden"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p
              class="font-sans text-[13px] font-light italic leading-[1.4] text-[#585858] w-[141px]"
            >
              Timeless souls, one joyful vibe
            </p>
          </div>
          <div class="w-[141px] h-[141px] ml-auto overflow-hidden bg-[#e5e5d8]">
            <NuxtImg
              src="/images/gallery/gallery-beach.webp"
              alt="Beach"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Middle column -->
        <div class="flex flex-col gap-16 w-[660px]">
          <h2
            class="font-taykari text-[48px] font-normal leading-[1.1] text-[#333]"
          >
            Bonny Moon
          </h2>

          <div class="flex flex-col gap-8 items-end">
            <div class="w-full h-[280px] overflow-hidden bg-[#e5e5d8]">
              <NuxtImg
                src="/images/gallery/gallery-dog.webp"
                alt="Dog"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <p
              class="font-display text-[36px] font-black leading-[1.1] text-[#333] w-full"
            >
              Welcome to Bonny Moon, a place where you arrive as you are. We are
              a nostalgic community, where lifelong friendships are made and
              strangers unite over shared passions.
            </p>

            <a
              href="#"
              class="gallery-button-desktop w-[141px]"
              aria-label="View Gallery"
            >
              <NuxtImg
                src="/icons/gallery/button-desktop.svg"
                alt="Button"
                class="w-full h-auto"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        <div class="absolute right-0 top-[117px] w-[314px] h-[600px]">
          <div class="relative w-full h-full">
            <video
              ref="videoRefDesktop"
              :poster="galleryVideoPoster"
              autoplay
              muted
              loop
              playsinline
              preload="auto"
              aria-label="Bonny Moon gallery highlights"
              class="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
            >
              <source :src="galleryVideoSource" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <NuxtImg
              :src="galleryVideoPoster"
              alt="Bonny Moon gallery video poster"
              class="absolute inset-0 w-full h-full object-cover hidden motion-reduce:block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const galleryVideoPoster = "/images/video-poster-2.webp";
const galleryVideoSource = "/video/Sun Magic.webm";

const videoRefMobile = ref<HTMLVideoElement>();
const videoRefDesktop = ref<HTMLVideoElement>();

onMounted(() => {
  if (typeof IntersectionObserver === "undefined") {
    return;
  }

  const options = {
    threshold: 0.5,
  };

  const handleIntersection = (
    entries: IntersectionObserverEntry[],
    video: HTMLVideoElement | undefined,
  ) => {
    entries.forEach((entry) => {
      if (video) {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  };

  if (videoRefMobile.value) {
    const observerMobile = new IntersectionObserver(
      (entries) => handleIntersection(entries, videoRefMobile.value),
      options,
    );
    observerMobile.observe(videoRefMobile.value);
  }

  if (videoRefDesktop.value) {
    const observerDesktop = new IntersectionObserver(
      (entries) => handleIntersection(entries, videoRefDesktop.value),
      options,
    );
    observerDesktop.observe(videoRefDesktop.value);
  }
});
</script>
