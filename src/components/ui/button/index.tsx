import { ButtonProps } from "@headlessui/react";
import { useMemo } from "react";

interface Iprops extends ButtonProps {
  color?: string;
  text: string;
}

const CustomButton = (props: Iprops) => {
  const { color = "bg-primary", text, className, ...rest } = props;
  const styles = useMemo(() => {
    return (
      className +
      ` w-full ${color} hover:bg-gray-800 disabled:opacity-25 text-white font-semibold rounded-lg text-sm md:text-md py-[12px] mt-3`
    );
  }, [color, className]);
  return (
    <button className={styles} {...rest}>
      {text}
    </button>
  );
};

export default CustomButton;
