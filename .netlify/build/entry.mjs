import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CvtYzfJT.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/about.astro.mjs');
const _page1 = () => import('./pages/blog/antigravity-myths-facts.astro.mjs');
const _page2 = () => import('./pages/blog/black-holes-gravity-explained.astro.mjs');
const _page3 = () => import('./pages/blog/cosmonauts-statements-gravity.astro.mjs');
const _page4 = () => import('./pages/blog/dark-matter-gravity.astro.mjs');
const _page5 = () => import('./pages/blog/elon-musk-gravity-stance.astro.mjs');
const _page6 = () => import('./pages/blog/equivalence-principle.astro.mjs');
const _page7 = () => import('./pages/blog/feynman-gravity-stance.astro.mjs');
const _page8 = () => import('./pages/blog/gravitational-constant.astro.mjs');
const _page9 = () => import('./pages/blog/gravitational-lensing.astro.mjs');
const _page10 = () => import('./pages/blog/gravitational-waves-discovery.astro.mjs');
const _page11 = () => import('./pages/blog/gravity-and-space-travel.astro.mjs');
const _page12 = () => import('./pages/blog/gravity-in-everyday-life.astro.mjs');
const _page13 = () => import('./pages/blog/gravity-on-other-planets.astro.mjs');
const _page14 = () => import('./pages/blog/history-of-gravity-theory.astro.mjs');
const _page15 = () => import('./pages/blog/instant-gravity-explained.astro.mjs');
const _page16 = () => import('./pages/blog/instant-gravity-revolution.astro.mjs');
const _page17 = () => import('./pages/blog/measuring-gravity-acceleration.astro.mjs');
const _page18 = () => import('./pages/blog/neutron-stars-extreme-gravity.astro.mjs');
const _page19 = () => import('./pages/blog/newton-vs-einstein-gravity.astro.mjs');
const _page20 = () => import('./pages/blog/quantum-gravity-challenge.astro.mjs');
const _page21 = () => import('./pages/blog/scientists-of-gravity.astro.mjs');
const _page22 = () => import('./pages/blog/ten-physicists-defined-gravity.astro.mjs');
const _page23 = () => import('./pages/blog/tides-and-gravity.astro.mjs');
const _page24 = () => import('./pages/blog/time-dilation-gravity.astro.mjs');
const _page25 = () => import('./pages/blog/what-is-gravity.astro.mjs');
const _page26 = () => import('./pages/blog/zero-gravity-microgravity.astro.mjs');
const _page27 = () => import('./pages/blog.astro.mjs');
const _page28 = () => import('./pages/sitemap.xml.astro.mjs');
const _page29 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/about.astro", _page0],
    ["src/pages/blog/antigravity-myths-facts.astro", _page1],
    ["src/pages/blog/black-holes-gravity-explained.astro", _page2],
    ["src/pages/blog/cosmonauts-statements-gravity.astro", _page3],
    ["src/pages/blog/dark-matter-gravity.astro", _page4],
    ["src/pages/blog/elon-musk-gravity-stance.astro", _page5],
    ["src/pages/blog/equivalence-principle.astro", _page6],
    ["src/pages/blog/feynman-gravity-stance.astro", _page7],
    ["src/pages/blog/gravitational-constant.astro", _page8],
    ["src/pages/blog/gravitational-lensing.astro", _page9],
    ["src/pages/blog/gravitational-waves-discovery.astro", _page10],
    ["src/pages/blog/gravity-and-space-travel.astro", _page11],
    ["src/pages/blog/gravity-in-everyday-life.astro", _page12],
    ["src/pages/blog/gravity-on-other-planets.astro", _page13],
    ["src/pages/blog/history-of-gravity-theory.astro", _page14],
    ["src/pages/blog/instant-gravity-explained.astro", _page15],
    ["src/pages/blog/instant-gravity-revolution.astro", _page16],
    ["src/pages/blog/measuring-gravity-acceleration.astro", _page17],
    ["src/pages/blog/neutron-stars-extreme-gravity.astro", _page18],
    ["src/pages/blog/newton-vs-einstein-gravity.astro", _page19],
    ["src/pages/blog/quantum-gravity-challenge.astro", _page20],
    ["src/pages/blog/scientists-of-gravity.astro", _page21],
    ["src/pages/blog/ten-physicists-defined-gravity.astro", _page22],
    ["src/pages/blog/tides-and-gravity.astro", _page23],
    ["src/pages/blog/time-dilation-gravity.astro", _page24],
    ["src/pages/blog/what-is-gravity.astro", _page25],
    ["src/pages/blog/zero-gravity-microgravity.astro", _page26],
    ["src/pages/blog/index.astro", _page27],
    ["src/pages/sitemap.xml.ts", _page28],
    ["src/pages/index.astro", _page29]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7ab684ae-c5ba-4f8a-a274-d26ada54b91f"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
