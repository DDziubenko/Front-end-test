<template>
  <a
    :href="href"
    class="link-with-line flex flex-col items-center gap-2 group text-[#333333] no-underline cursor-pointer"
    :class="className"
  >
    <span
      class="font-family-sans font-semibold text-base leading-normal transition-colors duration-300 group-hover:text-[#F26E21]"
    >
      {{ text }}
    </span>
    <WavyLine
      :width="wavyWidth"
      :height="wavyHeight"
      :color="wavyColor"
      class="transition-colors duration-300 group-hover:text-[#F26E21]"
    />
  </a>
</template>

<script setup lang="ts">
interface Props {
  text: string;
  href?: string;
  wavyWidth?: number;
  wavyHeight?: number;
  wavyColor?: string;
  className?: string;
}

withDefaults(defineProps<Props>(), {
  href: "#",
  wavyWidth: 83,
  wavyHeight: 7,
  wavyColor: "currentColor",
  className: "",
});
</script>

<style scoped>
.link-with-line:hover :deep(path) {
  stroke: #f26e21;
  transition: stroke 0.3s ease;
}

/* Ensure the transition happens on mouse out as well */
.link-with-line :deep(path) {
  transition: stroke 0.3s ease;
}
</style>
