/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import { createPinia } from 'pinia'

export function registerPlugins (app) {
  const pinia = createPinia()
  loadFonts()
  app.use(vuetify)
  app.use(pinia)
  app.use(router)

}
