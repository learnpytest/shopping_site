import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/basket/payments",
    component: () => import("@/views/Basket.vue"),
    children: [{
        path: "",
        component: () => import("@/components/Payments_Address"),
      },
      {
        path: "address",
        name: "address",
        component: () => import("@/components/Payments_Address"),
      },
      {
        path: "shipment",
        name: "shipment",
        component: () => import("@/components/Payments_Shipment"),
      },
      {
        path: "method",
        name: "method",
        component: () => import("@/components/Payments_Method"),
      },
    ],
  },
  {
    path: "/products",
    name: "products",
    component: () => import("@/views/Products"),
  },
  {
    path: "/",
    name: "root",
    redirect: "/products",
  },
  {
    path: "*",
    name: "not-found",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;