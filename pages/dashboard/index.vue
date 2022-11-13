<template>
  <div id="wrapper">
    <SidebarAdmin />
    <div id="content-wrapper" class="d-flex flex-column">

    </div>
  </div>
</template>

<script>
import SidebarAdmin from "~/components/SidebarAdmin/SidebarAdmin.vue";
export default {
  layout: "admin",
  name: "Dashboard",
  components: {
    SidebarAdmin,
  },
  async asyncData() {
    return {
      scenes: [],
      javs: [],
      idols: [],
      categories: []
    };
  },
  methods: {

  },
};
</script>