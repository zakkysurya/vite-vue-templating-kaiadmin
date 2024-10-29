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
  {
    path: "/animation-form",
    name: "animation_form",
    component: () => import("@components/animations/AnimationForm.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@components/implementations/Profile.vue"),
  },
];
