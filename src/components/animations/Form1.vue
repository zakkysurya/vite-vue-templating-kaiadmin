<template>
  <form @submit.prevent="nextForm">
    <!-- ------------------------------ Photo Profile ------------------------------ -->
    <div class="form-floating form-floating-custom mb-3">
      <input
        type="file"
        class="form-control"
        id="image"
        placeholder="Upload file"
        @change="handleFileUpload"
        name="image"
        accept=".jpg, .jpeg, .png"
      />
      <label for="image">Photo Profile</label>
    </div>
    <!-- ------------------------------ Username ------------------------------ -->
    <div class="form-floating form-floating-custom mb-3">
      <input
        type="text"
        class="form-control"
        v-model.trim="formData.username"
        autocomplete="new-password"
        placeholder="username"
      />
      <label for="username">Username</label>
    </div>
    <!-- ------------------------------ Email ------------------------------ -->
    <div class="form-floating form-floating-custom mb-3">
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="name@example.com"
        autocomplete="new-password"
        v-model.trim="formData.email"
      />
      <label for="email">Email address</label>
    </div>
    <!-- ------------------------------ Password -------------------------------->
    <div class="form-floating form-floating-custom mb-3 position-relative">
      <input
        v-model.trim="formData.password"
        autocomplete="new-password"
        class="form-control"
        placeholder="Password"
      />
      <label for="password">Password</label>
    </div>
    <!-- ------------------------------ Role ------------------------------ -->
    <div class="form-floating form-floating-custom mb-3">
      <input
        type="text"
        class="form-control"
        v-model.trim="formData.role"
        autocomplete="new-password"
        placeholder="role"
      />
      <label for="role">Role</label>
    </div>
    <!-- ------------------------------ Button Submit ------------------------------ -->
    <div class="text-end">
      <button type="button" class="btn btn-success" @click="nextForm">
        <i class="fas fa-arrow-right"></i> Next
      </button>
    </div>
  </form>
</template>

<script setup>
defineProps({
  formData: {
    type: Object,
    required: true,
  },
  nextForm: {
    type: Function,
    required: true,
  },
  handleFileUpload: {
    type: Function,
    required: true,
  },
});
</script>
