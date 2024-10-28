<template>
  <form @submit.prevent>
    <!-- ------------------------------ No Telepon ------------------------------ -->
    <div class="form-floating form-floating-custom mb-3">
      <input
        type="text"
        class="form-control"
        v-model.trim="formData.noTelepon"
        autocomplete="new-password"
        placeholder="noTelepon"
      />
      <label for="noTelepon">No Telepon</label>
    </div>
    <!-- ------------------------------ Alamat ------------------------------ -->
    <div class="form-floating form-floating-custom mb-3">
      <input
        type="text"
        class="form-control"
        v-model.trim="formData.alamat"
        autocomplete="new-password"
        placeholder="alamat"
      />
      <label for="alamat">Alamat</label>
    </div>
    <!-- ------------------------------ Gaji ------------------------------ -->
    <div class="form-floating form-floating-custom mb-3">
      <input
        type="text"
        class="form-control"
        v-model.trim="formData.gaji"
        autocomplete="new-password"
        placeholder="gaji"
      />
      <label for="gaji">Gaji</label>
    </div>
    <!-- ------------------------------ Jumlah Anak ------------------------------ -->
    <div class="form-floating form-floating-custom mb-3">
      <input
        type="text"
        class="form-control"
        v-model.trim="formData.jumlahAnak"
        autocomplete="new-password"
        placeholder="jumlahAnak"
      />
      <label for="jumlahAnak">Jumlah Anak</label>
    </div>
    <!-- ------------------------------ Button Submit ------------------------------ -->
    <div class="row">
      <div class="col-6">
        <button type="button" class="btn btn-warning" @click="prevForm">
          <i class="fas fa-arrow-left"></i> Previous
        </button>
      </div>
      <div class="col-6 text-end">
        <button type="button" class="btn btn-success" @click="nextForm">
          <i class="fas fa-arrow-right"></i> Next
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
  nextForm: {
    type: Function,
    required: true,
  },
  prevForm: {
    type: Function,
    required: true,
  },
});
</script>
