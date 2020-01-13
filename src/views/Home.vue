<template>
  <div>
    <div>
      <Toolbar />
      <div class="home">
        <h1 class="home-title">BeeDrive</h1>
        <p class="home-subtitle">Easy way to share your Drive</p>
        <v-btn class="home-manage" width="180" height="40" to="file" color="primary">Manage</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from "../components/Toolbar";

export default {
  components: {
    Toolbar
  },
  data: () => ({})
};
</script>

<style scope>
.home {
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home-title {
  font-size: 100px;
  color: white;
  font-weight: bold;
}
.home-subtitle {
  font-size: 24px;
  color: white;
  font-weight: bold;
  margin-bottom: 12px;
}
</style>