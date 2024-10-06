import { useDeviceID } from "../../hooks";
import { AppContext } from "./app.context";

interface IProps {
  children: React.ReactNode;
}

export const AppProvider = (props: IProps) => {
  const { children } = props;
  const  deviceid  = useDeviceID();

  return (
    <AppContext.Provider value={{ deviceid }}>{children}</AppContext.Provider>
  );
};
