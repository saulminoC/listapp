
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/listapp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/listapp"
  }
],
  assets: {
    'index.csr.html': {size: 122485, hash: '100e3ce999ef825832cd02f2fb7c1c0332dc2e399fb7fd546ea476d7075dfe9e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1025, hash: '837ab8857f1502592664fbeddffd79bfd0fefbabd6e6307e6b227edfce71d2fb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 141171, hash: 'bc2fedaad3820fb28da3ed461859a684e76c8b68c2d7226d4e743520fc797afa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RT3IZ2L7.css': {size: 689833, hash: 'Yv57gbj+tkM', text: () => import('./assets-chunks/styles-RT3IZ2L7_css.mjs').then(m => m.default)}
  },
};
