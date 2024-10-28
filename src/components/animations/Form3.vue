<template>
  <form @submit.prevent="submitForm">
    <!-- ------------------------------ Pekerjaan ------------------------------ -->
    <div class="form-floating form-floating-custom mb-3">
      <input
        type="text"
        class="form-control"
        v-model.trim="formData.pekerjaan"
        autocomplete="new-password"
        placeholder="pekerjaan"
      />
      <label for="pekerjaan">Pekerjaan</label>
    </div>
    <!-- ------------------------------ Deskripsi ------------------------------ -->
    <div class="form-floating form-floating-custom mb-3">
      <textarea
        type="text"
        class="form-control"
        v-model.trim="formData.deskripsi"
        autocomplete="new-password"
        placeholder="deskripsi"
      ></textarea>
      <label for="deskripsi">Deskripsi</label>
    </div>
    <!-- ------------------------------ Harapan ------------------------------ -->
    <div class="form-floating form-floating-custom mb-3">
      <textarea
        type="text"
        class="form-control"
        v-model.trim="formData.harapan"
        autocomplete="new-password"
        placeholder="harapan"
      ></textarea>
      <label for="harapan">Harapan</label>
    </div>
    <!-- ------------------------------ Button Submit -------------------------------->
    <div class="row">
      <div class="col-6">
        <button type="button" class="btn btn-warning" @click="prevForm">
          <i class="fas fa-arrow-left"></i> Previous
        </button>
      </div>
      <div class="col-6 text-end">
        <button type="submit" class="btn btn-success">
          <i class="fas fa-save"></i> Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
defineProps({
  formData: {
    type: Object,
    required: true,
  },
  prevForm: {
    type: Function,
    required: true,
  },
  submitForm: {
    type: Function,
    required: true,
  },
});
</script>
