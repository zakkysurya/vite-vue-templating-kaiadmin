<style>
/* atur input file photo profil */
.form-floating input[type="file"] ~ label {
  top: -8px; /* Sesuaikan ini sesuai kebutuhan */
  font-size: 0.875rem;
  color: #6c757d;
}
/* atur posisi icon eye | eye-slash-icon (password & confirm password) */
.form-floating .password-toggle-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1rem;
  color: #6c757d;
}

.form-floating .password-toggle-icon:hover {
  color: #343a40;
}
</style>

<template>
  <Breadcump :currentPage="currentPage" :dataBreadcump="dataBreadcump" />
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <div class="card-title">Registration</div>
        </div>
        <div class="card-body">
          <div v-if="!isSubmitted" class="row">
            <div class="col-md-3 col-lg-3">
              <!-- Gambar pratinjau -->
              <div v-if="imagePreview">
                <img
                  :src="imagePreview"
                  alt="Preview"
                  class="img-thumbnail"
                  style="max-width: 150px"
                />
              </div>
              <!-- Holder Gambar pratinjau -->
              <div v-if="!imagePreview">
                <img
                  src="../../assets/img/holder/holder profile-green.png"
                  class="rounded mx-auto d-block"
                  alt="Holder Profile"
                  style="max-width: 150px"
                />
              </div>
            </div>
            <div class="col-md-6 col-lg-9">
              <form @submit.prevent="saveRegister">
                <!-- ------------------------------ Photo Profile ------------------------------ -->
                <div
                  class="form-floating form-floating-custom mb-3"
                  :class="{
                    'has-error has-feedback':
                      !validatorForm.image.isValid &&
                      validatorForm.image.errorMessage,
                    'has-success': validatorForm.image.isValid,
                  }"
                >
                  <input
                    type="file"
                    class="form-control"
                    id="image"
                    placeholder="Upload file"
                    @change="inputImage"
                    name="image"
                    accept=".jpg, .jpeg, .png"
                  />
                  <label for="image">Photo Profile</label>
                  <small
                    v-if="!validatorForm.image.isValid"
                    class="form-text text-muted"
                  >
                    {{ validatorForm.image.errorMessage }}
                  </small>
                </div>
                <!-- ------------------------------ Username ------------------------------ -->
                <div
                  class="form-floating form-floating-custom mb-3"
                  :class="{
                    'has-error has-feedback':
                      !validatorForm.username.isValid &&
                      validatorForm.username.errorMessage,
                    'has-success': validatorForm.username.isValid,
                  }"
                >
                  <input
                    type="text"
                    class="form-control"
                    v-model.trim="form.username"
                    @change="validatorUsername"
                    autocomplete="new-password"
                    placeholder="username"
                  />
                  <label for="username">Username</label>
                  <small
                    v-if="!validatorForm.username.isValid"
                    class="form-text text-muted"
                  >
                    {{ validatorForm.username.errorMessage }}
                  </small>
                </div>
                <!-- ------------------------------ Email ------------------------------ -->
                <div
                  class="form-floating form-floating-custom mb-3"
                  :class="{
                    'has-error has-feedback':
                      !validatorForm.email.isValid &&
                      validatorForm.email.errorMessage,
                    'has-success': validatorForm.email.isValid,
                  }"
                >
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="name@example.com"
                    autocomplete="new-password"
                    v-model.trim="form.email"
                    @change="validatorEmail"
                  />
                  <label for="email">Email address</label>
                  <small
                    v-if="!validatorForm.email.isValid"
                    class="form-text text-muted"
                  >
                    {{ validatorForm.email.errorMessage }}
                  </small>
                </div>
                <!-- ------------------------------ Password ------------------------------ -->
                <div
                  class="form-floating form-floating-custom mb-3 position-relative"
                  :class="{
                    'has-error has-feedback':
                      !validatorForm.password.isValid &&
                      validatorForm.password.errorMessage,
                    'has-success': validatorForm.password.isValid,
                  }"
                >
                  <input
                    :type="
                      showHidePassword.password.showPassword
                        ? 'text'
                        : 'password'
                    "
                    v-model.trim="form.password"
                    @change="validatorPassword"
                    autocomplete="new-password"
                    class="form-control"
                    placeholder="Password"
                  />
                  <span
                    class="password-toggle-icon"
                    @click="toggleShowPassword('password')"
                  >
                    <i
                      :class="
                        showHidePassword.password.showPassword
                          ? 'fas fa-eye text-success'
                          : 'fas fa-eye-slash text-danger'
                      "
                    ></i>
                  </span>
                  <label for="password">Password</label>
                  <small
                    v-if="!validatorForm.password.isValid"
                    class="form-text text-muted"
                  >
                    {{ validatorForm.password.errorMessage }}
                  </small>
                </div>
                <!-- ------------------------------ Confirm Password ------------------------------ -->
                <div
                  class="form-floating form-floating-custom mb-3 position-relative"
                  :class="{
                    'has-error has-feedback':
                      !validatorForm.confirmPassword.isValid &&
                      validatorForm.confirmPassword.errorMessage,
                    'has-success': validatorForm.confirmPassword.isValid,
                  }"
                >
                  <input
                    :type="
                      showHidePassword.confirmPassword.showPassword
                        ? 'text'
                        : 'password'
                    "
                    v-model.trim="form.confirmPassword"
                    @change="validatorPassword"
                    autocomplete="new-password"
                    class="form-control"
                    placeholder="Confirm Password"
                  />
                  <span
                    class="password-toggle-icon"
                    @click="toggleShowPassword('confirmPassword')"
                  >
                    <i
                      :class="
                        showHidePassword.confirmPassword.showPassword
                          ? 'fas fa-eye text-success'
                          : 'fas fa-eye-slash text-danger'
                      "
                    ></i>
                  </span>
                  <label for="confirmPassword">Confirm Password</label>
                  <small
                    v-if="!validatorForm.confirmPassword.isValid"
                    class="form-text text-muted"
                  >
                    {{ validatorForm.confirmPassword.errorMessage }}
                  </small>
                </div>
                <!-- ------------------------------ Button Submit ------------------------------ -->
                <div class="text-end">
                  <button type="submit" class="btn btn-success">
                    <i class="fas fa-save"></i> Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
          <!-- Tampilkan komponen hasil jika form sudah disubmit -->
          <DisplayData v-else :formData="submittedData" @goBack="handleBack" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Breadcump from "@components/Breadcump.vue"; // Pastikan jalur impor benar
import DisplayData from "@components/implementations/DisplayData.vue";

// Menentukan nama halaman saat ini
const currentPage = ref("Form");
// Data breadcrumb
const dataBreadcump = ref([{ path: "/registration", label: "Registration" }]);
// definisikan variabel untuk di dalam form
const form = reactive({
  image: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});
// definisikan properti reaktif untuk validator
const validatorForm = reactive({
  image: {
    isValid: true,
    errorMessage: "",
  },
  username: {
    isValid: true,
    errorMessage: "",
  },
  email: {
    isValid: true,
    errorMessage: "",
  },
  password: {
    isValid: true,
    errorMessage: "",
  },
  confirmPassword: {
    isValid: true,
    errorMessage: "",
  },
});
// Untuk menyimpan URL gambar pratinjau
const imagePreview = ref("");
// menangani input image
const inputImage = (event) => {
  // ambil file dari input
  const file = event.target.files[0];
  // jika file tidak kosong
  if (file) {
    // Memeriksa jenis MIME file
    const validMimeTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (validMimeTypes.includes(file.type)) {
      // Menandakan bahwa image valid
      validatorForm.image.isValid = true;
      validatorForm.image.errorMessage = "";
      // Buat objek FileReader baru
      const reader = new FileReader();
      // Set URL gambar untuk pratinjau
      reader.onload = (e) => {
        imagePreview.value = e.target.result;
      };
      form.image = file;
      // Baca file sebagai URL data
      reader.readAsDataURL(file);
    } else {
      // Menandakan bahwa image tidak valid
      validatorForm.image.isValid = false;
      validatorForm.image.errorMessage =
        "Ekstensi file hanya boleh berupa gambar (JPEG, PNG, JPG)";
      form.image = ""; // Reset image jika tidak valid
      event.target.value = ""; // Reset input file
      imagePreview.value = ""; // Reset pratinjau
    }
  } else {
    // Menandakan bahwa image tidak valid
    validatorForm.image.isValid = false;
    validatorForm.image.errorMessage = "File tidak boleh kosong";
    // Jika tidak ada file, reset image
    form.image = "";
    imagePreview.value = ""; // Reset pratinjau
  }
};
const validatorImage = () => {
  if (!form.image) {
    // Menandakan bahwa image tidak valid
    validatorForm.image.isValid = false;
    validatorForm.image.errorMessage = "File tidak boleh kosong";
  } else {
    // Menandakan bahwa image valid
    validatorForm.image.isValid = true;
    validatorForm.image.errorMessage = "";
  }
};
// Validator untuk username
const validatorUsername = () => {
  // Menandakan bahwa username valid
  validatorForm.username.isValid = true;
  validatorForm.username.errorMessage = "";
  if (form.username.length < 5) {
    // Menandakan bahwa username tidak valid
    validatorForm.username.isValid = false;
    validatorForm.username.errorMessage =
      "Username tidak boleh kurang dari 5 karakter";
  }
};
// Validator untuk email
const validatorEmail = () => {
  // validasi email kosong
  if (form.email.length < 1) {
    // Menandakan bahwa email tidak valid
    validatorForm.email.isValid = false;
    validatorForm.email.errorMessage = "Email tidak boleh kosong";
  } else {
    // Validator format email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      // validator format email
      validatorForm.email.isValid = false;
      validatorForm.email.errorMessage = "Email belum sesuai format";
    } else {
      // Menandakan bahwa email valid
      validatorForm.email.isValid = true;
      validatorForm.email.errorMessage = "";
    }
  }
};
// validator password
const validatorPassword = () => {
  // validasi jika password kosong
  if (form.password.length < 1) {
    validatorForm.password.isValid = false;
    validatorForm.password.errorMessage = "Password tidak boleh kosong";
  } else {
    // validasi karakter password
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(form.password)) {
      validatorForm.password.isValid = false;
      validatorForm.password.errorMessage =
        "Password harus terdiri dari minimal 8 karakter dan mengandung huruf besar/kecil, angka, dan karakter khusus.";
    } else {
      validatorForm.password.isValid = true;
      validatorForm.password.errorMessage = "";
    }
  }
};
// validator confirm password
const validatorConfirmPassword = () => {
  // validasi jika confirm password kosong
  if (form.confirmPassword.length < 1) {
    validatorForm.confirmPassword.isValid = false;
    validatorForm.confirmPassword.errorMessage =
      "Konfirmasi Password tidak boleh kosong";
  } else {
    // validasi jika konfirmasi password tidak sama dengan password
    if (form.confirmPassword !== form.password) {
      validatorForm.confirmPassword.isValid = false;
      validatorForm.confirmPassword.errorMessage =
        "Konfirmasi Password tidak sesuai dengan password";
    } else {
      validatorForm.confirmPassword.isValid = true;
      validatorForm.confirmPassword.errorMessage = "";
    }
  }
};
// param show hide password and confirm password
const showHidePassword = reactive({
  password: {
    textButton: "Show",
    showPassword: false,
  },
  confirmPassword: {
    textButton: "Show",
    showPassword: false,
  },
});
// Event untuk toggle show/hide password
const toggleShowPassword = (tag) => {
  // Mengakses password atau confirmPassword berdasarkan tag
  const field = showHidePassword[tag];

  // Mengubah state dari show/hide password
  field.showPassword = !field.showPassword;

  // Mengatur teks tombol sesuai dengan kondisi
  field.textButton = field.showPassword ? "hide" : "show";
};

const isSubmitted = ref(false); // State untuk melacak apakah form sudah disubmit
const submittedData = ref(null); // State untuk menyimpan data yang disubmit

// Fungsi untuk validasi seluruh form
const validateForm = () => {
  validatorImage();
  validatorUsername();
  validatorEmail();
  validatorPassword();
  validatorConfirmPassword();
  // Return true jika semua validasi berhasil
  return (
    validatorForm.image.isValid &&
    validatorForm.username.isValid &&
    validatorForm.email.isValid &&
    validatorForm.password.isValid &&
    validatorForm.confirmPassword.isValid
  );
};
// Fungsi untuk menyimpan data registrasi
const saveRegister = () => {
  if (validateForm()) {
    // Jika validasi berhasil, submit form
    submittedData.value = { ...form };
    isSubmitted.value = true;
  } else {
    // Jika validasi gagal, tampilkan pesan error
    alert("Data perlu diperbaiki...");
  }
};

const handleBack = () => {
  // Reset data dan kembali ke form
  isSubmitted.value = false;
  submittedData.value = {};
};
</script>
