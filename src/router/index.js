import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import publicBattles from '@/components/publicBattles';
import privateBattles from '@/components/privateBattles';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/publicBattles',
      name: 'publicBattles',
      component: publicBattles,
    },
    {
      path: '/privateBattles',
      name: 'privateBattles',
      component: privateBattles,
    },
  ],
});
