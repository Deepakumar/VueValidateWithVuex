import Vue from 'vue'
import Vuex from 'Vuex'
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

Vue.use(Vuex)
const store= new Vuex.Store({})


const validator = new Vue({
    mixins: [
      validationMixin
    ],
    computed: {
      name () {
          console.log('name store')
          console.log(store);
        return store.getters['company/name']
      }
    },
    validations: {
      name: { required, minLength: minLength(3) }
    }
  });

  const state = {
    name: ''
  }

  const getters = {
    name (state) {
        return state.name
      },
      $v (state) {
        return Object.assign({}, validator.$v)
      }
  }

  const mutations = {
    name (state, value) {
        state.name = value
      }
  }

  const actions = {
    $touch () {
        validator.$v.$touch()
      },
      name ({ commit }, value) {
        commit('name', value)
        console.log('commit event' + value)
      }
  }

  export default {
    state, getters, mutations, actions, validator
  }


