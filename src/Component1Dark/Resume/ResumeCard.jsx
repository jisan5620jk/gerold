/* eslint-disable react/prop-types */

const ResumeCard = ({
  resumeSubTilte,
  resumeTitle,
  resumeDesc,
}) => {
  return (
    <div className='bg-BodyBg-0 py-5 rounded-[20px] px-4 sm:px-[30px] md:px-4 lg:px-[30px] group relative z-10 overflow-hidden before:absolute before:left-0 before:top-0 before:bg-gradient-to-l before:to-PrimaryColor-0 before:-z-10 before:from-Secondarycolor-0 before:transition-all before:duration-500 before:w-full before:h-full before:opacity-0 hover:before:opacity-100'>
        <h6 className='font-Sora font-bold text-[15px] md:text-xl text-PrimaryColor-0 capitalize transition-all duration-500 group-hover:text-white'>
          {resumeDesc}
        </h6>
        <h4 className='font-Sora font-bold text-base sm:text-xl md:text-[19px] lg:text-[25px] text-white mt-2 md:mt-[10px] md:mb-[9px] uppercase'>
          {resumeTitle}
        </h4>
        <p className='font-Sora text-TextColor-0'>{resumeSubTilte}</p>
    </div>
  );
};

export default ResumeCard;
