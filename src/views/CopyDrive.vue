<template>
  <div>
    <div>
      <Toolbar />
      <div class="cooldown">
        <div class="copyDrive-page">
          <h1 class="cd-title">Copy file from public google drive links to your drive</h1>
          <small
            class="cd-subtitle"
          >if the file is already yours, we will insert it into our database instead of copying it.</small>
          <div class="selectarea">
            <v-textarea
              outlined
              class="cd-text"
              background-color="#0e2b60"
              color="blue"
              type="link"
              placeholder="https://google.com?code=2knkjfndif892enjkfn8923nkff"
            ></v-textarea>
          </div>
        </div>
        <div class="cd-manage">
          <v-btn width="180" height="40" color="primary">Upload</v-btn>
        </div>
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
.copyDrive-page {
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2.5cm;
}
.cd-title {
  font-size: 20px;
  color: white;
  font-weight: bold;
  margin-bottom: 6px;
}
.selectarea {
  width: 1100px;
  margin-top: 20px;
}
.cd-manage {
  float: right;
  margin-right: 125px;
}
.v-text-field__slot textarea {
  color: #c8d6e5 !important;
  padding: 10px !important;
  height: 150px;
}
</style>