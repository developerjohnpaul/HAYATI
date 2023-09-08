import { MdArrowBackIosNew } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";

const MainNav = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  const Navigate = useNavigate();
  return (
    <>
      <div>
        <h1>hello</h1>
      </div>
      <Outlet />
    </>
  );
};

export default MainNav;
