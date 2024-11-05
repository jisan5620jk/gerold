/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiProfile,
  testiName,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className='relative pt-8 sm:pt-[46px] px-5 md:px-5 lg:px-9 pb-[30px] md:pb-[40px] bg-BodyBg3-0 border border-Secondarycolor-0 rounded-2xl'>
      <p className='font-Sora text-TextColor-0 leading-[30px] text-xl max-w-[480px] w-full'>{testiDesc}</p>
      <div className='flex items-center gap-[15px] mt-8 md:mt-[50px]'>
        <div>
          <img
            src={testiProfile}
            draggable='false' className="border border-Secondarycolor-0 rounded-full"
          />
        </div>
        <div>
          <h6 className='font-Sora text-sm font-medium text-white'>
            {testiName}
          </h6>
          <p className='font-Sora text-sm text-TextGrey2-0 pt-1'>
            {testiDesignation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
