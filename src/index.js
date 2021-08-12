import * as icons from "./icons"
import EvaIcon from "./components/EvaIcon.vue"

// Add install method
EvaIcon.install = (vue) => {
  vue.component(EvaIcon.name, EvaIcon)
}

// Install method so that it can be used as a plugin.
export const install = (vue) => {
  // Register EvaIcon
  vue.use(EvaIcon)
  // Register all icons
  EvaIcon.register(icons)
}

export * from "./icons"
export { icons }
export { EvaIcon }

// Shared CSS
// import "./shared.css"
