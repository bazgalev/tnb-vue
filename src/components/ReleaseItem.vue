<script setup>
defineProps({
  link: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true
  }
})
</script>

<template>
  <article>
    <a :href="link">
      <img :src="cover" class="release-cover" :alt="title">
    </a>
    <div class="release-description">
      <h3 class="release-title">{{ title }}</h3>
      <p class="release-details">by {{ artist }} @ {{ date }}</p>
    </div>
  </article>
</template>


<style scoped>

.release-description {
  padding: 1rem;
}
.release-cover {
  width: 100%;
}

.release-title {
  text-align: center;
  font-weight: bold;
}

.release-details {
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
}


</style>