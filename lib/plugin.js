import { gsap } from 'gsap'

export default (context, inject) => {
  inject('gsap', gsap)

  <% if (
    Object.keys(options.extraPlugins).length ||
    Object.keys(options.extraEases).length
    ) { %>
    if (process.client) {
      <% if (options.extraPlugins.cssRule) { %>
        const { CSSRulePlugin } = require('gsap/CSSRulePlugin')
        inject('CSSRulePlugin', CSSRulePlugin)
      <% } %>

      <% if (options.extraPlugins.draggable) { %>
        const { Draggable } = require('gsap/Draggable')
        inject('Draggable', Draggable)
      <% } %>

      <% if (options.extraPlugins.easel) { %>
        const { EaselPlugin } = require('gsap/EaselPlugin')
        inject('EaselPlugin', EaselPlugin)
      <% } %>

      <% if (options.extraPlugins.motionPath) { %>
        const { MotionPathPlugin } = require('gsap/MotionPathPlugin')
        inject('MotionPathPlugin', MotionPathPlugin)
      <% } %>

      <% if (options.extraPlugins.pixi) { %>
        const { PixiPlugin } = require('gsap/PixiPlugin')
        inject('PixiPlugin', PixiPlugin)
      <% } %>

      <% if (options.extraPlugins.text) { %>
        const { TextPlugin } = require('gsap/TextPlugin')
        inject('TextPlugin', TextPlugin)
      <% } %>

      <% if (options.extraPlugins.scrollTo) { %>
        const { ScrollToPlugin } = require('gsap/ScrollToPlugin')
        inject('ScrollToPlugin', ScrollToPlugin)
      <% } %>

      <% if (options.extraPlugins.scrollTrigger) { %>
        const { ScrollTrigger } = require('gsap/ScrollTrigger')
        inject('ScrollTrigger', ScrollTrigger)
      <% } %>

      <% if (options.extraEases.expoScaleEase) { %>
        const { ExpoScaleEase } = require('gsap/EasePack')
        inject('ExpoScaleEase', ExpoScaleEase)
      <% } %>
      
      <% if (options.extraEases.roughEase) { %>
        const { RoughEase } = require('gsap/EasePack')
        inject('RoughEase', RoughEase)
      <% } %>

      <% if (options.extraEases.slowMo) { %>
        const { SlowMo } = require('gsap/EasePack')
        inject('SlowMo', SlowMo)
      <% } %>
    }
  <% } %>
}
