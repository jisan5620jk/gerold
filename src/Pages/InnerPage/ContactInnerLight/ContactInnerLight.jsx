import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Appoinment from "../../../Component1Light/Appoinment/Appionment";

const ContactInnerLight = () => {
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

export default ContactInnerLight;
