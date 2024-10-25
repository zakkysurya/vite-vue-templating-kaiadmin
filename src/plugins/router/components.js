export default [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@components/Dashboard.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () => import("@components/Form.vue"),
  },
  {
    path: "/datatable",
    name: "datatable",
    component: () => import("@components/Datatable.vue"),
  },
  {
    path: "/widget",
    name: "widget",
    component: () => import("@components/Widget.vue"),
  },
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    component: () => import("@components/NotFound.vue"),
  },
];
