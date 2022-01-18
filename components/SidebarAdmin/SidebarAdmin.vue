<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <nuxt-link
      to="/dashboard"
      class="sidebar-brand d-flex align-items-center justify-content-center"
    >
      <div class="sidebar-brand-text mx-3">Dashboard</div>
    </nuxt-link>
    <hr class="sidebar-divider my-0" />
    <li class="nav-item active">
      <nuxt-link to="/" class="nav-link">
        <font-awesome-icon :icon="['fas', 'undo-alt']" />
        <span>Return to Site</span>
      </nuxt-link>
    </li>
    <hr class="sidebar-divider" />
    <div class="sidebar-heading">Manage Files</div>
    <li class="nav-item">
      <nuxt-link to="/dashboard/uploadFile" class="nav-link">
        <font-awesome-icon :icon="['fas', 'cloud-upload-alt']" />
        <span>Upload</span>
      </nuxt-link>
    </li>
    <hr class="sidebar-divider" />
    <div class="sidebar-heading">New Content</div>
    <li class="nav-item">
      <nuxt-link to="/dashboard/newScene" class="nav-link">
        <font-awesome-icon :icon="['fas', 'plus-square']" />
        <span>New Scene</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/dashboard/newJav" class="nav-link">
        <font-awesome-icon :icon="['fas', 'plus-square']" />
        <span>New Jav</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/dashboard/newIdol" class="nav-link">
        <font-awesome-icon :icon="['fas', 'plus-square']" />
        <span>New Idol</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/newCategory" class="nav-link">
        <font-awesome-icon :icon="['fas', 'plus-square']" />
        <span>New Category</span>
      </nuxt-link>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider" />
    <!-- Heading -->
    <div class="sidebar-heading">Data Center</div>
    <li class="nav-item">
      <nuxt-link to="/editScenes" class="nav-link">
        <font-awesome-icon :icon="['fas', 'stream']" />
        <span>Scenes</span>
        <span>{{scenes.length}}</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/editJavs" class="nav-link">
        <font-awesome-icon :icon="['fas', 'stream']" />
        <span>Javs</span>
        <span>{{videos.length}}</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/editIdols" class="nav-link">
        <font-awesome-icon :icon="['fas', 'stream']" />
        <span>Idols</span>
        <span>{{idols.length}}</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/editCategories" class="nav-link">
        <font-awesome-icon :icon="['fas', 'stream']" />
        <span>Categories</span>
        <span>{{categories.length}}</span>
      </nuxt-link>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />
    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle" @click="logout()">
        <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="icon-navbar" />
      </button>
    </div>
  </ul>
</template>

<script>
export default {
  name: "SidebarAdmin",
  props: {
    scenes: Array,
    videos: Array,
    categories: Array,
    idols: Array
  },
  data() {
    return {};
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logout");
        this.$router.push({ path: "/" });
      } catch (e) {}
    }
  }
};
</script>

<style lang="scss">
@import "./sidebarAdmin.scss";
</style>