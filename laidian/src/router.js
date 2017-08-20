import Vue from 'vue';
import Router from 'vue-router';
import DevNav from './DevNav';

Vue.use(Router);

let routes = [
  { path: '/', component: DevNav },
];

[
 /* eslint-disable no-return-assign */
  'record'
].forEach(m => routes = routes.concat(require(`./pages/${m}/router`).default));

const router = new Router({ routes });

export default router;
