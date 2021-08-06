import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
const path = require("path")

const iconFolder = path.resolve(__dirname, "src/icons/")
import { createIcons } from "./src/create-icons.js"
createIcons(iconFolder)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.BASE || "/",
})
