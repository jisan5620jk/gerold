import Appoinment from '../../Component1Dark/Appoinment/Appionment';
import Banner from '../../Component1Dark/Banner/Banner';
import Blog from '../../Component1Dark/Blog/Blog';
import Portfolio from '../../Component1Dark/Portfolio/Portfolio';
import Resume from '../../Component1Dark/Resume/Resume';
import Service from '../../Component1Dark/Service/Service';
import Skill from '../../Component1Dark/Skill/Skill';
import Testimonial from '../../Component1Dark/Testimonial/Testimonial';

const Home1 = () => {
  return (
    <>
      <Banner />
      <Service />
      <Portfolio />
      <Resume />
      <Skill />
      <Testimonial />
      <Blog />
      <Appoinment/>
    </>
  );
};

export default Home1;
