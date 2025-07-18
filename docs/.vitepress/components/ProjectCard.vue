<template>
  <div class="project-card">
    <img v-if="img" :src="img" alt="프로젝트 이미지" class="card-img" />
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-desc">{{ description }}</p>
    <div class="tag-list">
      <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
    </div>
    <a :href="link" class="btn-outline">자세히 보기</a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  link: string
  img?: string
  tags?: string[]
}>()
</script>

<style scoped>
.project-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 700;
}

.card-desc {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  background: var(--gray-100);
  color: var(--gray-800);
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
}

.btn-outline {
  align-self: flex-start;
  margin-top: auto;
}
</style>
