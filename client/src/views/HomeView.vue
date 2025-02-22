<template>
  <div class="home-view">
    <div class="home">
      <h2>{{ home }}</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      home: ''
    }
  },
  async created() {
    await axios.get('/')
    .then((res) => {
      this.home = res.data;
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
</script>
