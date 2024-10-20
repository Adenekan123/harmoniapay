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
      if (sublist) {
        return (
          <Popover key={index + path} className="relative flex justify-end">
            <PopoverButton as="button" className="flex flex-col gap-1 items-center">
              <PiDotsThreeOutlineDuotone size={20} className="text-secondary" />
              <span className="text-secondary group-hover:text-secondary text-xs">
                more
              </span>
            </PopoverButton>
            <PopoverBackdrop className="fixed inset-0 bg-black/50" />
            <PopoverPanel
              anchor={{ to: "top start", gap: "24px" }}
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
                            pathname.includes(path as string)
                              ? "text-secondary"
                              : "text-secondarytint group-hover:text-secondary"
                          }
                        />
                      </span>
                      <span className="text-white group-hover:text-secondary text-xs">
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
            className={`flex flex-col gap-1 items-center justify-center text-center py-4 group`}
          >
            <span>
              <Icon
                size={20}
                className={
                  pathname.includes(path as string)
                    ? "text-secondary"
                    : "text-secondarytint group-hover:text-secondary"
                }
              />
            </span>
            <span className="text-white group-hover:text-secondary text-[10px]">
              {title}
            </span>
          </Link>
        );
    });
  }, [pathname]);
  return (
    <div className="grid grid-cols-5 gap-6 items-center justify-center lg:hidden px-5">
      {menunavContent}
    </div>
  );
};

export default MobileMenu;
