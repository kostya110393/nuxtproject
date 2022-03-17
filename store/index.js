import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        images: {},
        selectImg: 0,
        modal: false
    },
    mutations: {
        initImage(state, param){
            state.images = param;
        },
        addImage(state, img){
            state.images.push(img);
        },
        selectImgModal(state, id){
            state.selectImg = id;
            state.modal = !state.modal;
        },
        closeModal(state){
            state.modal = false;
        },
        changeSelectImg(state, id){
            state.selectImg = id;
        }
    },
    getters: {
        getImages(state){
            return state.images
        },
        getSelectImg(state){
            return state.selectImg
        },
        getModal(state){
            return state.modal
        }
    }
})

export default store
