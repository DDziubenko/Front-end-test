<template>
  <section
    class="bg-[#FFFFF0] px-4 py-16 dt:px-11 dt:py-[100px] 4xldt:max-w-[2895px] 4xldt:mx-auto"
    aria-labelledby="club-experience-title"
  >
    <h2
      id="club-experience-title"
      class="font-taykari text-[36px] dt:text-[48px] font-normal leading-[1.1] text-[#333] mb-8 dt:mb-16"
    >
      <span>CLUB EXPERIENCE</span>
    </h2>

    <div
      class="flex flex-col gap-8 dt:gap-10 xldt:flex-row xldt:flex-wrap xldt:items-start xldt:gap-4 xldt:justify-between"
    >
      <div
        v-for="(item, index) in experiences"
        :key="index"
        class="border-b border-[#e5e5d8] pb-10 flex flex-col dt:flex-row xldt:flex-col xldt:max-w-[802px] gap-8 xldt:flex-1 xldt:border-b-0 last:border-b-0"
      >
        <!-- Number for XL layout -->
        <div
          class="hidden xl:flex xldt:hidden! w-[314px] shrink-0 items-center justify-start"
          aria-hidden="true"
        >
          <span
            class="font-display text-[132px] leading-none tracking-[1.98px] text-[#FFFFF0] opacity-50"
          >
            {{ index + 1 }}.
          </span>
        </div>

        <!-- Icon & Title -->
        <div class="flex gap-6 dt:gap-8 dt:w-[314px] xldt:w-full dt:shrink-0">
          <NuxtImg
            :src="item.icon"
            alt=""
            class="w-[163px] h-[117.28px] dt:w-[141px] dt:h-[102px] shrink-0"
            loading="lazy"
          />
          <h3
            class="flex-1 font-display text-[32px] dt:text-[36px] font-black leading-[1.1] text-[#333333] uppercase"
          >
            {{ item.title }}
          </h3>
        </div>

        <!-- Description & Link -->
        <div
          class="flex flex-col gap-6 dt:flex-1 dt:flex-row xldt:flex-col dt:justify-between dt:items-start"
        >
          <p
            class="font-sans text-[15px] dt:text-base leading-normal text-[#585858] dt:w-[314px] xldt:w-full"
          >
            {{ item.description }}
          </p>

          <LinkWithLine
            :text="item.linkText"
            :href="item.href"
            :wavyWidth="item.wavyWidth"
            :wavyHeight="7"
            class="flex flex-col items-start dt:items-center xldt:items-start gap-2 dt:shrink-0"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experiences = [
  {
    title: "Music & Events",
    description:
      "Feel the rhythm of Bonny Moon. Join us for DJ sets, parties, and events that celebrate life and spark emotion.",
    icon: "/icons/club-experience/music illustration.svg",
    linkText: "Follow Us",
    href: "#",
    wavyWidth: 82,
  },
  {
    title: "Dining & Drinks",
    description:
      "Indulge in beach comfort food and drinks, featuring wood-fired dishes, local seafood, and signature cocktails.",
    icon: "/icons/club-experience/cake illustration.svg",
    linkText: "View Menu",
    href: "#",
    wavyWidth: 82,
  },
  {
    title: "Amenities & Niceties",
    description:
      "Our club offers exclusive amenities, including sun loungers, cabanas, and a fantastic team to satisfy your every whim.",
    icon: "/icons/club-experience/palmer illustration.svg",
    linkText: "Book Event",
    href: "#",
    wavyWidth: 86,
  },
];
</script>
