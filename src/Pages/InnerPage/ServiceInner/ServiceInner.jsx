import { FaArrowRightLong } from 'react-icons/fa6';
import serviceIcon from '/images/srvce-icn.png';
import ServiceCard from './ServiceCard';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';

const serviceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceTitle: 'Couple Therapy',
    serviceDesc:
      'Professional mision capital without enterps medical users pros value added e-enabled creative technology via team.',
  },
];

const ServiceInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Our Services'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Our Services'}
      />
      <section className='pt-[120px] relative z-10 bg-BodyBg2-0'>
        <div className='Container'>
          <div className='text-center'>
            <h1 className='font-Sora text-[45px] font-bold bg-gradient-to-r from-PrimaryColor-0 to-white bg-clip-text text-transparent'>
              Services
            </h1>
            <h5 className='font-Sora text-white font-bold'>Offerd Services</h5>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
            {serviceData.map(
              ({ id, serviceIcon, serviceTitle, serviceDesc }) => {
                return (
                  <>
                    <div key={id}>
                      <ServiceCard
                        serviceIcon={serviceIcon}
                        serviceTitle={serviceTitle}
                        serviceDesc={serviceDesc}
                      />
                    </div>
                  </>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceInner;
