<template>
    <div class="portfolio-area portfolio-default-area">
        <div class="container-fluid">
            <div v-masonry class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 portfolio-list box">
                <div class="item mix col cat--1 mb-30">
                    <!-- Single Portfolio Start -->
                    <div class="single-portfolio">
                        <div class="thumbnail">
                            <img src="/images/portfolio/portfolio-1.jpg" alt="portfolio">
                        </div>
                        <div class="content">
                            <h3 class="title">
                                <n-link to="/portfolio-details">Daniel Raclift</n-link>
                            </h3>
                            <p class="desc">Mango Fashion Lookbook Campaign</p>
                        </div>
                    </div>
                    <!-- Single Portfolio End -->
                </div>
                <div class="item mix col cat--1 cat--9 cat--8 cat--11 mb-30">
                    <!-- Single Portfolio Start -->
                    <div class="single-portfolio">
                        <div class="thumbnail">
                            <img src="/images/portfolio/portfolio-2.jpg" alt="portfolio">
                        </div>
                        <div class="content">
                            <h3 class="title">
                                <n-link to="/portfolio-details">Daniel Raclift</n-link>
                            </h3>
                            <p class="desc">Mango Fashion Lookbook Campaign</p>
                        </div>
                    </div>
                    <!-- Single Portfolio End -->
                </div>
                <div class="item mix col cat--2 cat--9 cat--10 mb-30">
                    <!-- Single Portfolio Start -->
                    <div class="single-portfolio">
                        <div class="thumbnail">
                            <img src="/images/portfolio/portfolio-3.jpg" alt="portfolio">
                        </div>
                        <div class="content">
                            <h3 class="title">
                                <n-link to="/portfolio-details">Daniel Raclift</n-link>
                            </h3>
                            <p class="desc">Mango Fashion Lookbook Campaign</p>
                        </div>
                    </div>
                    <!-- Single Portfolio End -->
                </div>
                <div class="item mix col cat--3 cat--8 cat--11 mb-30">
                    <!-- Single Portfolio Start -->
                    <div class="single-portfolio">
                        <div class="thumbnail">
                            <img src="/images/portfolio/portfolio-4.jpg" alt="portfolio">
                        </div>
                        <div class="content">
                            <h3 class="title">
                                <n-link to="/portfolio-details">Daniel Raclift</n-link>
                            </h3>
                            <p class="desc">Mango Fashion Lookbook Campaign</p>
                        </div>
                    </div>
                    <!-- Single Portfolio End -->
                </div>
                <div class="item mix col cat--1 cat--4 cat--9 mb-30">
                    <!-- Single Portfolio Start -->
                    <div class="single-portfolio">
                        <div class="thumbnail">
                            <img src="/images/portfolio/portfolio-5.jpg" alt="portfolio">
                        </div>
                        <div class="content">
                            <h3 class="title">
                                <n-link to="/portfolio-details">Daniel Raclift</n-link>
                            </h3>
                            <p class="desc">Mango Fashion Lookbook Campaign</p>
                        </div>
                    </div>
                    <!-- Single Portfolio End -->
                </div>
                <div class="item mix col cat--5 cat--3 cat--10 mb-30">
                    <!-- Single Portfolio Start -->
                    <div class="single-portfolio">
                        <div class="thumbnail">
                            <img src="/images/portfolio/portfolio-7.jpg" alt="portfolio">
                        </div>
                        <div class="content">
                            <h3 class="title">
                                <n-link to="/portfolio-details">Daniel Raclift</n-link>
                            </h3>
                            <p class="desc">Mango Fashion Lookbook Campaign</p>
                        </div>
                    </div>
                    <!-- Single Portfolio End -->
                </div>
                <div class="item mix col cat--2 cat--4 cat--9 mb-30">
                    <!-- Single Portfolio Start -->
                    <div class="single-portfolio">
                        <div class="thumbnail">
                            <img src="/images/portfolio/portfolio-8.jpg" alt="portfolio">
                        </div>
                        <div class="content">
                            <h3 class="title">
                                <n-link to="/portfolio-details">Daniel Raclift</n-link>
                            </h3>
                            <p class="desc">Mango Fashion Lookbook Campaign</p>
                        </div>
                    </div>
                    <!-- Single Portfolio End -->
                </div>
                <div class="item mix col cat--5 cat--6 mb-30">
                    <!-- Single Portfolio Start -->
                    <div class="single-portfolio">
                        <div class="thumbnail">
                            <img src="/images/portfolio/portfolio-6.jpg" alt="portfolio">
                        </div>
                        <div class="content">
                            <h3 class="title">
                                <n-link to="/portfolio-details">Daniel Raclift</n-link>
                            </h3>
                            <p class="desc">Mango Fashion Lookbook Campaign</p>
                        </div>
                    </div>
                    <!-- Single Portfolio End -->
                </div>
                <div class="item mix col cat--7 cat--11 cat--9 mb-30">
                    <!-- Single Portfolio Start -->
                    <div class="single-portfolio">
                        <div class="thumbnail">
                            <img src="/images/portfolio/portfolio-9.jpg" alt="portfolio">
                        </div>
                        <div class="content">
                            <h3 class="title">
                                <n-link to="/portfolio-details">Daniel Raclift</n-link>
                            </h3>
                            <p class="desc">Mango Fashion Lookbook Campaign</p>
                        </div>
                    </div>
                    <!-- Single Portfolio End -->
                </div>
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

        methods:{
            async onLoad(){
                await this.sleep(950)
                this.$redrawVueMasonry()
            },
            sleep(ms){
                return new Promise(resolve => setTimeout(resolve, ms))
            }
        }, 
    };
</script>
