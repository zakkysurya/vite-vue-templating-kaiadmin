<template>
  <Breadcump :currentPage="currentPage" :dataBreadcump="dataBreadcump" />
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <div class="d-flex align-items-center">
            <h4 class="card-title">Phones</h4>
            <button
              class="btn btn-primary btn-round ms-auto"
              data-bs-toggle="modal"
              data-bs-target="#addRowModal"
            >
              <i class="fa fa-plus"></i>
              Add Row
            </button>
          </div>
        </div>
        <div class="card-body">
          <DataTable
            :columns="columns"
            :data="dataPhones.data"
            :options="tableOptions"
            class="display table table-striped table-hover dataTable"
            width="100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, reactive } from "vue";
import Breadcump from "@components/Breadcump.vue";
import axios from "axios";

// Import DataTable dan Plugin Core
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-bs5"; // Bootstrap styling untuk DataTable
DataTable.use(DataTablesCore); // Inisialisasi DataTables dengan plugin Vue3

// Nama halaman saat ini dan breadcrumb data
const currentPage = ref("Datatable");
const dataBreadcump = ref([{ path: "/datatable", label: "datatable" }]);

// Inisiasi kolom dan data untuk DataTable
const columns = [
  { data: "id", title: "No" },
  { data: "name", title: "Merk" },
  {
    data: null,
    title: "Action",
    render(data, type, row) {
      return `<button class="btn btn-sm btn-primary" onclick="alert('ID: ${row.id}')">View</button>`;
    },
    orderable: false,
    className: "text-center", // Biarkan action button di tengah
  },
];
// Opsi tambahan untuk DataTable
const tableOptions = {
  pagingType: "full_numbers", // Tipe pagination dengan semua tombol (first, last, etc.)
};

// Reactive state untuk menyimpan data phones, Menyimpan data untuk DataTable
const dataPhones = reactive({ data: [] });
// Fungsi untuk mendapatkan data dari API
const getData = async () => {
  try {
    const response = await axios.get("https://api.restful-api.dev/objects");
    dataPhones.data = response.data; // Menyimpan data dari API
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Panggil fungsi getData sebelum komponen dirender
onBeforeMount(() => {
  getData();
});
</script>

<style>
@import "bootstrap";
@import "datatables.net-bs5";
</style>
