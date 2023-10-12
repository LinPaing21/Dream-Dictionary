<template>
    <div class="container">
        <div class="row justify-content-center mx-md-5 p-1 p-md-3">
            <div v-for="title in blogTitles" class="col-5 col-md-3 mt-3 " >
                <router-link :to="'/alphabets/' + title.BlogId" class="text-decoration-none border border-white rounded d-flex align-items-center justify-content-center p-2" id="titleBox">
                    <div class="text-white">
                        <h3 class="text-center">{{ title.BlogTitle | divide }}</h3>
                        <small>နှင့်ပတ်သက်သော အိပ်မက်များ</small>
                    </div>
                </router-link>
            </div>           
        </div>
    </div>
</template>

<script>
export default {
    name: 'second-page',
    data() {
        return {
            blogTitles: []
        }
    },
    created() {
    fetch('../src/DreamDictionary.json')
        .then((data) => data.json())
        .then((data) => {
          this.blogTitles = data.BlogHeader
        })
    },
    filters: {
        divide: function (value) {
            return value[2];
        }
    }
}
</script>

<style scoped>
#titleBox {
    box-shadow: 0 0 .5rem;
    height: 100px;
}
</style>