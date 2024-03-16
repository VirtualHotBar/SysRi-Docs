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
    text: "软件定制",
    items: [
      { text: "定制须知", link: "/serve/custom" },
      { text: "装机软件", link: "/serve/custom/sysri" },
        { text: "WinPE", link: "/serve/custom/winpe" },
      { text: "Web网站", link: "/serve/custom/web" },
      { text: "其他定制", link: "/serve/custom/other" },
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
