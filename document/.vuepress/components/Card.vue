<template>
  <div class="card">
    <slot />
  </div>
</template>


<style scoped>
.card {
  margin-bottom: 24px;
  padding: 24px;
  background-color: var(--c-bg-card);
  border-radius: 12px;
  box-shadow: 2px 2px 30px var(--c-bg-card-shadow);
}
</style>