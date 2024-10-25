<template>
  <div class="page-header">
    <h3 class="fw-bold mb-3">{{ currentPage }}</h3>
    <ul class="breadcrumbs mb-3">
      <li class="nav-home">
        <router-link :to="{ name: 'dashboard' }">
          <i class="icon-home"></i>
        </router-link>
      </li>
      <!-- Looping berdasarkan total data dalam object -->
      <template v-for="(item, index) in dataBreadcump" :key="index">
        <li class="separator">
          <i class="icon-arrow-right"></i>
        </li>
        <li class="nav-item">
          <router-link :to="item.path">
            {{ item.label }}
          </router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  currentPage: {
    type: String,
    required: true,
  },
  dataBreadcump: {
    type: Array,
    required: true,
  },
});
</script>
