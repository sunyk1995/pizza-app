import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		islogin:false,
		username:''
  },
  mutations: {
		setname(state,data){
			state.islogin = true;
			state.username = data.email
		}
  },
  actions: {

  },
	getters:{
		islogin(state){
			return state.islogin
		},
		username(state){
			return state.username
		}
	}
})
