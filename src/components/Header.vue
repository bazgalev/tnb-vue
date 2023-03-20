<template>
  <div class="header">
    <a class="main-logo" href="/">
      <img class="logo-img" src="/img/TNBridge.png" alt="The North Bridge ">
    </a>
    <nav class="main-nav">
      <ul class="main-nav-list">
        <li class="list-item ">
          <a href="" class="item-link ">Home</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>

.header {
  height: 4rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.logo-img {
  height: 100%;
}

.main-nav-list {
  text-transform: uppercase;
}

.item-link {
  display: block;
  text-decoration: none;
  color: black;
  box-sizing: border-box;
  line-height: 100%;
  /*padding: 12px 15px;*/
}

.main-nav-list {
  height: 100%;
  vertical-align: middle;

}

.item-link {
  padding: 1.3rem;
}

li {
  list-style-type: none;
  padding: 0;
  height: 100%;
}

</style>