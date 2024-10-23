import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Portfolio from "./Portfolio/Portfolio";

const PortfolioInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Porfolio"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Porfolio"}
      />
      <Portfolio />
    </>
  );
};

export default PortfolioInner;
