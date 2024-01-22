<template>
  <div>
    <div class="componentCatolog-container">
      <div class="componentCatalog-list">
        <router-link to="/NavBar">
          <span>NavBar</span>
        </router-link>
        <router-link to="/FAQ">
          <span>FrequentlyAskedQuestions</span>
        </router-link>
        <router-link to="/Review">
          <span>Review</span>
        </router-link>
        <router-link to="/LastVisitedList">
          <span>Last Visited List</span>
        </router-link>
      </div>
    </div>
    <div class="router-view-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.componentCatolog-container {
  position: fixed;
  left: 10px;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 10px;
}

.router-view-wrapper {
}

.componentCatalog-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.componentCatalog-list a {
  padding: 5px 10px;
  text-align: center;
  color: #000000;
  box-shadow: 0px 0px 0px 1px rgba(18, 55, 105, 0.08),
    0px 1px 2px 0px rgba(164, 172, 185, 0.24);
  text-decoration: none;
  border-radius: 10px;
  transition: 300ms;
}

.componentCatalog-list a.router-link-active {
  color: #fff;
  background-color: #00b7fd;
  box-shadow: none;
}
</style>
