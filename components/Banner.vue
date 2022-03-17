<template>
    <carousel v-bind="options">
        <slide v-for="(item, index) of listImages" :key="index" class="b-carousel_img">
            <img :alt="item.author" :src="item.download_url" class="b-carousel_img__item" @click='openModal(index)'/>
        </slide>
    </carousel>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {}
    },
    computed: {
        listImages(){
            return this.$store.getters.getImages
        },
        options(){
            return this.$store.state.optionSlider
        }
    },
    mounted() {
        axios.get('https://picsum.photos/v2/list?page=4&limit=3')
        .then(response => {
            this.$store.commit('initImage', response.data);
        });
    },
    methods: {
        openModal(index){
            this.$store.commit('selectImgModal', index);
        }
    }
}
</script>

<style>
    .b-carousel_img{
        width: 33.3%;
        height: 100%;
        cursor: pointer;
    }
    .b-carousel_img__item{
        width: 100%;
        cursor: pointer;
    }
</style>
