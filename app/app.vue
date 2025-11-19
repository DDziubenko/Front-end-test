<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { seoHeadConfig } from "~/mock/seo";

useHead(seoHeadConfig);
</script>
<style>
@import "~/assets/css/reset.css";
@import "~/assets/css/main.css";
@import "~/assets/css/fonts.css";
@import "~/assets/css/icons.css";
</style>
