<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <nuxt-link
      :to="localePath({ name: 'dashboard' })"
      class="sidebar-brand d-flex align-items-center justify-content-center"
    >
      <div class="sidebar-brand-text mx-3">{{ $t('sidebarAdmin.dashboard') }}</div>
    </nuxt-link>
    <hr class="sidebar-divider my-0" />
    <li class="nav-item active">
      <nuxt-link :to="localePath('index')" class="nav-link">
        <font-awesome-icon :icon="['fas', 'undo-alt']" />
        <span>{{ $t('sidebarAdmin.return') }}</span>
      </nuxt-link>
    </li>
    <hr class="sidebar-divider" />
    <div class="sidebar-heading">{{ $t('sidebarAdmin.manageFiles') }}</div>
    <li class="nav-item">
      <nuxt-link :to="localePath({ name: 'dashboard-uploadFile' })" class="nav-link">
        <font-awesome-icon :icon="['fas', 'cloud-upload-alt']" />
        <span>{{ $t('sidebarAdmin.upload') }}</span>
      </nuxt-link>
    </li>
    <hr class="sidebar-divider" />
    <div class="sidebar-heading">{{ $t('sidebarAdmin.newContent') }}</div>
    <li class="nav-item">
      <nuxt-link :to="localePath({ name: 'dashboard-newScene' })" class="nav-link">
        <font-awesome-icon :icon="['fas', 'plus-square']" />
        <span>{{ $t('sidebarAdmin.addScene') }}</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="localePath({ name: 'dashboard-newJav' })" class="nav-link">
        <font-awesome-icon :icon="['fas', 'plus-square']" />
        <span>{{ $t('sidebarAdmin.addJav') }}</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="localePath({ name: 'dashboard-newIdol' })" class="nav-link">
        <font-awesome-icon :icon="['fas', 'plus-square']" />
        <span>{{ $t('sidebarAdmin.addIdol') }}</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="localePath({ name: 'dashboard-newCategory' })" class="nav-link">
        <font-awesome-icon :icon="['fas', 'plus-square']" />
        <span>{{ $t('sidebarAdmin.addCategory') }}</span>
      </nuxt-link>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider" />
    <!-- Heading -->
    <div class="sidebar-heading">{{ $t('sidebarAdmin.dataCenter') }}</div>
    <li class="nav-item">
      <nuxt-link :to="localePath({ name: 'dashboard-editScenes' })" class="nav-link">
        <font-awesome-icon :icon="['fas', 'stream']" />
        <span>{{ $t('sidebarAdmin.listScenes') }}</span>
        <span>{{scenes.length}}</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="localePath({ name: 'dashboard-editJavs' })" class="nav-link">
        <font-awesome-icon :icon="['fas', 'stream']" />
        <span>{{ $t('sidebarAdmin.listJavs') }}</span>
        <span>{{videos.length}}</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="localePath({ name: 'dashboard-editIdols' })" class="nav-link">
        <font-awesome-icon :icon="['fas', 'stream']" />
        <span>{{ $t('sidebarAdmin.listIdols') }}</span>
        <span>{{idols.length}}</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link :to="localePath({ name: 'dashboard-editCategories' })" class="nav-link">
        <font-awesome-icon :icon="['fas', 'stream']" />
        <span>{{ $t('sidebarAdmin.listCategories') }}</span>
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