<script setup>
import ReleaseItem from './ReleaseItem.vue'

defineProps({
  releases: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul class="release-list">
    <li class="release-item" v-for="release in releases">
      <ReleaseItem
          :artist="release.artist"
          :cover="release.cover"
          :date="release.date"
          :title="release.title"
          :link="release.link"
      />
    </li>
  </ul>
</template>


<style scoped>
.release-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.2rem;
  list-style-type: none;
  padding: 0;
}

@media screen and (min-width: 768px) {
  .release-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .release-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>