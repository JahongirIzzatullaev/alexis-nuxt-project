<template>
    <div class="brand-logo-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12" data-aos="fade-up">
                    <h2 class="title">Our Clients</h2>
                    <p>Alexis has been honored to partner up with these clients.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12" data-aos="fade-up" data-aos-delay="300">
                    <div class="brand-logo-slider-container">
                        <swiper :options="brandLogoSlider" class="brand-logo-slider">
                            <div class="swiper-slide brand-logo-item" v-for="(logo, index) in brandLogoList" :key="index">
                                <a :href="logo.url">
                                    <img :src="logo.logoSrc" :alt="logo.alt">
                                </a>
                            </div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                brandLogoSlider: {
                    slidesPerView : 5,
                    loop: true,
                    speed: 1000,
                    spaceBetween : 30,
                    breakpoints: {
                        1200:{
                            slidesPerView : 5,
                            spaceBetween : 100
                        },

                        992:{
                            slidesPerView : 4,
                            spaceBetween : 90
                        },

                        768:{
                            slidesPerView : 3,
                            spaceBetween : 110

                        },

                        576:{
                            slidesPerView : 3,
                            spaceBetween : 60
                        },

                        380:{
                            slidesPerView : 3,
                            spaceBetween : 30
                        },

                        0:{
                            slidesPerView : 2,
                            spaceBetween : 30
                        }
                    }
                },

                brandLogoList: [
                    {
                        logoSrc: "/images/brand-logo/01.png",
                        alt: "brand name",
                        url: "#"
                    },
                    {
                        logoSrc: "/images/brand-logo/02.png",
                        alt: "brand name",
                        url: "#"
                    },
                    {
                        logoSrc: "/images/brand-logo/03.png",
                        alt: "brand name",
                        url: "#"
                    },
                    {
                        logoSrc: "/images/brand-logo/04.png",
                        alt: "brand name",
                        url: "#"
                    },
                    {
                        logoSrc: "/images/brand-logo/05.png",
                        alt: "brand name",
                        url: "#"
                    },
                ]
            }
        },
    };
</script>