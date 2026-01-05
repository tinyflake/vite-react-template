<template>
  <div class="about">
    <div class="container py-3xl">
      <h1 class="page-title text-center mb-3xl">关于</h1>
      
      <div class="about-content">
        <div class="about-text">
          <h2>个人简介</h2>
          <p>这里是关于我的详细介绍页面，将来会包含更多个人信息、经历和故事。</p>
        </div>
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

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-text {
  h2 {
    @include text-heading-3;
    margin-bottom: $spacing-lg;
  }
  
  p {
    @include text-body;
    margin-bottom: $spacing-lg;
  }
}
</style>
