<template>
  <Breadcump :currentPage="currentPage" :dataBreadcump="dataBreadcump" />
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <div class="card-title">Animation Form</div>
        </div>
        <div class="card-body">
          <transition name="slide">
            <Form1
              v-if="currentForm === 1"
              :formData="formData"
              :nextForm="nextForm"
              :handleFileUpload="handleFileUpload"
            />
          </transition>

          <transition name="slide">
            <Form2
              v-if="currentForm === 2"
              :formData="formData"
              :nextForm="nextForm"
              :prevForm="prevForm"
            />
          </transition>

          <transition name="slide">
            <Form3
              v-if="currentForm === 3"
              :formData="formData"
              :prevForm="prevForm"
              :submitForm="submitForm"
            />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Form1 from "./Form1.vue";
import Form2 from "./Form2.vue";
import Form3 from "./Form3.vue";

import Breadcump from "@components/Breadcump.vue"; // Pastikan jalur impor benar

// Menentukan nama halaman saat ini
const currentPage = ref("Animation Form");
// Data breadcrumb
const dataBreadcump = ref([
  { path: "/animation-form", label: "Animation Form" },
]);

const currentForm = ref(1);
const formData = ref({
  photoProfile: null,
  username: "",
  email: "",
  password: "",
  role: "",
  noTelepon: "",
  alamat: "",
  gaji: "",
  jumlahAnak: "",
  pekerjaan: "",
  deskripsi: "",
  harapan: "",
});

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  formData.value.photoProfile = file;
};

const nextForm = () => {
  if (currentForm.value < 3) {
    currentForm.value += 1;
  }
};

const prevForm = () => {
  if (currentForm.value > 1) {
    currentForm.value -= 1;
  }
};

const submitForm = () => {
  console.log("Data submitted:", formData.value);
  alert("Form submitted!");
};
</script>

<style>
.form-container {
  text-align: center;
}

.sliding-form {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  width: 300px;
  margin: 0 auto;
}

/* Animasi slide */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
