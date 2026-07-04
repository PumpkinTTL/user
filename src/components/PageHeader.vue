<template>
  <div class="rounded-xl border bg-card px-5 py-4 mb-6 md:mb-8">
    <div class="flex items-baseline gap-3 flex-wrap">
      <h1 class="text-lg font-bold text-foreground tracking-tight">{{ title }}</h1>
      <p v-if="subtitle" class="text-sm text-muted-foreground">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>
