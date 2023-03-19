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

let releases = [
  {
    link: "https://band.link/lSgXS",
    title: "джаз",
    cover: "https://avatars.yandex.net/get-music-content/4399834/9f68100d.a.17521367-1/m1000x1000",
    artist: "pzk",
    date: "2021",
  },
  {
    link: "https://band.link/UW0O6",
    title: "freestyle",
    cover: "https://avatars.yandex.net/get-music-content/4010467/86f73c6e.a.14455648-1/m1000x1000",
    artist: "lm",
    date: "2021",
  },
  {
    link: "https://music.yandex.ru/album/24331721/track/109842312",
    title: "fat breaks (remix)",
    cover: "https://avatars.yandex.net/get-music-content/5502420/d9e37d58.a.24331721-1/m1000x1000",
    artist: "lm & fgrc & pzkbeats",
    date: "2020",
  },
  {
    link: "https://pzkbeats.fanlink.to/daily_routine",
    title: "daily routine",
    cover: "https://avatars.yandex.net/get-music-content/2433821/1366f20e.a.12291597-1/m1000x1000",
    artist: "pzkbeats",
    date: "2020",
  },
  {
    link: "https://band.link/qC5iO",
    title: "летний мотив",
    cover: "https://avatars.yandex.net/get-music-content/2427101/5e181264.a.11564496-1/m1000x1000",
    artist: "lm",
    date: "2020",
  },
  {
    link: "https://fanlink.to/1018",
    title: "10'18",
    cover: "https://avatars.yandex.net/get-music-content/176019/a44c8ae7.a.6110242-1/m1000x1000",
    artist: "pzk &amp; lm",
    date: "2018",
  },
  {
    link: "https://fanlink.to/balticbreeze",
    title: "baltic breeze",
    cover: "https://avatars.yandex.net/get-music-content/114728/7be1e770.a.6259141-1/m1000x1000",
    artist: "pzkbeats",
    date: "2018",
  },
  {
    link: "https://music.yandex.ru/album/24193250",
    title: "loops from the park",
    cover: "https://avatars.yandex.net/get-music-content/5878680/95cd3e19.a.24193250-1/m1000x1000",
    artist: "pzkbeats",
    date: "2017",
  },
  {
    link: "https://thenorthbridge.biglink.to/demoloops",
    title: "demoloops'15-16",
    cover: "https://avatars.yandex.net/get-music-content/5878680/e54aa15b.a.24061638-1/m1000x1000",
    artist: "pzkbeats",
    date: "2016",
  },
  {
    link: "https://music.yandex.ru/album/24057020",
    title: "the north block",
    cover: "https://avatars.yandex.net/get-music-content/5878680/9b7a9ed4.a.24057020-1/m1000x1000",
    artist: "fgrc",
    date: "2016",
  },
]

</script>

<style scoped>
.container {
  max-width: 1200px;
  padding: 0 15px;
}

.footer {
  text-align: center;
  padding: 1.5rem;
}

.footer a {
  color: black;
}

</style>
