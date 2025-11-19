<template>
  <section
    class="relative w-full h-[400px] md:h-[800px] 2xldt:h-dvh overflow-hidden"
    aria-label="Hero section with beach club video"
  >
    <video
      :poster="videoPosterWebp"
      autoplay
      muted
      loop
      fetchpriority="high"
      playsinline
      preload="auto"
      aria-label="Bonny Moon Beach Club promotional video"
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none motion-reduce:hidden"
    >
      <source :src="heroVideoWebm" type="video/webm" />
      Your browser does not support the video tag.
    </video>

    <!-- Static fallback for reduced motion preference -->
    <NuxtImg
      src="/images/video-poster.webp"
      alt="Bonny Moon Beach Club"
      class="absolute inset-0 w-full h-full object-cover hidden motion-reduce:block -z-10"
      fetchpriority="high"
      loading="eager"
    />

    <div class="absolute top-0 left-0 right-0 z-10">
      <Header />
    </div>
  </section>
</template>

<script setup lang="ts">
const videoPosterWebp = "/images/video-poster.webp";
const heroVideoWebm = "/video/Bonny Moon Website Banner (1080p).webm";
</script>
