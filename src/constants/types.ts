import { IconType } from "react-icons";

export interface ISideNavs {
  title: string;
  path: string;
  icon: IconType;
}
export interface IMenuNavs {
  title?: string;
  path: string;
  icon: IconType;
  sublist?: IMenuNavs[];
}
