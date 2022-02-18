<template>
  <form @submit.prevent="handleSubmit">
    <h3>Log in</h3>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button :disabled="isPending" >Log in</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '@/composables/useLogin'

export default {
  setup() {
    const { error, login, isPending } = useLogin()
    
    const email = ref('')
    const password = ref('')

    async function handleSubmit() {
      const res = await login(email.value, password.value)
      if (!error.value) {
        console.log('user logged in')
      }
    }

    return { email, password, handleSubmit, error, isPending }
  }
}
</script>

<style>
</style>