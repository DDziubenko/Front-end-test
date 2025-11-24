<template>
  <div class="bg-[#FFFFF0]">
    <main>
      <HeroSection />
      <StoryCarousel />
      <LazyClubExperience />
      <div class="flex w-full flex-col justify-between">
        <LazyGallery />
        <LazyEventsSection />
      </div>
      <LazyNewsletterSection />
    </main>
    <LazyFooter />
    <LazySidebar />
    <LazySidebarBooking />
  </div>
</template>

<script setup lang="ts"></script>
