<template>
  <section
    class="relative w-full h-[800px] min-[1981px]:h-dvh overflow-hidden"
    aria-label="Hero section with beach club video"
  >
    <video
      :poster="videoPosterWebp"
      autoplay
      muted
      loop
      playsinline
      aria-label="Bonny Moon Beach Club promotional video"
      class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
    >
      <source :src="heroVideoWebm" type="video/webm" />
      <source :src="heroVideoMp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="absolute top-0 left-0 right-0 z-10">
      <Header />
    </div>
  </section>
</template>

<script setup lang="ts">
import videoPosterWebp from "~/assets/images/video-poster.webp";
import heroVideoMp4 from "~/assets/video/Bonny Moon Website Banner (1080p).mp4";
import heroVideoWebm from "~/assets/video/Bonny Moon Website Banner (1080p).webm";
</script>
