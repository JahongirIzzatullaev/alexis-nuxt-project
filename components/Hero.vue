<template>
    <div class="intro-slider-wrap">
        <div class="intro-slider position-relative">
            <swiper :options="introSlider">
                <div class="swiper-slide" v-for="(hero, index) in heroData" :key="index">
                    <div class="intro-section overlay" :style="{ backgroundImage: `url(${hero.imgSrc})` }">
                        <div class="container">
                            <div class="row row-cols-lg-1 row-cols-1">
                                <div class="col align-self-center">
                                    <div class="intro-content">
                                        <span class="sub-title">{{ hero.subTitle }}</span>
                                        <h2 class="title">{{ hero.title }}</h2>
                                        <div class="desc">
                                            <p>{{ hero.desc }}</p>
                                        </div>
                                        <n-link :to="hero.btnUrl" class="intro-btn">Explore now</n-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper>
            <div class="swiper-pagination home1-slider-pagination"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                introSlider: {
                    loop: true,
                    speed: 750,
                    spaceBetween: 30,
                    slidesPerView: 1,
                    pagination: {
                        el: '.home1-slider-pagination',
                        clickable: true,
                    }
                },

                heroData: [
                    {
                        imgSrc: "/images/hero-slider/hero1.jpg",
                        subTitle: "Inspire 2021",
                        title: "Vouge italia deember campaign",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        btnUrl: "#"
                    },
                    {
                        imgSrc: "/images/hero-slider/hero2.jpg",
                        subTitle: "Inspire 2022",
                        title: "Vouge italia deember campaign",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        btnUrl: "#"
                    }
                ]
            }
        },
    };
</script>