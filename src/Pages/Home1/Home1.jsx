import Appoinment from '../../Component1/Appoinment/Appionment';
import Banner from '../../Component1/Banner/Banner';
import Blog from '../../Component1/Blog/Blog';
import Portfolio from '../../Component1/Portfolio/Portfolio';
import Resume from '../../Component1/Resume/Resume';
import Service from '../../Component1/Service/Service';
import Skill from '../../Component1/Skill/Skill';
import Testimonial from '../../Component1/Testimonial/Testimonial';

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
