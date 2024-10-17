import ResumeCard from './ResumeCard';
import icon from '/images/resume/resume-icon.png';
import icon2 from '/images/resume/resume-icon2.png';

const resumeData = [
  {
    id: 1,
    resumeSubTilte: '2022 - Present',
    resumeTitle: 'Lead Developer',
    resumeDesc: 'Blockdots, London',
  },
  {
    id: 2,
    resumeSubTilte: '2021 - 2022',
    resumeTitle: 'Full Stack Web Developer',
    resumeDesc: 'Parsons, The New School',
  },
  {
    id: 3,
    resumeSubTilte: '2020 - 2021',
    resumeTitle: 'UI Designer',
    resumeDesc: 'House of Life, Leeds',
  },
  {
    id: 4,
    resumeSubTilte: '2018 - 2020',
    resumeTitle: 'Junior Graphics Designer',
    resumeDesc: 'Theme Junction, Bursa',
  },
];

const resumeData2 = [
  {
    id: 1,
    resumeSubTilte: '2020 - 2023',
    resumeTitle: 'Programming course',
    resumeDesc: 'Harverd University',
  },
  {
    id: 2,
    resumeSubTilte: '2016 - 2020',
    resumeTitle: 'Graphic design course',
    resumeDesc: 'University of Denmark',
  },
  {
    id: 3,
    resumeSubTilte: '2012 - 2015',
    resumeTitle: 'Web design course',
    resumeDesc: 'University of California',
  },
  {
    id: 4,
    resumeSubTilte: '2010 - 2011',
    resumeTitle: 'Design & Technology',
    resumeDesc: 'Parsons, The New School',
  },
];

const Resume = () => {
  return (
    <section className=' bg-BodyBg2-0 pt-[106px] pb-[120px] relative'>
      <div className='Container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-[30px] gap-x-[120px] items-center'>
          <div>
            <h1 className='font-Sora text-[45px] font-bold bg-gradient-to-r from-PrimaryColor-0 to-white bg-clip-text text-transparent flex items-center gap-5'>
              <img
                src={icon}
                draggable='false'
              />
              My Experience
            </h1>
            <div className='relative z-10 mt-[45px] grid grid-cols-1 gap-y-[30px]'>
              {resumeData.map(({ id, resumeDesc, resumeSubTilte, resumeTitle }) => {
                return (
                  <div key={id}>
                    <ResumeCard
                      resumeDesc={resumeDesc}
                      resumeSubTilte={resumeSubTilte}
                      resumeTitle={resumeTitle}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className='font-Sora text-[45px] font-bold bg-gradient-to-r from-PrimaryColor-0 to-white bg-clip-text text-transparent flex items-center gap-5'>
              <img
                src={icon2}
                draggable='false'
              />
              My Education
            </h1>
            <div className='relative z-10 mt-[45px] grid grid-cols-1 gap-y-[30px]'>
              {resumeData2.map(
                ({ id, resumeDesc, resumeSubTilte, resumeTitle }) => {
                  return (
                    <div key={id}>
                      <ResumeCard
                        resumeDesc={resumeDesc}
                        resumeSubTilte={resumeSubTilte}
                        resumeTitle={resumeTitle}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
