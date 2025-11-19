<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
  >
    <path
      d="M0 3.75C0 3.75 5.12938 3.42789 8.24854 2.55888C10.1503 2.02905 11.3351 1.03361 13.0003 0.829911C14.6735 0.627143 16.3733 0.811621 17.9561 1.36777C22.1086 2.99941 23.756 3.45197 26.565 2.89304C29.3719 2.3321 29.5559 -0.299993 35.6607 1.36777C41.7666 3.03553 47.2206 4.69125 52.0334 3.10678C56.8462 1.5223 58.0478 0.823312 63.5481 0.823312C67.0488 0.823312 71.6041 2.85232 73.5479 2.85232C77.9559 3.14634 80.5473 1.45449 82.0475 0.823312"
      :stroke="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      fill="none"
      preserveAspectRatio="none"
      vector-effect="non-scaling-stroke"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

withDefaults(defineProps<Props>(), {
  width: 83,
  height: 7,
  color: "#333333",
  strokeWidth: 1.5,
  className: "",
});
</script>
