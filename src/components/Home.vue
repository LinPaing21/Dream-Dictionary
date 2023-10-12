<template>
    <div id="first-page" class="container w-75 my-3">
        <input type="text" v-model="search" placeholder="ရှာဖွေမည်" class="form-control w-50 rounded-pill" style="line-height: 1.75;">
        <ul class="mt-4" v-if="filterBlogs.length">
            <div v-for="title in blogTitles">
                <h3 class="mb-4 fw-bold text-warning" v-show="!search">{{ title.BlogTitle }}</h3>
                <li v-for="blog in filterBlogs" v-if="blog.BlogId == title.BlogId">
                        <p>{{ blog.BlogContent }}</p>
                        <hr>
                </li>
            </div>
        </ul>
        <p v-else class="mt-4 border border border-3 border-danger w-100 text-center" style="height: 30px">
            ! တူညီသော ရလဒ် ရှာမတွေ့ပါ :(
        </p>
    </div>
</template>

<script>
// Importing search engine
import searchMixin from '../mixins/searchMixin'

export default{
    name: 'first-page',
    data() {
        return {
            search: '',
            blogs: [],
            blogTitles: [],
        }
    },
    methods: {

    },
    created() {
        fetch('../src/DreamDictionary.json')
            .then((data) => data.json())
            .then((data) => {
            this.blogTitles = data.BlogHeader
            this.blogs = data.BlogDetail

            // console.log(this.BlogDetails)
            })
    },
    mixins: [searchMixin]
}
</script>

<style>

</style>