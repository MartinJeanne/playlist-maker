<template>
  <div class="navbar">
    <nav>
      <router-link id="home" :to="{ name: 'Home' }">
        <img src="@/assets/playlist.png" />
        <h1>Playlist-maker</h1>
      </router-link>
      <div class="links">
        <button @click="handleSubmit" v-if="user">Logout</button>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Signup' }">Signup</router-link>
          <router-link class="btn" :to="{ name: 'Login' }">login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'

export default {
  setup() {
    const { error, logout, isPending } = useLogout()
    const { user } = getUser()
    const router = useRouter()

    async function handleSubmit() {
      const res = await logout()
      if (!error.value) {
        console.log('logout')
        router.push({ name: 'Login' })
      }
    }

    return { handleSubmit, user }
  }
}
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
  max-width: 95vw;
  margin: 0 auto;
}

nav > #home {
  display: flex;
  align-items: center;
}

nav h1 {
  margin-left: 20px;
}

nav .links {
  margin-left: auto;
}

nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}

nav img {
  max-height: 60px;
}
</style>