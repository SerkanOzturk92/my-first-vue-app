import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import JobList from '@/components/JobList';
import JobDetail from '@/components/JobDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/job-list',
      name: 'JobList',
      component: JobList,
    },
    {
      path: '/job-detail/:id',  //TODO: url ile id yollamaya bakılacak.
      name: 'JobDetail',
      component: JobDetail,
    },
    { path: '*', redirect: '/job-list' }
  ],
});
