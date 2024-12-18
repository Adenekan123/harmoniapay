import { useMemo } from "react";
import { mobileNavs } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { PiCaretRightBold, PiDotsThreeOutlineDuotone } from "react-icons/pi";

const MobileMenu = () => {
  const { pathname } = useLocation();
  const menunavContent = useMemo(() => {
    return mobileNavs.map((nav, index) => {
      const { title, path, icon: Icon, sublist } = nav;
      const currentpage = pathname.includes(path);
      if (sublist) {
        return (
          <Popover key={index + path} className="relative flex justify-center">
            <PopoverButton
              as="button"
              className="flex flex-col gap-2 items-center outline-none"
            >
              <PiDotsThreeOutlineDuotone size={20} className="text-secondary" />
              <span className="text-secondarytint group-hover:text-secondary text-[9px]">
                more
              </span>
            </PopoverButton>
            <PopoverBackdrop className="fixed inset-0 bg-black/50 z-50" />
            <PopoverPanel
              anchor={{ to: "top end", gap: "16px" }}
              className="flex flex-col bg-gray-950 border-2 border-gray-800 border-b-0 text-white rounded-tl-lg w-56 z-10"
            >
              {sublist.map((list) => {
                const { path, title, icon: Subicon } = list;
                return (
                  <Link
                    to={path}
                    key={title}
                    className={`flex gap-6 items-center justify-between py-4 px-4 group`}
                  >
                    <span className="flex gap-4 items-center">
                      <span className="h-7 w-7 bg-gray-800 inline-flex justify-center items-center rounded-md">
                        <Subicon
                          size={18}
                          className={
                            currentpage
                              ? "text-secondary"
                              : "text-secondarytint group-hover:text-secondary"
                          }
                        />
                      </span>
                      <span
                        className={`${
                          currentpage ? "text-secondary" : "text-white"
                        } group-hover:text-secondary text-xs`}
                      >
                        {title}
                      </span>
                    </span>

                    <span>
                      <PiCaretRightBold size={14} className="text-secondary" />
                    </span>
                  </Link>
                );
              })}
            </PopoverPanel>
          </Popover>
        );
      } else
        return (
          <Link
            to={path as string}
            key={title}
            className={`flex flex-col gap-2 items-center justify-center text-center py-4 group`}
          >
            <span>
              <Icon
                size={20}
                className={
                  currentpage
                    ? "text-secondary"
                    : "text-secondarytint group-hover:text-secondary"
                }
              />
            </span>
            <span
              className={` ${
                currentpage ? "text-secondary" : "text-white"
              }  group-hover:text-secondary text-[9px]`}
            >
              {title}
            </span>
          </Link>
        );
    });
  }, [pathname]);
  return (
    <div className="grid grid-cols-5 gap-6 items-center justify-center lg:hidden px-5 bg-black  mx-auto mb-3 border-2 border-gray-800 rounded-full">
      {menunavContent}
    </div>
  );
};

export default MobileMenu;
