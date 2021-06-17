<template>
    <div class="portfolio-details-wrapper">

        <Header />

        <SearchPopup />

        <OffCanvasMobileMenu />

        <PortfolioFilterWrapper />

        <Footer />

        <client-only>
            <back-to-top class="scroll-top" bottom="30px">
                <i class="arrow-top icofont-rounded-up"></i>
                <i class="arrow-bottom icofont-rounded-up"></i>
            </back-to-top>
        </client-only>

    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            PortfolioFilterWrapper: () => import('@/components/PortfolioFilterWrapper'),
            Footer: () => import('@/components/Footer'),
        },

        head() {
            return {
                title: 'Portfolio'
            }
        },
    };
</script>


