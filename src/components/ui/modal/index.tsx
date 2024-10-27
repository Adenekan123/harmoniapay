import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Dispatch, ReactNode, SetStateAction, useMemo } from "react";
import { CgClose } from "react-icons/cg";

interface IModalProps {
  state: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> };
  children: ReactNode;
  size: "sm" | "md" | "lg" | "xl";
  title?: string;
  description?: string;
}

export function MyModal(props: IModalProps) {
  const { state, size, title, children } = props;
  const { isOpen, setIsOpen } = state;

  //   function open() {
  //     setIsOpen(true)
  //   }

  const sizeStyle = useMemo(() => {
    switch (size) {
      case "sm":
        return "max-w-md";
      case "md":
        return "max-w-xl";
      case "lg":
        return "max-w-3xl";
      case "xl":
        return "max-w-6xl";
      default:
        return "max-w-md";
    }
  }, [size]);

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      {/* <Button
        onClick={open}
        className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Open dialog
      </Button> */}

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-0 z-30 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-3">
            <DialogPanel
              transition
              className={`w-full ${sizeStyle} rounded-xl px-5 pt-4 pb-6 bg-white backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 relative lg:left-[160px]`}
            >
              {title && (
                <DialogTitle
                  as="h3"
                  className="text-lg font-bold text-black mb-8"
                >
                  <div className="flex justify-between items-center">
                    <span>{title}</span>
                    <button onClick={close} className="inline-flex justify-center items-center w-8 h-8 bg-amber-100 hover:bg-gray-100 rounded-md">
                      <CgClose />
                    </button>
                  </div>
                </DialogTitle>
              )}

              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
