import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Home",
        path: "/home",
        element: <Home />,
      },

      {
        icon: <TableCellsIcon {...icon} />,
        name: "Atetlas",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Artigos",
        path: "/profile",
        element: <Profile />,
      },

      {
        icon: <BellIcon {...icon} />,
        name: "Mnesalidades",
        path: "/notifactions",
        element: <Notifications />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Horário",
        path: "/notifactions",
        element: <Notifications />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Planos",
        path: "/notifactions",
        element: <Notifications />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Pagamento",
        path: "/notifactions",
        element: <Notifications />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Estatística",
        path: "/notifactions",
        element: <Notifications />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Documentos",
        path: "/notifactions",
        element: <Notifications />,
      },
    ],
  },
];

export default routes;
