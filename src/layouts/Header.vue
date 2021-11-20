<template>
  <header class="menu">
    <!--  漢堡排與導覽列    -->
    <label
      for="menu__navbar-toggle--hamburger"
      class="menu__navbar-toggle--hamburger-label"
    >
      <span class="hamburger"></span>
    </label>
    <input
      type="checkbox"
      class="navbar-toggle menu__navbar-toggle--hamburger"
      id="navbar-toggle--hamburger"
    />
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <a class="nav-link" href="#activity">男款</a>
        </li>
        <li class="nav-item"><a class="nav-link" href="#album">女款</a></li>
        <li class="nav-item">
          <a class="nav-link" href="#adoption">最新消息</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#adoption">聯絡我們</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#adoption">客製商品</a>
        </li>
        <li class="nav-item">
          <img src="https://i.imgur.com/CS5KYje.png" alt="menu-icons" />
        </li>
      </ul>
    </nav>
    <!--  漢堡排與導覽列    -->
    <div class="site-logo-wrapper">
      <img class="site-logo" src="https://i.imgur.com/gvRKoTR.png" alt="" />
    </div>
    <div class="icons-wrapper d-none">
      <img src="https://i.imgur.com/CS5KYje.png" alt="menu-icons" />
    </div>
  </header>
</template>
<style lang="scss" scoped>
@import "../assets/scss/components/_header";
</style>
