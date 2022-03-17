import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        images: {},
        selectImg: 0,
        modal: false,
        optionSlider: {
            loop: true,
            perPage: 3,
            paginationEnabled: false,
            autoplay: false
        }
    },
    mutations: {
        initImage(state, param){
            state.images = param;
        },
        addImage(state, img){
            state.images.push(img);
            state.images.length > 3 ? state.optionSlider.autoplay = true : state.optionSlider.autoplay = false;
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
