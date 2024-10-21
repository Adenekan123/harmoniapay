import { PiCurrencyCircleDollarDuotone } from "react-icons/pi";
import CustomButton from "../../components/ui/button";

const Accounts = () => {
  return (
    <div className="w-full h-full pt-[5%]">
      <div className="bg-white max-w-sm mx-auto p-8 w-full grid text-center gap-6 rounded-lg">
        <div className="flex flex-col items-center gap-4 text-center justify-center">
          <span>
            <PiCurrencyCircleDollarDuotone size={70} className="text-secondary" />
          </span>
          <div>
            <p className="text-lg font-bold">Create a USD account</p>
            <p className="text-gray-500 text-sm">Add a UCH account</p>
          </div>
        </div>
        <div>
         <CustomButton text="Create account" />
        </div>
      </div>
    </div>
  );
};

export default Accounts;
