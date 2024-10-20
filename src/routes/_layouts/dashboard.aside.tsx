import { useMemo } from "react";
import { sideNavs } from "../../constants";
import { Link, useLocation } from "react-router-dom";

const Aside = () => {
    const {pathname} = useLocation();
  const sidenavContent = useMemo(() => {
    return sideNavs.map((nav) => {
      const { title, path, icon: Icon } = nav;
      const currentpage = pathname.includes(path)
      return (
        <Link to={path} key={title} className={`flex gap-6 items-center py-4 px-8 group` }>
          <span>
            <Icon size={24} className={currentpage? 'text-secondary':'text-secondarytint group-hover:text-secondary'} />
          </span>
          <span className={`${currentpage ? 'text-secondary':'text-white'} group-hover:text-secondary`}>{title}</span>
        </Link>
      );
    });
  }, [pathname]);
  return (
    <div className="hidden lg:flex flex-col gap-20">
      <div className="logo px-8 hidden lg:block">
        <img src="/images/logo.png" alt="harmoniapay_logo" className="h-12" />
      </div>
      <div className="grid gap-2">{sidenavContent}</div>
    </div>
  );
};

export default Aside;
