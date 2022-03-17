<template>
    <div>
        <div class="b-carousel">
            <div>
                <Banner />
            </div>
            <div>
                <FormUpload />
            </div>
        </div>
        <div class="b-modal" v-if="modal">
            <Modal />
        </div>
    </div>
</template>

<script>
    import Modal from '../components/Modal.vue'
    import FormUpload from '../components/FormUpload.vue'
    export default {
        components: {
            FormUpload,
            Modal
        },
        computed: {
            modal(){
                return this.$store.state.modal
            }
        }
    }
</script>

<style>
    .b-modal{
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
    }
</style>
