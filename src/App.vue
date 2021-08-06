<template>
  <div>
    <a
      href="https://akveo.github.io/eva-icons/"
      target="blank">
      <eva-icon name="heart-outline" /> Eva Icons
    </a> ·
    <a
      href="https://github.com/stefandesu/eva-icons-vue"
      target="blank">
      <eva-icon name="github-outline" /> GitHub
    </a> ·
    <a
      href="https://www.npmjs.com/package/eva-icons-vue"
      target="blank">
      <eva-icon name="npm-outline" /> npm
    </a>
  </div>
  <h1>Eva Icons for Vue 3</h1>
  <p>
    Tree-shakable icons for Vue 3 based on Eva Icons.
  </p>
  <p>
    Style:
    <a
      href=""
      :style="!mode ? 'font-weight: bold;' : ''"
      @click.prevent="mode = false">
      <eva-icon name="star-outline" /> Outline
    </a> ·
    <a
      href=""
      :style="mode ? 'font-weight: bold;' : ''"
      @click.prevent="mode = true">
      <eva-icon name="star" /> Fill
    </a>
  </p>
  <ul class="icon-list">
    <li
      v-for="name in iconNames"
      :key="name"
      :title="name">
      <eva-icon :name="name" />
    </li>
  </ul>
  <p style="font-size: .9em;">
    License: MIT (see <a
      href="https://github.com/stefandesu/eva-icons-vue/blob/main/LICENSE"
      target="blank">full license</a> and <a
        href="https://github.com/akveo/eva-icons/blob/master/LICENSE.txt"
        target="blank">Eva Icons' license</a>)
  </p>
</template>

<script>
import { defineComponent, ref, computed } from "vue"
import { EvaIcon, icons } from "."
EvaIcon.register(icons)

export default defineComponent({
  name: "App",
  components: {
    EvaIcon,
  },
  setup() {
    const mode = ref(false)
    const iconNames = computed(() => Object.values(icons).map(i => i.name).filter(name =>
      mode.value
        ? !name.endsWith("outline")
        : name.endsWith("outline"),
    ))

    return {
      mode,
      iconNames,
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto 0 auto;
  max-width: 600px;
}
.icon-list {
  font-size: 1.5em;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.icon-list > li {
  padding: 10px;
}
a {
  color: #aa4052;
  text-decoration: none;
}
a:hover {
  color: #690012;
}
</style>
