<template>
    <div class="about-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <PageTitle />

        <ServiceArea />

        <TeamArea />

        <Blockquote />

        <GalleryOne />

        <AwardsAchieved />

        <OurClient />

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
            PageTitle: () => import('@/components/PageTitle'),
            ServiceArea: () => import('@/components/ServiceArea'),
            TeamArea: () => import('@/components/TeamArea'),
            Blockquote: () => import('@/components/Blockquote'),
            GalleryOne: () => import('@/components/GalleryOne'),
            AwardsAchieved: () => import('@/components/AwardsAchieved'),
            OurClient: () => import('@/components/OurClient'),
            Footer: () => import('@/components/Footer'),
        },

        head() {
            return {
                title: 'About'
            }
        },
    };
</script>


