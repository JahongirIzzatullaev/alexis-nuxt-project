<template>
    <div class="bgcolor-f6">
        <div class="blog-details-area">
            <!--== Start Post Details Content ==-->
            <div class="post-details-content">
                <div class="swiper-container post-gallery">
                    <swiper :options="blogGalleryActive">
                        <div class="swiper-slide">
                            <img src="/images/blog/post-detail-01.jpg" alt="image">
                        </div>
                        <div class="swiper-slide">
                            <img src="/images/blog/post-detail-02.jpg" alt="image">
                        </div>
                        <div class="swiper-slide">
                            <img src="/images/blog/post-detail-03.jpg" alt="image">
                        </div>
                        <div class="swiper-slide">
                            <img src="/images/blog/post-detail-04.jpg" alt="image">
                        </div>
                        <div class="swiper-slide">
                            <img src="/images/blog/post-detail-05.jpg" alt="image">
                        </div>
                    </swiper>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>
                <div class="post-details-body">
                    <div class="bread-crumbs">
                        <n-link to="/">Home</n-link>
                        <span>></span>
                        <n-link to="/blog">Blog</n-link>
                        <span>></span>
                        <span class="active">Title of single post with gallery here</span>
                    </div>
                    <div class="content">
                        <h2 class="title">Title of single post with gallery here</h2>
                        <div class="meta">
                            <a class="post-date" href="#"><i class="icofont-calendar"></i> September, 26th, 2016</a> 
                            <span>|</span> 
                            <a class="author" href="#"><i class="icon icofont-user-alt-3"></i> Admin</a> 
                            <span>|</span> 
                            <a class="category" href="#"><i class="icofont-folder"></i> Business</a> 
                            <span>|</span> 
                            <a class="comments-count" href="#"><i class="icofont-comment"></i> 02 Comments</a>
                        </div>
                        <p class="text-block">Morbi et accumsan est, non convallis metus. Etiam faucibus, leo et scelerisque facilisis, magna erat Tulo dictum nibh, vel congue tortor massa vitae magna.</p>
                        <p>Quisque sagittis nisl sit amet nulla rutrum ultrices. Vivamus ut sagittis ligula, sit amet fermentum dolor. Mauris to accumsan neque ut odio tempor semper ac vitae ligula. Morbi viverra tincidunt nisl, eget placerat erat. Morbi ornare mollis quam, sit amet vestibulum erat pharetra vitae:</p>
                        <ul>
                            <li><i class="icofont-disc"></i> Consectetur adipiscing elit vtae elit libero</li>
                            <li><i class="icofont-disc"></i> Nullam id dolor id eget lacinia odio posuere erat a ante</li>
                            <li><i class="icofont-disc"></i> Integer posuere erat dapibus posuere velit</li>
                        </ul>
                        <p class="mb-30">Nulla sed mi leo, sit amet molestie nulla. Phasellus lobortis blandit ipsum, at adipiscing eros porta quis. Dinter Phasellus in nisi ipsum, quis dapibus magna. <span class="text-theme-color">@Phasellus odio dolor</span>, pretium sit amet aliquam a, gravida eget un dui. Pellentesque eu dolu ipsum et quam faucibus scelerisque vitae ut ligula.</p>
                        <p>Morbi viverra tincidunt nisl, eget placerat erat. Morbi ornare mollis quam, sit amet vestibulum e:</p>
                    </div>
                    <div class="widget-tags">
                        <span>Tags:</span> <a href="#">Amazing</a>, <a href="#">Envato</a>, <a href="#">Themeforest</a>, <a href="#">Psd</a>, <a href="#">Logan</a>
                    </div>
                    <div class="social-icons">
                        <span>Share:</span>
                        <a href="#"><i class="icofont-facebook"></i></a>
                        <a href="#"><i class="icofont-twitter"></i></a>
                        <a href="#"><i class="icofont-pinterest"></i></a>
                        <a href="#"><i class="icofont-instagram"></i></a>
                        <a href="#"><i class="icofont-rss"></i></a>
                    </div>
                    <div class="comment-area">
                        <h4 class="title">02 Comments</h4>
                        <CommentList />
                        <h4 class="title">Leave a comment</h4>
                        <CommentForm />
                    </div>
                </div>
            </div>
            <!--== End Post Details Content ==-->

            <!--== Start Post Navigation Area ==-->
            <div class="blog-navigation">
                <div class="prev">
                    <a href="#">Newer post <i class="icofont-arrow-right"></i></a>
                </div>
                <div class="next">
                    <a href="#">Oldest post <i class="icofont-arrow-right"></i></a>
                </div>
            </div>
            <!--== End Post Navigation Area ==-->
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            CommentList: () => import('@/components/CommentList'),
            CommentForm: () => import('@/components/CommentForm'),
        },

        data() {
            return {
                blogGalleryActive: {
                    slidesPerView : 1,
                    speed: 1000,
                    loop: true,
                    autoplay: true,
                    autoplay: {
                        delay: 2500,
                    },   
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    effect: 'fade',
                    fadeEffect: { 
                        crossFade: true 
                    }
                }
            }
        },
    };
</script>