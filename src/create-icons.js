import * as eva from "eva-icons/eva"
import fs from "fs-extra"

function kebabToPascal(string) {
  return string.split("-").map(p => `${p.charAt(0).toUpperCase()}${p.substring(1)}`).join("")
}

function createIconComponent(icon) {
  const component = `export default { name: "${icon.name}", content: \`${icon.contents}\` }`
  // For some, there is a rouge style tag
  return component.replace("<style/>", "")
}

export function createIcons(path) {
  // Empty folder
  fs.emptyDirSync(path)
  const listOfNames = []

  for (let icon of Object.values(eva.icons)) {
    const component = createIconComponent(icon)
    const name = kebabToPascal(icon.name)
    fs.writeFileSync(`${path}/${name}.js`, component)
    listOfNames.push(name)
  }
  const indexContent = listOfNames.map(name => `import ${name} from "./${name}.js"`).join("\n")
    + "\nexport {"
    + listOfNames.join(",")
    + "}"
  fs.writeFileSync(`${path}/index.js`, indexContent)
}
