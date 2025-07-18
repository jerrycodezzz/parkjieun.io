<template>
  <Layout>
    <template #layout-bottom>
      <footer class="custom-footer">
        <div class="footer-inner">
          <!-- <div class="footer-name">© 2025 Park Jieun</div> -->
          <div class="footer-links">
            <!-- <a href="https://github.com/parkjieun" target="_blank" rel="noopener noreferrer"
              >GitHub</a
            > -->
            <span>·</span>
            <a href="/about/">About</a>
            <span>·</span>
            <a href="/contact">Contact</a>
            <span>·</span>
            <a href="/resume">Resume</a>
          </div>
          <div class="footer-email">📧 parkjieun.info@gmail.com</div>
        </div>
      </footer>
    </template>
  </Layout>
</template>

<script setup lang="ts">
// ✅ VitePress 기본 테마에서 Layout 컴포넌트를 가져옵니다
import DefaultTheme from 'vitepress/theme'
const Layout = DefaultTheme.Layout
</script>

<style scoped>
.custom-footer {
  margin-top: 4rem;
  padding: 2rem 1rem;
  background-color: var(--color-bg);
  border-top: 1px solid var(--gray-200);
  font-size: 0.875rem;
  color: var(--gray-600);
}

.footer-inner {
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;
}

.footer-links {
  margin: 0.5rem 0;
}

.footer-links a {
  color: var(--color-text-secondary);
  text-decoration: none;
  margin: 0 0.25rem;
  font-weight: 500;
}

.footer-links a:hover {
  color: var(--color-brand-primary);
  text-decoration: underline;
}

.footer-email {
  margin-top: 0.5rem;
  font-family: monospace;
  font-size: 0.8rem;
}
</style>
