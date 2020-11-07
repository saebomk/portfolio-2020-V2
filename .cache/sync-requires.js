// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/i515643/Documents/GitHub/portfolio-2020/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/i515643/Documents/GitHub/portfolio-2020/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/i515643/Documents/GitHub/portfolio-2020/src/pages/404.js")),
  "component---src-pages-condition-builder-js": preferDefault(require("/Users/i515643/Documents/GitHub/portfolio-2020/src/pages/ConditionBuilder.js")),
  "component---src-pages-full-project-js": preferDefault(require("/Users/i515643/Documents/GitHub/portfolio-2020/src/pages/FullProject.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/i515643/Documents/GitHub/portfolio-2020/src/pages/index.js")),
  "component---src-pages-pattern-library-js": preferDefault(require("/Users/i515643/Documents/GitHub/portfolio-2020/src/pages/PatternLibrary.js")),
  "component---src-pages-supplier-invitation-ux-js": preferDefault(require("/Users/i515643/Documents/GitHub/portfolio-2020/src/pages/SupplierInvitationUX.js"))
}

exports.json = {
  "layout-index.json": require("/Users/i515643/Documents/GitHub/portfolio-2020/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/i515643/Documents/GitHub/portfolio-2020/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/i515643/Documents/GitHub/portfolio-2020/.cache/json/404.json"),
  "condition-builder.json": require("/Users/i515643/Documents/GitHub/portfolio-2020/.cache/json/condition-builder.json"),
  "full-project.json": require("/Users/i515643/Documents/GitHub/portfolio-2020/.cache/json/full-project.json"),
  "index.json": require("/Users/i515643/Documents/GitHub/portfolio-2020/.cache/json/index.json"),
  "pattern-library.json": require("/Users/i515643/Documents/GitHub/portfolio-2020/.cache/json/pattern-library.json"),
  "supplier-invitation-ux.json": require("/Users/i515643/Documents/GitHub/portfolio-2020/.cache/json/supplier-invitation-ux.json"),
  "404-html.json": require("/Users/i515643/Documents/GitHub/portfolio-2020/.cache/json/404-html.json")
}