<template>
  <div>
    <div>
      <Toolbar />
      <div class="file">
        <div>
          <v-simple-table fixed-header dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Create time</th>
                  <th class="text-left">Size</th>
                  <th class="text-left">Direct DDL</th>
                  <th class="text-left">Views</th>
                  <th class="text-left">Act</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in file" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.time }}</td>
                  <td>{{ item.size }}</td>
                  <td>
                    <v-checkbox v-model="item.direct"></v-checkbox>
                  </td>
                  <td>{{ item.views }}</td>
                  <td>
                    <v-icon>mdi-pencil</v-icon>
                    <v-icon>mdi-delete</v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
        <div class="file-btn">
          <v-btn block color="primary">Get Link</v-btn>
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
  data: () => ({
    file: [
      {
        name: "Frozen Yogurt",
        time: "12 / 12 / 12",
        size: "2.56 GB",
        direct: true,
        views: "12"
      },
      {
        name: "Frozen Yogurt",
        time: "12 / 12 / 12",
        size: "2.56 GB",
        direct: false,
        views: "12"
      },
      {
        name: "Frozen Yogurt",
        time: "12 / 12 / 12",
        size: "2.56 GB",
        direct: true,
        views: "12"
      },
      {
        name: "Frozen Yogurt",
        time: "12 / 12 / 12",
        size: "2.56 GB",
        direct: false,
        views: "12"
      },
      {
        name: "Frozen Yogurt",
        time: "12 / 12 / 12",
        size: "2.56 GB",
        direct: false,
        views: "12"
      }
    ]
  })
};
</script>

<style>
.file {
  padding: 60px 100px 20px 100px;
}
.file-btn {
  width: 200px;
  margin: 20px 0px 40px 0px;
  float: right;
}
</style>