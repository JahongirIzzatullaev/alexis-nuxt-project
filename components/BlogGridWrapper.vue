<template>
    <div class="blog-wrapper border-top">
        <div class="page-title-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center" data-aos="fade-up">
                        <div class="page-title-content">
                            <h4 class="page-title">Our Blog</h4>
                            <h2 class="title mb-0">Write & Share</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog-area blog-masonry-area">
            <div class="container">
                <div v-masonry class="row post-items-style1">
                    <div class="col-lg-4 col-sm-6 item" v-for="(blog, index) in blogs" :key="index">
                        <div class="post-item">
                            <div class="thumb">
                                <n-link to="/blog-details">
                                    <img :src="blog.imgSrc" :alt="blog.title">
                                </n-link>
                            </div>
                            <div class="content">
                                <ul class="meta">
                                    <li><i class="icofont-calendar"></i>{{ blog.postDate }}</li>
                                    <li><i class="icofont-eye"></i>{{ blog.view }} Views</li>
                                </ul>
                                <h4 class="title">
                                    <n-link to="/blog-details">{{ blog.title }}</n-link>
                                </h4>
                                <n-link to="/blog-details" class="btn-link">Read More</n-link>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="row">
                    <div class="col-lg-12 text-center">
                        <n-link to="/blog" class="btn-more">...Load More...</n-link>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted () {
            if (typeof this.$redrawVueMasonry === 'function') {
                this.$redrawVueMasonry()
            }

            this.onLoad();
        },

        methods: {
            async onLoad() {
                await this.sleep(950)
                this.$redrawVueMasonry()
            },
            sleep(ms){
                return new Promise(resolve => setTimeout(resolve, ms))
            }
        },

        data() {
            return {
                blogs: [
                    {
                        imgSrc: "/images/blog/01.jpg",
                        title: "The desolate beauty  of greenland",
                        postDate: "Apr 06, 2021",
                        view: 70
                    },
                    {
                        imgSrc: "/images/blog/v01.jpg",
                        title: "Favorite images of 2019: A retrospective",
                        postDate: "Jun 24, 2021",
                        view: 46
                    },
                    {
                        imgSrc: "/images/blog/02.jpg",
                        title: "Canon EOS full frame mirrorless camera",
                        postDate: "Mar 12, 2021",
                        view: 25
                    },
                    {
                        imgSrc: "/images/blog/v02.jpg",
                        title: "The photographer platform for all",
                        postDate: "Apr 06, 2021",
                        view: 70
                    },
                    {
                        imgSrc: "/images/blog/03.jpg",
                        title: "Tellus adipiscing nibh mattis",
                        postDate: "Jun 24, 2021",
                        view: 46
                    },
                    {
                        imgSrc: "/images/blog/03.jpg",
                        title: "Put title for single blog with image format here",
                        postDate: "Mar 12, 2021",
                        view: 25
                    },
                    {
                        imgSrc: "/images/blog/v04.jpg",
                        title: "Tellus vulputate fermentum dolor",
                        postDate: "Apr 06, 2021",
                        view: 70
                    },
                    {
                        imgSrc: "/images/blog/02.jpg",
                        title: "Single blog with image format here",
                        postDate: "Jun 24, 2021",
                        view: 46
                    },
                    {
                        imgSrc: "/images/blog/01.jpg",
                        title: "Fusce mattis euismod ridiculus tortor",
                        postDate: "Mar 12, 2021",
                        view: 25
                    },
                ]
            }
        },
    };
</script>