<template>
  <div class="row">
    <div class="col-md-3 col-lg-3">
      <!-- Gambar profile -->
      <img
        v-if="formData.image"
        :src="imageURL"
        class="img-thumbnail"
        style="max-width: 150px"
      />
    </div>
    <div class="col-md-6 col-lg-9">
      <!-- ------------------------------ Username ------------------------------ -->
      <div class="form-floating mb-3">
        <input
          disabled
          type="text"
          class="form-control"
          :value="formData.username"
        />
        <label for="username">Username</label>
      </div>
      <!-- ------------------------------ Email ------------------------------ -->
      <div class="form-floating mb-3">
        <input
          disabled
          type="email"
          class="form-control"
          :value="formData.email"
        />
        <label for="email">Email address</label>
      </div>
      <!-- ------------------------------ Password ------------------------------ -->
      <div class="form-floating mb-3">
        <input
          disabled
          type="text"
          :value="formData.password"
          class="form-control"
          placeholder="Password"
        />
        <label for="password">Password</label>
      </div>
      <!-- ------------------------------ Button Back ------------------------------ -->
      <div class="text-end">
        <button type="button" @click="back" class="btn btn-warning">
          <i class="fas fa-arrow-left"></i> Back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

// Emit event ke komponen induk ketika tombol kembali diklik
const emit = defineEmits(["goBack"]);

// Props menerima data form yang disubmit
const props = defineProps({
  formData: Object,
});

// Buat URL untuk gambar yang diunggah
const imageURL = computed(() => {
  return props.formData.image ? URL.createObjectURL(props.formData.image) : "";
});

// Fungsi untuk memanggil event ketika tombol kembali diklik
const back = () => {
  emit("goBack");
};
</script>
