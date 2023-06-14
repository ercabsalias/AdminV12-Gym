/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Estatistica from "views/Estatistica.js";
import Atletas from "views/Atletas";
import Mensalidade from "views/Mensalidade.js";
import Horario from "views/Horario.js";
import Planos from "views/Planos.js";
import Pagamento from "views/Pagamento.js";
import Documento from "views/Documento.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  /*{
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/admin",
  },*/
  {
    path: "/dashboard",
    name: "Estatística",
    icon: "nc-icon nc-chart-pie-35",
    component: Estatistica,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Atletas",
    icon: "nc-icon nc-circle-09",
    component: Atletas,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Mensalidade",
    icon: "nc-icon nc-notes",
    component: Mensalidade,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Horário",
    icon: "nc-icon nc-paper-2",
    component: Horario,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Planos",
    icon: "nc-icon nc-atom",
    component: Planos,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Pagamento",
    icon: "nc-icon nc-pin-3",
    component: Pagamento,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Documentos",
    icon: "nc-icon nc-bell-55",
    component: Documento,
    layout: "/admin",
  },
];

export default dashboardRoutes;
