<template>
  <div id="app">
    <div id="nav">
      <a :href="redirect" target="_blank">Login</a>
      <br>
      <br>
      {{ accessToken }}
      {{ scope }}
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name : 'BDrive',
  data(){
    return{
      redirect: 'https://l.facebook.com/l.php?u=https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fv2%2Fauth%3Faccess_type%3Doffline%26client_id%3D847909313573-4429jb4ca8th7crhfg5773arg0gl4gd2.apps.googleusercontent.com%26prompt%3Dconsent%26redirect_uri%3Dhttp%253A%252F%252Fbeedrive.tech%252Flogin%26response_type%3Dcode%26scope%3Dhttps%253A%252F%252Fwww.googleapis.com%252Fauth%252Fuserinfo.email%2520https%253A%252F%252Fwww.googleapis.com%252Fauth%252Fuserinfo.profile%26fbclid%3DIwAR2SS4lCYH1Qul1s8w0YxLXZBzdyIfSdXOlCj3r_AZJRGo71BrEJskpW7wU&h=AT1wWzsdVmm6dWnRATcss0lUZODgs7PPHLt_erp4gxR7teA0br_LmCSnkqspNg472I3WTj1OdtC6O__tLxgWZ0KW6sp_Iu0nl0HgJz0o7Hegx05AtSrWKKVY9UnIRQ',
      url: ''
    }
  },
  computed: {
    accessToken() {
      return this.$route.query.code
    }
  },

  methods:{
  }
}
</script>

<style>
</style>
