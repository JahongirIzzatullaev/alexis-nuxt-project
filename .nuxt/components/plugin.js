import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  AboutOne: () => import('../..\\components\\AboutOne.vue' /* webpackChunkName: "components/about-one" */).then(c => wrapFunctional(c.default || c)),
  AwardsAchieved: () => import('../..\\components\\AwardsAchieved.vue' /* webpackChunkName: "components/awards-achieved" */).then(c => wrapFunctional(c.default || c)),
  Blockquote: () => import('../..\\components\\Blockquote.vue' /* webpackChunkName: "components/blockquote" */).then(c => wrapFunctional(c.default || c)),
  BlogDetailsContent: () => import('../..\\components\\BlogDetailsContent.vue' /* webpackChunkName: "components/blog-details-content" */).then(c => wrapFunctional(c.default || c)),
  BlogGridWrapper: () => import('../..\\components\\BlogGridWrapper.vue' /* webpackChunkName: "components/blog-grid-wrapper" */).then(c => wrapFunctional(c.default || c)),
  CommentForm: () => import('../..\\components\\CommentForm.vue' /* webpackChunkName: "components/comment-form" */).then(c => wrapFunctional(c.default || c)),
  CommentList: () => import('../..\\components\\CommentList.vue' /* webpackChunkName: "components/comment-list" */).then(c => wrapFunctional(c.default || c)),
  ContactForm: () => import('../..\\components\\ContactForm.vue' /* webpackChunkName: "components/contact-form" */).then(c => wrapFunctional(c.default || c)),
  ContactWrapper: () => import('../..\\components\\ContactWrapper.vue' /* webpackChunkName: "components/contact-wrapper" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  GalleryOne: () => import('../..\\components\\GalleryOne.vue' /* webpackChunkName: "components/gallery-one" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Hero: () => import('../..\\components\\Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c)),
  MobileNavigation: () => import('../..\\components\\MobileNavigation.vue' /* webpackChunkName: "components/mobile-navigation" */).then(c => wrapFunctional(c.default || c)),
  Navigation: () => import('../..\\components\\Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c)),
  OffCanvasMobileMenu: () => import('../..\\components\\OffCanvasMobileMenu.vue' /* webpackChunkName: "components/off-canvas-mobile-menu" */).then(c => wrapFunctional(c.default || c)),
  OurClient: () => import('../..\\components\\OurClient.vue' /* webpackChunkName: "components/our-client" */).then(c => wrapFunctional(c.default || c)),
  PageTitle: () => import('../..\\components\\PageTitle.vue' /* webpackChunkName: "components/page-title" */).then(c => wrapFunctional(c.default || c)),
  PortfolioDetailsContent: () => import('../..\\components\\PortfolioDetailsContent.vue' /* webpackChunkName: "components/portfolio-details-content" */).then(c => wrapFunctional(c.default || c)),
  PortfolioFilterWrapper: () => import('../..\\components\\PortfolioFilterWrapper.vue' /* webpackChunkName: "components/portfolio-filter-wrapper" */).then(c => wrapFunctional(c.default || c)),
  SearchPopup: () => import('../..\\components\\SearchPopup.vue' /* webpackChunkName: "components/search-popup" */).then(c => wrapFunctional(c.default || c)),
  ServiceArea: () => import('../..\\components\\ServiceArea.vue' /* webpackChunkName: "components/service-area" */).then(c => wrapFunctional(c.default || c)),
  TeamArea: () => import('../..\\components\\TeamArea.vue' /* webpackChunkName: "components/team-area" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
