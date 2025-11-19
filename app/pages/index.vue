<template>
  <div class="bg-[#FFFFF0]">
    <main>
      <HeroSection />
      <StoryCarousel />
      <LazyClubExperience />
      <div class="flex w-full flex-col 4xldt:flex-row justify-between">
        <LazyGallery />
        <LazyEventsSection />
      </div>
      <LazyNewsletterSection />
    </main>
    <LazyFooter />
    <LazySidebar />
  </div>
</template>

<script setup lang="ts"></script>
