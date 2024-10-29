<template>
  <Breadcump :currentPage="currentPage" :dataBreadcump="dataBreadcump" />
  <div class="row align-items-stretch">
    <!-- Sidebar Profil -->
    <div class="col-md-3">
      <div class="card h-100">
        <img
          src="../../assets/img/profile.jpg"
          class="card-img-top rounded-circle mx-auto mt-3"
          alt="Profile Picture"
          style="width: 150px; height: 150px"
        />
        <div class="card-body text-center">
          <h5 class="card-title">{{ userData.username }}</h5>
          <p class="card-text text-muted">{{ userData.role }}</p>
          <button class="btn btn-primary btn-sm">Edit Profil</button>
        </div>
      </div>
    </div>

    <!-- Detail Profil -->
    <div class="col-md-9">
      <div class="card h-100">
        <div class="card-header">
          <h5>Detail Profil</h5>
        </div>
        <div class="card-body">
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Nama Lengkap</label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                v-model="userData.fullName"
                disabled
              />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Email</label>
            <div class="col-sm-9">
              <input
                type="email"
                class="form-control"
                v-model="userData.email"
                disabled
              />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label">No Telepon</label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                v-model="userData.phone"
                disabled
              />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-3 col-form-label">Alamat</label>
            <div class="col-sm-9">
              <textarea
                class="form-control"
                rows="2"
                v-model="userData.address"
                disabled
              ></textarea>
            </div>
          </div>
          <button class="btn btn-success mt-3" @click="editProfile">
            Edit Profil
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Breadcump from "@components/Breadcump.vue";
// Menentukan nama halaman saat ini
const currentPage = ref("Profile");
// Data breadcrumb
const dataBreadcump = ref([{ path: "/profile", label: "Profile" }]);

const userData = ref({
  username: "Hizrian",
  fullName: "Hizrian",
  email: "hizrian@gmail.com",
  phone: "08123456789",
  address: "Jl. Merdeka No.1, Jakarta",
  role: "Admin",
});

const editProfile = () => {
  alert("Fitur Edit Profil belum tersedia!");
};
</script>

<style scoped>
.card-img-top {
  border: 3px solid #007bff;
}
</style>
