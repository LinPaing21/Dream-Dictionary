<template>
    <div id="" class="container w-75 my-3">
        <input type="text" v-model="search" placeholder="ရှာဖွေမည်" class="form-control w-50 rounded-pill" style="line-height: 1.75;">
        <ul class="mt-4" v-if="filterBlogs.length">
            <h3 class="mb-4 fw-bold text-warning">{{ Title }}</h3>
            <li v-for="blog in filterBlogs" v-if="blog.BlogId == id"><p>{{ blog.BlogContent }}</p><hr></li>    
        </ul>
        <p v-else class="mt-4 border border border-3 border-danger w-100 text-center" style="height: 30px">
            ! တူညီသော ရလဒ် ရှာမတွေ့ပါ :(
        </p>
    </div>
    
</template>

<script>

import searchMixin from '../mixins/searchMixin';

export default{
    name: 'blog-content',
    data() {
        return {
            id: this.$route.params.id,
            search: '',
            Title: '',
            blogs: []
        }
    },
    created() {
        fetch('../src/DreamDictionary.json')
            .then((data) => data.json())
            .then((data) => {
                if (this.id < 27) {
                    this.Title = data.BlogHeader.find((v) => v.BlogId == this.id).BlogTitle;
                    this.blogs = data.BlogDetail
                }
            })
    },
    mixins: [searchMixin]
}
</script>

<style scoped> 

</style>