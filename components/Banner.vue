<template>
    <div class="b-carousel">
        <carousel v-bind="options">
            <slide v-for="(item, index) of this.items" :key="index" class="b-carousel_img">
                <img :alt="item.author" :src="item.download_url" class="b-carousel_img__item" />
            </slide>
        </carousel>
        <div class="b-carousel_form">
            <div class="b-carousel_form__inp">
                <input type="text" class="form-control" v-model="author" name="author" placeholder="Имя автора"/>
                <input type="text" class="form-control" v-model="description" name="description" placeholder="Краткое описание"/>
                <input type="text" class="form-control" v-model="title" name="title" placeholder="Заголовок"/>
            </div>
            <div class="b-carousel_form__upload">
                <input ref="fileImg" type="file">
            </div>
            <div class="b-carousel_form__btn" @click="uploadFiles">
                Загрузить
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            options: {
                loop: true,
                perPage: 3,
                paginationEnabled: false,
                autoplay: false
            },
            items: {},
            author: '',
            description: '',
            title: ''
        }
    },
    mounted() {
        axios.get('https://picsum.photos/v2/list?page=4&limit=3')
        .then(response => {
            this.items = response.data;
        });
    },
    methods: {
        uploadFiles(e) {
            console.log(e)
            let file = this.$refs.fileImg.files[0];
            if (/.(png|jpg|jpeg|JPG|JPEG)$/.test(file.name)) {
                let fr = new FileReader();
                fr.readAsDataURL(file);
                fr.onload = e => {
                    var obj = {
                        'author': this.author,
                        'description': this.description,
                        'title': this.title,
                        'download_url': e.target.result
                    };
                    this.items.push(obj);
                    this.items.length > 0 ? this.options.autoplay = true : this.options.autoplay = false;
                };
              }
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
    }
    .form-control {
        background-color: #fff!important;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        color: #435966;
        padding: 0 12px;
        height: 38px;
        max-width: 100%;
        -webkit-box-shadow: none;
        box-shadow: none;
        -webkit-transition: all 300ms linear;
        -moz-transition: all 300ms linear;
        -o-transition: all 300ms linear;
        -ms-transition: all 300ms linear;
        transition: all 300ms linear;
        display: flex;
        flex: 1 0 auto;
    }
    .b-carousel_form__inp{
        display: flex;
        margin-top: 10px;
    }
    .b-carousel_form__btn{
        display: flex;
        align-items: center;
        justify-content: center;
        background: #d9d9d9;
        padding: 15px 20px;
        cursor: pointer;
        border-radius: 3px;
        width: max-content;
        float: right;
        margin-top: 10px;
    }
    .b-carousel_form__btn:hover{
        background: #ebe6e6;
    }
    .b-carousel_form__upload{
        margin-top: 10px;
    }
</style>
