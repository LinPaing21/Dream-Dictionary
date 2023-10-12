export default {
    computed: {
        filterBlogs: function() {
            return this.blogs.filter((blog) => {
                return blog.BlogContent.match(this.search)
            })
        }
    }
}