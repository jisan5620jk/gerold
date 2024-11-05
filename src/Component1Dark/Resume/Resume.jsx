import ResumeCard from './ResumeCard';
import icon from '/images/resume/resume-icon.png';
import icon2 from '/images/resume/resume-icon2.png';

const Resume = () => {
  return (
    <section className=' bg-BodyBg2-0 py-[60px] md:py-20 lg:pt-[94px] xl:pt-[114px] lg:pb-[100px] xl:pb-[120px] relative'>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-[56px] gap-x-[30px] xl:gap-x-[120px] items-center'>
          <div>
            <h1
              className='font-Sora text-[30px] md:text-[36px] lg:text-[40px] xl:text-[45px] font-bold bg-gradient-to-r from-PrimaryColor-0 to-white bg-clip-text text-transparent flex items-center gap-5'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img
                src={icon}
                draggable='false'
                className='w-7 lg:w-[inherit]'
              />
              My Experience
            </h1>
            <div className='relative z-10 mt-10 md:mt-[45px] grid grid-cols-1 gap-y-[30px]'>
              <div
                data-aos='fade-up-right'
                data-aos-duration='1000'
              >
                <ResumeCard
                  resumeDesc={'2022 - Present'}
                  resumeSubTilte={'Blockdots, London'}
                  resumeTitle={'Lead Developer'}
                />
              </div>
              <div
                data-aos='fade-up-right'
                data-aos-duration='1000'
              >
                <ResumeCard
                  resumeDesc={'2021 - 2022'}
                  resumeSubTilte={'Parsons, The New School'}
                  resumeTitle={'Full Stack Web Developer'}
                />
              </div>
              <div
                data-aos='fade-up-right'
                data-aos-duration='1000'
              >
                <ResumeCard
                  resumeDesc={'2020 - 2021'}
                  resumeSubTilte={'House of Life, Leeds'}
                  resumeTitle={'UI Designer'}
                />
              </div>
              <div
                data-aos='fade-up-right'
                data-aos-duration='1000'
              >
                <ResumeCard
                  resumeDesc={'2018 - 2020'}
                  resumeSubTilte={'Theme Junction, Bursa'}
                  resumeTitle={'Junior Graphics Designer'}
                />
              </div>
            </div>
          </div>
          <div>
            <h1
              className='font-Sora text-[30px] md:text-[36px] lg:text-[40px] xl:text-[45px] font-bold mt-5 md:mt-0 bg-gradient-to-r from-PrimaryColor-0 to-white bg-clip-text text-transparent flex items-center gap-5'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <img
                src={icon2}
                draggable='false'
                className='w-7 lg:w-[inherit]'
              />
              My Education
            </h1>
            <div className='relative z-10 mt-10 md:mt-[45px] grid grid-cols-1 gap-y-[30px]'>
              <div
                data-aos='fade-up-left'
                data-aos-duration='1000'
              >
                <ResumeCard
                  resumeDesc={'2020 - 2023'}
                  resumeSubTilte={'Harverd University'}
                  resumeTitle={'Programming course'}
                />
              </div>
              <div
                data-aos='fade-up-left'
                data-aos-duration='1000'
              >
                <ResumeCard
                  resumeDesc={'2016 - 2020'}
                  resumeSubTilte={'University of Denmark'}
                  resumeTitle={'Graphic design course'}
                />
              </div>
              <div
                data-aos='fade-up-left'
                data-aos-duration='1000'
              >
                <ResumeCard
                  resumeDesc={'2012 - 2015'}
                  resumeSubTilte={'University of California'}
                  resumeTitle={'Web design course'}
                />
              </div>
              <div
                data-aos='fade-up-left'
                data-aos-duration='1000'
              >
                <ResumeCard
                  resumeDesc={'2010 - 2011'}
                  resumeSubTilte={'Parsons, The New School'}
                  resumeTitle={'Design & Technology'}
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
