import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import Resume from './Resume/Resume';
import Skill from './Skill/Skill';
import Counter from './Counter/Counter';
import DanceText from './DanceText/DanceText';

const AboutInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'About'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'About'}
      />
      <Resume />
      <Skill/>
      <Counter />
      <DanceText/>
    </>
  );
};

export default AboutInner;
