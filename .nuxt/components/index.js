export { default as AboutOne } from '../..\\components\\AboutOne.vue'
export { default as AwardsAchieved } from '../..\\components\\AwardsAchieved.vue'
export { default as Blockquote } from '../..\\components\\Blockquote.vue'
export { default as BlogDetailsContent } from '../..\\components\\BlogDetailsContent.vue'
export { default as BlogGridWrapper } from '../..\\components\\BlogGridWrapper.vue'
export { default as CommentForm } from '../..\\components\\CommentForm.vue'
export { default as CommentList } from '../..\\components\\CommentList.vue'
export { default as ContactForm } from '../..\\components\\ContactForm.vue'
export { default as ContactWrapper } from '../..\\components\\ContactWrapper.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as GalleryOne } from '../..\\components\\GalleryOne.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Hero } from '../..\\components\\Hero.vue'
export { default as MobileNavigation } from '../..\\components\\MobileNavigation.vue'
export { default as Navigation } from '../..\\components\\Navigation.vue'
export { default as OffCanvasMobileMenu } from '../..\\components\\OffCanvasMobileMenu.vue'
export { default as OurClient } from '../..\\components\\OurClient.vue'
export { default as PageTitle } from '../..\\components\\PageTitle.vue'
export { default as PortfolioDetailsContent } from '../..\\components\\PortfolioDetailsContent.vue'
export { default as PortfolioFilterWrapper } from '../..\\components\\PortfolioFilterWrapper.vue'
export { default as SearchPopup } from '../..\\components\\SearchPopup.vue'
export { default as ServiceArea } from '../..\\components\\ServiceArea.vue'
export { default as TeamArea } from '../..\\components\\TeamArea.vue'

export const LazyAboutOne = import('../..\\components\\AboutOne.vue' /* webpackChunkName: "components/about-one" */).then(c => wrapFunctional(c.default || c))
export const LazyAwardsAchieved = import('../..\\components\\AwardsAchieved.vue' /* webpackChunkName: "components/awards-achieved" */).then(c => wrapFunctional(c.default || c))
export const LazyBlockquote = import('../..\\components\\Blockquote.vue' /* webpackChunkName: "components/blockquote" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogDetailsContent = import('../..\\components\\BlogDetailsContent.vue' /* webpackChunkName: "components/blog-details-content" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogGridWrapper = import('../..\\components\\BlogGridWrapper.vue' /* webpackChunkName: "components/blog-grid-wrapper" */).then(c => wrapFunctional(c.default || c))
export const LazyCommentForm = import('../..\\components\\CommentForm.vue' /* webpackChunkName: "components/comment-form" */).then(c => wrapFunctional(c.default || c))
export const LazyCommentList = import('../..\\components\\CommentList.vue' /* webpackChunkName: "components/comment-list" */).then(c => wrapFunctional(c.default || c))
export const LazyContactForm = import('../..\\components\\ContactForm.vue' /* webpackChunkName: "components/contact-form" */).then(c => wrapFunctional(c.default || c))
export const LazyContactWrapper = import('../..\\components\\ContactWrapper.vue' /* webpackChunkName: "components/contact-wrapper" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyGalleryOne = import('../..\\components\\GalleryOne.vue' /* webpackChunkName: "components/gallery-one" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyHero = import('../..\\components\\Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const LazyMobileNavigation = import('../..\\components\\MobileNavigation.vue' /* webpackChunkName: "components/mobile-navigation" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigation = import('../..\\components\\Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c))
export const LazyOffCanvasMobileMenu = import('../..\\components\\OffCanvasMobileMenu.vue' /* webpackChunkName: "components/off-canvas-mobile-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyOurClient = import('../..\\components\\OurClient.vue' /* webpackChunkName: "components/our-client" */).then(c => wrapFunctional(c.default || c))
export const LazyPageTitle = import('../..\\components\\PageTitle.vue' /* webpackChunkName: "components/page-title" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfolioDetailsContent = import('../..\\components\\PortfolioDetailsContent.vue' /* webpackChunkName: "components/portfolio-details-content" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfolioFilterWrapper = import('../..\\components\\PortfolioFilterWrapper.vue' /* webpackChunkName: "components/portfolio-filter-wrapper" */).then(c => wrapFunctional(c.default || c))
export const LazySearchPopup = import('../..\\components\\SearchPopup.vue' /* webpackChunkName: "components/search-popup" */).then(c => wrapFunctional(c.default || c))
export const LazyServiceArea = import('../..\\components\\ServiceArea.vue' /* webpackChunkName: "components/service-area" */).then(c => wrapFunctional(c.default || c))
export const LazyTeamArea = import('../..\\components\\TeamArea.vue' /* webpackChunkName: "components/team-area" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
export function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
