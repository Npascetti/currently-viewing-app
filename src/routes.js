import App from './app'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '*',
        component: NotFound,
      },
    ],
  },
]
