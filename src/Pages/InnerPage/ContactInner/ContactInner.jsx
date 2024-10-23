import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Appoinment from "../../../Component1Dark/Appoinment/Appionment";

const ContactInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Contact"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Contact"}
      />
      <Appoinment />
    </>
  );
};

export default ContactInner;
