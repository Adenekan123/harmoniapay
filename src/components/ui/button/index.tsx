import { ButtonProps } from "@headlessui/react";
import { useMemo } from "react";

interface Iprops extends ButtonProps {
  color?: string;
  text: string;
}

export const CustomButton = (props: Iprops) => {
  const { color = "bg-primary hover:bg-gray-800 text-white", text, className, ...rest } = props;
  const styles = useMemo(() => {
    return (
      className +
      ` w-full ${color} disabled:opacity-25  font-semibold rounded-lg text-sm md:text-md py-[12px] px-6 mt-3 tracking-wider`
    );
  }, [color, className]);
  return (
    <button className={styles} {...rest}>
      {text}
    </button>
  );
};

