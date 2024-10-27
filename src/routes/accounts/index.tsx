import { PiCurrencyCircleDollarDuotone } from "react-icons/pi";
import { useCallback, useState } from "react";
import { CustomButton, MyModal } from "../../components/ui";
import { AccountForm } from "./components/form";

const Accounts = () => {
  const [modalopen, setModalOpen] = useState(false);

  const toggleModalOpen = useCallback(() => setModalOpen((prev) => !prev), []);
  return (
    <>
      <div className="w-full h-full pt-[5%]">
        <div className="bg-white max-w-sm mx-auto p-8 w-full grid text-center gap-6 rounded-lg">
          <div className="flex flex-col items-center gap-4 text-center justify-center">
            <span>
              <PiCurrencyCircleDollarDuotone
                size={70}
                className="text-secondary"
              />
            </span>
            <div>
              <p className="text-lg font-bold">Create a USD account</p>
              <p className="text-gray-500 text-sm">Add a UCH account</p>
            </div>
          </div>
          <div>
            <CustomButton onClick={toggleModalOpen} text="Create account" />
          </div>
        </div>
      </div>
      <MyModal
        state={{ isOpen: modalopen, setIsOpen: setModalOpen }}
        title="Create USD account"
        size="md"
      >
        <AccountForm close={()=>setModalOpen(false)} />
      </MyModal>
    </>
  );
};

export default Accounts;
