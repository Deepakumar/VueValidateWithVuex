<template>
  <div class="container">
    <input
    :value="name"
    @input="$store.dispatch('company/$touch')"
  />
  <pre>$v: {{ $v }}</pre>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Logo from '~/components/Logo.vue'
import { required } from "vuelidate/lib/validators";

export default {
  components: {
    Logo
  },
  computed: {
     ...mapGetters('company', [
      '$v','name'
    ]),
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
