export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    // component: './TableList/benchmark2017',
    routes: [
      {
        path: '/list/benchmark2017',
        name: 'Benchmark 2017',
        icon: 'smile',
        component: './TableList/benchmark2017',
      },
      {
        path: '/list/benchmark2006',
        name: 'Benchmark 2006',
        icon: 'smile',
        component: './TableList/benchmark2006',
      },
      {
        path: '/list/jbb2015',
        name: 'JBB 2015',
        icon: 'smile',
        component: './TableList/jbb2015',
      },
      {
        path: '/list/jvm2008',
        name: 'JVM 2008',
        icon: 'smile',
        component: './TableList/jvm2008',
      },
      {
        path: '/list/ssj2008',
        name: 'SSJ 2008',
        icon: 'smile',
        component: './TableList/ssj2008',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
