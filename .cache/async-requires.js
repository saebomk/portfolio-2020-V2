// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-condition-builder-js": () => import("./../../../src/pages/ConditionBuilder.js" /* webpackChunkName: "component---src-pages-condition-builder-js" */),
  "component---src-pages-full-project-js": () => import("./../../../src/pages/FullProject.js" /* webpackChunkName: "component---src-pages-full-project-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-pattern-library-js": () => import("./../../../src/pages/PatternLibrary.js" /* webpackChunkName: "component---src-pages-pattern-library-js" */),
  "component---src-pages-supplier-invitation-ux-js": () => import("./../../../src/pages/SupplierInvitationUX.js" /* webpackChunkName: "component---src-pages-supplier-invitation-ux-js" */)
}

