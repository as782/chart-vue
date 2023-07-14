<template>
  <div id="app" class="">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  height: 100%;
  position: relative;
  /* overflow: hidden; */
}

.card{
  box-shadow: -5px 5px 10px -4px #c5bbbb, 5px 5px 10px -4px #cdc1c1;
}
</style>
