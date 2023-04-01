import fs from "fs"
import path from "path"
import process from "process"

export default [
  {
    text: "开始",
    items: [
      { text: "写在前面", link: "/started", },
    ],
  },
  {
    text: "服务",
    items: [
      { text: "定制", link: "/serve/custom", },
    ],
  }
];

function autoGenerate(dir) {
  let list = fs.readdirSync(path.join(process.cwd(), "docs", dir))
  return list
    .filter(name => name.endsWith(".md"))
    .map(name => {
      name = name.slice(0, -3)
      return {
        text: name,
        link: `/${dir}/${name}`
      }
    })
}
