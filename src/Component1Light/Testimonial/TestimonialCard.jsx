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
    <div className='relative px-2 sm:px-[26px] lg:px-2 xl:px-[26px] pt-[26px] pb-7 bg-white rounded-2xl'>
      <img
        src={testiLogo}
        draggable='false'
        className='absolute top-[25px] left-[26px]'
      />
      <div className="flex items-center justify-end">
        <img src={testiProfile} className="max-w-[120px] w-[40%] rounded-md rounded-es-[125px]"/>
      </div>
      <div className="flex items-center mt-4">
        <span className="text-4xl text-PrimaryColor-0 -ml-2">{testiIconLeft}</span>
        <span className="text-4xl text-PrimaryColor-0 -ml-[18px]">{testiIconRight}</span>
      </div>
      <p className="font-Sora text-TextLight-0 font-light pt-[18px]">{testiDesc}</p>
      <h5 className='font-Sora font-bold inline-block text-Secondarycolor-0 text-lg mt-[46px]'>
        {testiName}
      </h5>
      <p className='font-Sora text-sm lg:text-[13px] xl:text-sm text-TextLight-0 font-light mt-[3px]'>
        {testiDesignation}
      </p>
    </div>
  );
};

export default TestimonialCard;
