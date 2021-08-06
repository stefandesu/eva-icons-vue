<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
    :fill="fill"
    style="top: .125em; position: relative;"
    v-html="icons[name] || ''" />
</template>
<script>
import { defineComponent, reactive } from "vue"
const icons = reactive({})
const component = defineComponent({
  name: "EvaIcon",
  props: {
    name: { type: String, required: true },
    size: { type: [Number, String], default: "1em" },
    fill: { type: String, default: "currentColor" },
  },
  setup() {
    return { icons }
  },
})
component.register = (icon) => {
  if (!icon) return
  if (icon.content) {
    icons[icon.name] = icon.content
  } else if (Array.isArray(icon)) {
    icon.forEach(i => component.register(i))
  } else if (typeof icon === "object") {
    Object.values(icon).forEach(i => component.register(i))
  }
}
export default component
</script>
