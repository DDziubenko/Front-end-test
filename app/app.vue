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
