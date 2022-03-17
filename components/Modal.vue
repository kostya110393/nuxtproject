<template>
    <div>
        <div class="b-modal__inner">
            <span class="b-modal__inner-close" @click='closeModal()'>Закрыть</span>
            <img :src="listImages[this.$store.getters.getSelectImg].download_url" >
            <span class="b-modal__inner-left" @click='prevImg()'></span>
            <span class="b-modal__inner-right" @click='nextImg()'></span>
        </div>
        <div class="g_modal-overlay level1"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        computed: {
            listImages(){
                return this.$store.getters.getImages
            }
        },
        methods: {
            closeModal(){
                this.$store.commit('closeModal');
            },
            prevImg(){
                var item = this.$store.getters.getSelectImg;
                item == 0 ? (item = this.listImages.length-1) : item--;
                this.$store.commit('changeSelectImg', item);
            },
            nextImg(){
                var item = this.$store.getters.getSelectImg;
                (item == this.listImages.length-1) ? item = 0 : item++
                this.$store.commit('changeSelectImg', item);
            }
        }
    }
</script>

<style>
    .b-modal__inner{
        width: 730px;
        padding: 50px 50px;
        position: relative;
        background: #fff;
        z-index: 99;
    }
    .g_modal-overlay.level1 {
        opacity: .5;
        display: block;
    }
    .g_modal-overlay {
        display: none;
        position: fixed;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        background: #000;
    }
    .b-modal__inner-close{
        font-size: 15px;
        color: #797979;
        cursor: pointer;
        position: absolute;
        right: 50px;
        top: 10px;
    }
    .b-modal__inner-close:hover{
        color:#000;
    }
    .b-modal__inner img{
        max-width: 100%;
        max-height: 100%;
    }
    .b-modal__inner-left:before, .b-modal__inner-right:before{
        font-size: 40px;
        position: absolute;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        top: 0;
        width: 50px;
        cursor: pointer;
    }
    .b-modal__inner-left:before{
        content: '<';
        left: 0;
    }
    .b-modal__inner-right:before{
        content: '>';
        right: 0px;
    }
    .b-modal__inner-left:hover:before, .b-modal__inner-right:hover:before{
        background: #ebe9e9;
    }
</style>
