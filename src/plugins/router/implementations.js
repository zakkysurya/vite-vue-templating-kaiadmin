export default [
  {
    path: "/registration",
    name: "registration",
    component: () => import("@components/implementations/Registration.vue"),
  },
  {
    path: "/datatable-objects",
    name: "datatable_objects",
    component: () => import("@components/implementations/Datatable.vue"),
  },
];
