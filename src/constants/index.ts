import { MdMore } from "react-icons/md";
import { IMenuNavs, ISideNavs } from "./types";
import {
  PiArrowsClockwiseDuotone,
  PiBankDuotone,
  PiCirclesFourDuotone,
  PiCreditCardDuotone,
  PiInvoiceDuotone,
  PiUserListDuotone,
  PiUsersFourDuotone,
} from "react-icons/pi";

export const sideNavs: ISideNavs[] = [
  { title: "Dashboard", path: "/dashboard", icon: PiCirclesFourDuotone },
  { title: "Accounts", path: "/accounts", icon: PiBankDuotone },
  { title: "Transfers", path: "/transfers", icon: PiArrowsClockwiseDuotone },
  { title: "Recipents", path: "/recipients", icon: PiUserListDuotone },
  { title: "Referrals", path: "/referrals", icon: PiUsersFourDuotone },
  { title: "Cards", path: "/cards", icon: PiCreditCardDuotone },
  { title: "Invoices", path: "/invoices", icon: PiInvoiceDuotone },
];

export const mobileNavs: IMenuNavs[] = [
  { title: "Dashboard", path: "/dashboard", icon: PiCirclesFourDuotone },
  { title: "Cards", path: "/cards", icon: PiCreditCardDuotone },
  { title: "Accounts", path: "/accounts", icon: PiBankDuotone },
  { title: "Recipents", path: "/recipients", icon: PiUserListDuotone },
  {
    icon: MdMore,
    path:"#",
    sublist: [
      {
        title: "Transfers",
        path: "/transfers",
        icon: PiArrowsClockwiseDuotone,
      },
      { title: "Referrals", path: "/referrals", icon: PiUsersFourDuotone },
      { title: "Invoices", path: "/invoices", icon: PiInvoiceDuotone },
    ],
  },
];
