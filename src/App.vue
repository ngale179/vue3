<script setup>
import Index from './components/Index.vue'
</script>
<template>
  <div id="nav" style="margin-bottom: 100px">
    <Index msg="Vue3 - Data"/>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/user">User</router-link></li>
    </ul>
  </div>
  <router-view />
</template>

