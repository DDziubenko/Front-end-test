<template>
  <section
    class="bg-[#FFFFF0] px-4 py-16 dt:py-[100px] flex flex-col items-center overflow-hidden"
  >
    <div class="relative flex flex-col items-center text-center max-w-full">
      <h2
        class="font-['Ostrich_Sans'] font-black leading-[1.1] text-[#E5E5D8] opacity-50 text-[64px] tracking-[1.28px] whitespace-pre-wrap w-[343px] mb-[51px] dt:whitespace-nowrap dt:w-auto text-left dt:text-center dt:mb-[-61px] dt:text-[144px] dt:tracking-[2.88px] responsive-text"
      >
        <span>JOIN OUR NEWSLETTER</span>
      </h2>

      <!-- Main Text -->
      <p
        class="font-['Ostrich_Sans'] font-black leading-[1.1] text-[#333333] relative z-10 text-[32px] w-[343px] dt:text-[36px] dt:w-[660px]"
      >
        and Get all the latest Bonny Moon stories, news, and exclusive events
        delivered straight to your inbox.
      </p>
    </div>

    <!-- Input Field -->
    <form
      class="mt-[60px] dt:mt-[64px] w-full max-w-[343px] dt:max-w-[660px] border-b border-[#333333] py-3 flex justify-between items-center cursor-pointer group"
    >
      <input
        type="email"
        placeholder="Enter your email"
        class="bg-transparent font-family-sans text-[15px] dt:text-[16px] leading-[1.5] text-[#333333] placeholder:text-[#333333] placeholder:opacity-50 outline-none w-full"
      />
      <button type="submit" class="shrink-0 w-6 h-6 dt:w-8 dt:h-8">
        <img
          src="/assets/icons/guidance_right-arrow.svg"
          alt="Submit"
          class="w-full h-full transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </form>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@media (min-width: 1441px) {
  .responsive-text {
    font-size: 10vw;
  }
}
</style>
