import { HTMLProps, useMemo } from "react";

interface IProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  filled?: boolean;
}

export const MyInput = (props: IProps) => {
  const { label, filled, className, ...rest } = props;

  const styles = useMemo(() => {
    return `${className} ${filled ? "bg-bgBase" : "bg-white"} w-full py-[12px] px-6 border border-slate-300 rounded-lg focus:outline-primary`;
  }, [className, filled]);
  return (
    <div className="w-full">
      {label && <label className="font-semibold block mb-2 text-sm tracking-wide text-primary placeholder:text-sm w-full">{label}</label>}
      <input {...rest} className={styles} placeholder="Enter here" />
    </div>
  );
};

