<template>
  <div class="error">
    Page Not Found About to return to the homepage for you {{ sec }}s
  </div>
</template>
<script>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRouter } from 'vue-router'
  export default {
    setup() {
      const sec = ref(5)
      const timer = ref(null)
      const router = useRouter()

      onMounted(() => {
        timer.value = setInterval(() => {
          if (sec.value === 0) {
            clearTimeout(timer.value)
            return router.push({ name: 'Home' })
          }
          sec.value--
        }, 1000)
      })

      onUnmounted(() => {
        clearTimeout(timer.value)
      })

      return { sec }
    },
  }
</script>

<style scoped>
  .error {
    @apply h-full flex justify-center align-middle text-white;
  }
</style>
