<template>
  <div class="container job-detail-body">
    <div class="col h-50 d-inline-block">
      <br>
      <p class="text-right">{{jobDetail.durationDay}}</p>
      <h3 class="text-left">{{jobDetail.companyName}}</h3>
      <p class="text-left text-uppercase">{{jobDetail.cityName}}</p>
      <hr>
      <p class="text-left text-uppercase">{{jobDetail.positionName}}</p>
      <p class="text-left">{{jobDetail.description}}</p>
      <br>
      <hr>
      <button class="btn btn-info float-right apply-button" v-on:click="apply">Apply</button>
    </div>
  </div>

</template>
<script>
  import {jobDetailsDummyData} from '../utils/JobDetailsDummyData';

  export default {
    name: 'JobDetail',
    data() {
      return {
        jobList: jobDetailsDummyData,
        jobDetail: undefined,
      };
    },
    created() {
      const errorObj = {
        jobId: '',
        positionName: 'Detay bulunamadı !!',
        companyName: '',
        durationDay: 0,
        cityName: '',
        description: ''
      };
      const detail = this.jobList.find((job) => {
        return (this.$route.params.id === job.jobId);
      });
      this.jobDetail = detail ? detail : errorObj;
    },
    methods: {
      apply() {
        alert('Applied!!!');
        this.$router.push('/job-list')

      }
    },
  };
</script>
<style lang="scss">
  @import 'JobDetail';
</style>
