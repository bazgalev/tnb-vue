<template>
  <header>
    <div class="container">
      <Header/>
    </div>
  </header>

  <main>
    <div class="container">
      <ReleaseList :releases="releases"/>
    </div>
  </main>

  <footer>
    <div class="container">
      <div class="footer">
        <a href="https://music.yandex.ru/label/1391371">© The North Bridge {{ new Date().getFullYear() }}</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import ReleaseList from "./components/ReleaseList.vue";
import Header from "./components/Header.vue"
import releases from "../releases.json"
console.log(releases)


</script>

<style scoped>
.container {
  max-width: 1200px;
  padding: 0px 15px;
  margin: 0 auto;
}

.footer {
  text-align: center;
  padding: 1.5rem;
}

.footer a {
  color: black;
}

</style>
