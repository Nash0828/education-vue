import Vue from 'vue'
import Router from 'vue-router'
import Error from 'views/error'
import NotFound from 'views/error/404'
import Login from 'views/login'
import AddressMain from 'views/address/main'
import AddressEdit from 'views/address/edit'
import MeMain from 'views/me/main'
import MeIndex from 'views/me/index'
import MeProfile from 'views/me/profile'
import MeCertificate from 'views/me/certificate'
import MeHistory from 'views/me/history'
import CourseMain from 'views/course/main'
import CourseType from 'views/course/type'
import CourseLevel from 'views/course/level'
import CourseFilter from 'views/course/filter'
import CourseQuestion from 'views/course/question'
import TermsMain from 'views/terms/main'
import TermsIndex from 'views/terms/index'
import TermsAgreement from 'views/terms/agreement'
import TermsPrivacy from 'views/terms/privacy'
import HomeIndex from 'views/home'

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, saveTop) {
    if (saveTop) {
      return saveTop
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/error',
      name: 'Error',
      component: Error,
      meta: {
        title: 'Error'
      }
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      meta: {
        title: '404'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeIndex,
      meta: {
        title: '课程'
      }
    },
    {
      path: '/course',
      component: CourseMain,
      children: [
        {
          path: '/',
          redirect: 'type'
        },
        {
          path: 'type',
          component: CourseType,
          meta: {
            title: '选择课程'
          }
        },
        {
          path: 'type/:type',
          component: CourseLevel,
          props: true,
          meta: {
            title: '选择课程'
          }
        },
        {
          path: 'filter',
          component: CourseFilter,
          meta: {
            title: '选择课程'
          }
        },
        {
          path: 'question',
          component: CourseQuestion,
          meta: {
            title: '答题'
          }
        }
      ]
    },
    {
      path: '/terms',
      component: TermsMain,
      children: [
        {
          path: '/',
          redirect: 'index'
        },
        {
          path: 'index',
          component: TermsIndex,
          meta: {
            title: '服务条款'
          }
        },
        {
          path: 'agreement',
          component: TermsAgreement,
          meta: {
            title: '用户协议'
          }
        },
        {
          path: 'privacy',
          component: TermsPrivacy,
          meta: {
            title: '隐私政策'
          }
        }
      ]
    },
    {
      path: '/address',
      component: AddressMain,
      children: [
        {
          path: '/',
          redirect: 'edit'
        },
        {
          path: 'edit',
          component: AddressEdit,
          meta: {
            title: '编辑地址',
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/me',
      component: MeMain,
      children: [
        {
          path: '/',
          redirect: 'index'
        },
        {
          path: 'index',
          component: MeIndex,
          meta: {
            title: '我的'
          }
        },
        {
          path: 'profile',
          component: MeProfile,
          meta: {
            title: '个人资料'
          }
        },
        {
          path: 'certificate',
          component: MeCertificate,
          meta: {
            title: '我的证书'
          }
        },
        {
          path: 'history',
          component: MeHistory,
          meta: {
            title: '历史课程'
          }
        }
      ]
    },
    {
      path: '/test',
      component: () => import('views/test')
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
