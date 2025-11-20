<template>
  <section
    class="bg-[#FFFFF0] px-4 py-16 dt:py-[100px] flex flex-col items-center overflow-hidden"
  >
    <div class="relative flex flex-col items-center text-center max-w-full">
      <h2
        class="font-['Ostrich_Sans'] font-black leading-[1.1] text-[#E5E5D8] opacity-50 text-[64px] tracking-[1.28px] whitespace-pre-wrap w-[343px] mb-[51px] dt:whitespace-nowrap dt:w-auto text-left dt:text-center dt:mb-[-61px] dt:text-[144px] dt:tracking-[2.88px] 2xl:text-[10vw]"
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
      class="mt-[60px] dt:mt-[64px] w-full max-w-[343px] dt:max-w-[660px] border-b border-[#333333] py-3 flex items-center gap-3 group"
      novalidate
      @submit.prevent="handleSubmit"
      aria-describedby="newsletter-feedback"
    >
      <label for="newsletter-email" class="sr-only">Email address</label>
      <input
        type="email"
        placeholder="Enter your email"
        id="newsletter-email"
        name="newsletter-email"
        v-model="email"
        autocomplete="email"
        required
        :aria-invalid="hasError"
        :aria-describedby="feedbackMessage ? 'newsletter-feedback' : undefined"
        class="bg-transparent font-family-sans text-[15px] dt:text-[16px] leading-normal text-[#333333] placeholder:text-[#333333] placeholder:opacity-50 outline-none w-full"
      />
      <button
        type="submit"
        class="flex items-center gap-2 text-[#333333] font-family-sans text-[15px] dt:text-[16px] font-semibold tracking-[0.48px] uppercase"
        :disabled="isLoading"
        :aria-busy="isLoading"
        aria-label="Submit newsletter form"
      >
        <img
          src="/icons/guidance_right-arrow.svg"
          alt=""
          class="shrink-0 w-6 h-6 dt:w-8 dt:h-8 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </button>
    </form>
    <p
      v-if="feedbackMessage"
      :class="[
        'mt-4 text-center font-family-sans text-sm dt:text-base',
        hasError ? 'text-[#F26E21]' : 'text-[#2F855A]',
      ]"
      id="newsletter-feedback"
      role="status"
      aria-live="polite"
    >
      {{ feedbackMessage }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const email = ref("");
const status = ref<"idle" | "loading" | "success" | "error">("idle");
const feedbackMessage = ref("");

const hasError = computed(() => status.value === "error");
const isLoading = computed(() => status.value === "loading");

const validateEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const handleSubmit = () => {
  if (isLoading.value) {
    return;
  }

  feedbackMessage.value = "";
  status.value = "idle";

  if (!validateEmail(email.value)) {
    status.value = "error";
    feedbackMessage.value = "Please enter a valid email address.";
    return;
  }

  status.value = "loading";

  setTimeout(() => {
    status.value = "success";
    feedbackMessage.value =
      "Thank you! Please check your inbox to confirm the subscription.";
    email.value = "";
  }, 800);
};
</script>
