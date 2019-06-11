<template>
  <div class="job-list-body container mx-auto">
    <div class="input-group mb-md-auto search-con col-md-6 mx-auto">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon3">SEARCH :</span>
      </div>
      <input type="text"
             v-model="search"
             placeholder="Search Job or City name.."
             class="form-control"
             id="basic-url"
             aria-describedby="basic-addon3">
    </div>

    <h2>Job List</h2>
    <div class="list-group">
      <div v-for="item in filteredData" class="list-group-item col-md-10 mx-auto">
        <div class="col job-list-item"
             @click="goDetail(item.jobId)">
          <h4 class="text-left">{{item.positionName}}</h4>
          <p class="text-left">{{item.companyName}}</p>
          <p class="text-left text-uppercase">{{item.cityName}}</p>
          <p class="float-right">{{item.durationDay}}</p>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { jobListDummyData } from '../utils/JobListDummyData';

export default {
  name: 'JobList',
  data() {
    return {
      search: '',
      jobList: jobListDummyData,
    };
  },
  methods: {
    goDetail(id) {
      this.$router.push(`/job-detail/${id}`);
    },
  },
  computed: {
    filteredData() {
      return this.jobList.filter((job) => {
        const key = `${job.positionName} ${job.cityName}`;
        return key.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};

</script>
<style lang="scss">
  @import 'JobList';
</style>
