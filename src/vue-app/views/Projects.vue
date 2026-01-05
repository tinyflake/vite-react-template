<template>
  <div class="projects">
    <div class="container py-3xl">
      <h1 class="page-title text-center mb-3xl">项目作品</h1>
      
      <div class="projects-content">
        <p class="text-center mb-2xl">这里将展示所有项目作品的详细信息。</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 页面逻辑将在后续实现
</script>

<style scoped lang="scss">
.page-title {
  @include text-heading-1;
}

.projects-content {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
