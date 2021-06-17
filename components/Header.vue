<template>
    <header class="header-area header-default" :class="{'is-sticky': isSticky}">
        <div class="container-fluid">
            <div class="row align-items-center justify-content-between">
                <!-- Hamburger Menu Start -->
                <div class="col-auto">
                    <div class="header-navigation-area d-none">

                    </div>
                    <div class="header-action-area">
                        <div class="mobile-menu-toggle" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                            <button class="toggle">
                                <i class="icon-top"></i>
                                <i class="icon-middle"></i>
                                <i class="icon-bottom"></i>
                            </button>
                            <span>menu</span>
                        </div>
                    </div>

                    

                </div>
                <!-- Hamburger Menu Start -->
                <!-- Header Logo Start -->
                <div class="col-auto">
                    <div class="header-logo-area">
                        <n-link to="/">
                            <img class="logo-main" src="/images/logo/logo.png" alt="Logo" />
                        </n-link>
                    </div>
                </div>
                <!-- Header Logo End -->
                <!-- Header Search Start -->
                <div class="col-auto">
                    <div class="header-search">
                        <button class="header-search-toggle"  @click="toggleClass('addClass', 'search-popup-open')">
                            <i class="icofont-search-1"></i>
                        </button>
                    </div>
                </div>
                <!-- Header Search Start -->
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        components: {
            // Navigation: () => import("@/components/Navigation"),
        },

        data() {
            return {
                isSticky: false,
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },

        methods: {
            // offcanvas mobile-menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

            //offcanvas search 
            toggleClass(addRemoveClass, className) {
                const el = document.querySelector('#search-popup');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>