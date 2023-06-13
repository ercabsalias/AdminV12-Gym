import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Total de Atletas",
    value: "53",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "Atletas",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "Total de Artigos",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "Artigos",
    },
  },
  {
    color: "green",
    icon: UserPlusIcon,
    title: "Total de Pagamentos",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "Pagamentos",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Total de Planos",
    value: "103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "Planos",
    },
  },
];

export default statisticsCardsData;
