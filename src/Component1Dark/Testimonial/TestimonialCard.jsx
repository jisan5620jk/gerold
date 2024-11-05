/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiLogo,
  testiIconLeft,
  testiIconRight,
  testiProfile,
  testiName,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className='relative px-6 sm:px-[25px] lg:px-[25px] pt-[26px] pb-7 bg-BodyBg3-0 rounded-2xl'>
      <img
        src={testiLogo}
        draggable='false'
        className='absolute top-[25px] left-[26px]'
      />
      <div className="flex items-center justify-end">
        <img src={testiProfile} className="max-w-[120px] w-[40%] rounded-md rounded-es-[125px]"/>
      </div>
      <div className="testi-icon flex items-center mt-4">
        <span className="text-4xl text-PrimaryColor-0 -ml-2">{testiIconLeft}</span>
        <span className="text-4xl text-PrimaryColor-0 -ml-[18px]">{testiIconRight}</span>p0p
      </div>
      <p className="font-Sora text-white font-light pt-[18px]">{testiDesc}</p>
      <h5 className='font-Sora font-bold inline-block text-white text-lg mt-6 md:mt-[46px]'>
        {testiName}
      </h5>
      <p className='font-Sora text-sm lg:text-[13px] xl:text-sm text-white font-light mt-[3px]'>
        {testiDesignation}
      </p>
    </div>
  );
};

export default TestimonialCard;
