import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'Review',
        component: () => import('pages/ReviewPage.vue'),
      },
      {
        path: 'FAQ',
        component: () => import('pages/FAQPage.vue'),
      },
      {
        path: 'NavBar',
        component: () => import('pages/NavBarPage.vue'),
      },
      {
        path: 'LastVisitedList',
        component: () => import('pages/LastVisitedListPage.vue'),
      },
      {
        path: 'Articles',
        component: () => import('pages/AllArticlesPage.vue'),
      },
      {
        path: 'Article/:id',
        component: () => import('pages/ArticlePage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
