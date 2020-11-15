import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: (state) => !!state.token 
        // !! creates a boolean from state.token
        //returns true or false
};

const actions = {
    login: () => {
        api.login();
    },

    finalizeLogin({ commit }, hash) {
        const query = qs.parse(hash.replace('#', ''));

        window.localStorage.setItem('imgur_token', query.access_token);
        commit('setToken', query.access_token);
        router.push('/');
    },

    logout: ({ commit }) => {
        window.localStorage.removeItem('imgur_token');
        commit('setToken', null);
    }
};


const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state, // entspricht state = state
    getters,
    actions,
    mutations
}