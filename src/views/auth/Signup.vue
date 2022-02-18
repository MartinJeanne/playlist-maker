<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="text" placeholder="Display name" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button :disabled="isPending" >Sign up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '@/composables/useSignup'

export default {
  setup() {
    const { error, signup, isPending } = useSignup()

    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    async function handleSubmit() {
      const res = await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        console.log('user created')
      }
    }

    return { displayName, email, password, handleSubmit, error, isPending }
  }
}
</script>

<style>

</style>