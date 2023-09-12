const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/riccardo/Desktop/dev/personal/personal-website/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/riccardo/Desktop/dev/personal/personal-website/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/riccardo/Desktop/dev/personal/personal-website/src/pages/index.js"))),
  "component---src-templates-portfolio-item-jsx": hot(preferDefault(require("/Users/riccardo/Desktop/dev/personal/personal-website/src/templates/portfolio-item.jsx")))
}

