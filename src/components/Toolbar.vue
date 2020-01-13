<template>
  <div id="app">
    <div id="nav">
      <v-toolbar flat class="toolbar">
        <v-toolbar-title class="white--text">BeeDrive</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="menu">
          <v-btn to="/" text class="white--text btn-menu">Home</v-btn>
          <v-btn to="/file" text class="white--text btn-menu">File</v-btn>
          <v-btn to="/upload" text class="white--text btn-menu">Upload</v-btn>
          <v-btn to="/copydrive" text class="white--text btn-menu">Copy Drive</v-btn>
        </v-toolbar-items>
        <div class="profile">
          <!-- <div>
          <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" alt="">
            </v-avatar>
          </div>
          <div class="name">
            <span>Bahtiar Anam</span>
            <span>bahtiaranam07@gmail.com</span>
          </div>
        </div>
          <div>-->
          <v-btn v-if="login == false" depressed color="primary">Login</v-btn>
          <v-btn v-if="login == true" depressed color="error">Logout</v-btn>
        </div>
      </v-toolbar>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    login: true
  })
};
</script>

<style>
#app {
  background-color: #09102f;
  color: white;
}
.toolbar {
  background-color: #09102f !important;
}
.v-btn__content {
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.v-btn__content:hover {
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.menu {
  margin-right: 40px;
}
.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.name {
  display: flex;
  flex-direction: column;
  float: left;
}
</style>