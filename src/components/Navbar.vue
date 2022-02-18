<template>
  <div class="navbar">
    <nav>
        <img src="@/assets/playlist.png">
      <h1><router-link :to="{ name: 'Home' }">Playlist-maker</router-link></h1>
      <div class="links">
        <button>Logout</button>
        <router-link class="btn" :to="{ name: 'Signup' }">Signup</router-link>
         <router-link class="btn" :to="{ name: 'Login' }">login</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}

nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

nav h1 {
  margin-left: 20px;
}

nav .links {
  margin-left: auto;
}

nav .links a, button {
  margin-left: 16px;
  font-size: 14px;
}

nav img {
    max-height: 60px;
}
</style>