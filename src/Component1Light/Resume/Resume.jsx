import ResumeCard from './ResumeCard';
import icon from '/images/resume/resume-icon.png';
import icon2 from '/images/resume/resume-icon2.png';

const Resume = () => {
  return (
    <section className='bg-BodyBgLight-0 py-[60px] md:py-20 lg:pt-[114px] lg:pb-[120px] relative'>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-[30px] gap-x-[30px] xl:gap-x-[120px] items-center'>
          <div>
            <h1 className='font-Sora text-[27px] sm:text-[34px] md:text-[36px] lg:text-[45px] font-bold bg-gradient-to-r from-PrimaryColor-0 to-Secondarycolor-0 bg-clip-text text-transparent flex items-center gap-5'>
              <img
                src={icon}
                draggable='false'
                className='w-8 lg:w-[inherit]'
              />
              My Experience
            </h1>
            <div className='relative z-10 mt-[45px] grid grid-cols-1 gap-y-[30px]'>
              <div
                data-aos='fade-up-right'
                data-aos-duration='1000'
              >
                <ResumeCard
                  resumeDesc={'2022 - Present'}
                  resumeSubTilte={'Lead Developer'}
                  resumeTitle={'Blockdots, London'}
                />
              </div>
              <div
                data-aos='fade-up-right'
                data-aos-duration='1000'
              >
                <ResumeCard
                  resumeDesc={'2021 - 2022'}
                  resumeSubTilte={'Full Stack Web Developer'}
                  resumeTitle={'Parsons, The New School'}
                />
              </div>
              <div
                data-aos='fade-up-right'
                data-aos-duration='1000'
              >
                <ResumeCard
                  resumeDesc={'2020 - 2021'}
                  resumeSubTilte={'UI Designer'}
                  resumeTitle={'House of Life, Leeds'}
                />
              </div>
              <div
                data-aos='fade-up-right'
                data-aos-duration='1000'
              >
                <ResumeCard
                  resumeDesc={'2018 - 2020'}
                  resumeSubTilte={'Junior Graphics Designer'}
                  resumeTitle={'Theme Junction, Bursa'}
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className='font-Sora text-[27px] sm:text-[34px] md:text-[36px] lg:text-[45px] font-bold bg-gradient-to-r from-PrimaryColor-0 to-Secondarycolor-0 bg-clip-text text-transparent flex items-center gap-5'>
              <img
                src={icon2}
                draggable='false'
                className='w-8 lg:w-[inherit]'
              />
              My Education
            </h1>
            <div className='relative z-10 mt-[45px] grid grid-cols-1 gap-y-[30px]'>
              <div
                data-aos='fade-up-left'
                data-aos-duration='1000'
              >
                <ResumeCard
                  resumeDesc={'2020 - 2023'}
                  resumeSubTilte={'Programming course'}
                  resumeTitle={'Harverd University'}
                />
              </div>
              <div
                data-aos='fade-up-left'
                data-aos-duration='1000'
              >
                <ResumeCard
                  resumeDesc={'2016 - 2020'}
                  resumeSubTilte={'raphic design course'}
                  resumeTitle={'University of Denmark'}
                />
              </div>
              <div
                data-aos='fade-up-left'
                data-aos-duration='1000'
              >
                <ResumeCard
                  resumeDesc={'2012 - 2015'}
                  resumeSubTilte={'Web design course'}
                  resumeTitle={'University of California'}
                />
              </div>
              <div
                data-aos='fade-up-left'
                data-aos-duration='1000'
              >
                <ResumeCard
                  resumeDesc={'2010 - 2011'}
                  resumeSubTilte={'Design & Technology'}
                  resumeTitle={'Parsons, The New School'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
