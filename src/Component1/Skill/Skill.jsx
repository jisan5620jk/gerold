import SkillCard from './SkillCard';
import icon from '/images/skill/skill-icon.png';
import icon2 from '/images/skill/skill-icon2.png';

const SkillData = [
  {
    id: 1,
    skillSubTilte: '2022 - Present',
    skillTitle: 'Lead Developer',
    skillDesc: 'Blockdots, London',
  },
  {
    id: 2,
    skillSubTilte: '2021 - 2022',
    skillTitle: 'Full Stack Web Developer',
    skillDesc: 'Parsons, The New School',
  },
  {
    id: 3,
    skillSubTilte: '2020 - 2021',
    skillTitle: 'UI Designer',
    skillDesc: 'House of Life, Leeds',
  },
  {
    id: 4,
    skillSubTilte: '2018 - 2020',
    skillTitle: 'Junior Graphics Designer',
    skillDesc: 'Theme Junction, Bursa',
  },
];

const SkillData2 = [
  {
    id: 1,
    skillSubTilte: '2020 - 2023',
    skillTitle: 'Programming course',
    skillDesc: 'Harverd University',
  },
  {
    id: 2,
    skillSubTilte: '2016 - 2020',
    skillTitle: 'Graphic design course',
    skillDesc: 'University of Denmark',
  },
  {
    id: 3,
    skillSubTilte: '2012 - 2015',
    skillTitle: 'Web design course',
    skillDesc: 'University of California',
  },
  {
    id: 4,
    skillSubTilte: '2010 - 2011',
    skillTitle: 'Design & Technology',
    skillDesc: 'Parsons, The New School',
  },
];

const Skill = () => {
  return (
    <section className=' bg-BodyBg2-0 py-[120px] relative'>
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
              {SkillData.map(({ id, skillDesc, skillSubTilte, skillTitle }) => {
                return (
                  <div key={id}>
                    <SkillCard
                      skillDesc={skillDesc}
                      skillSubTilte={skillSubTilte}
                      skillTitle={skillTitle}
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
              {SkillData2.map(
                ({ id, skillDesc, skillSubTilte, skillTitle }) => {
                  return (
                    <div key={id}>
                      <SkillCard
                        skillDesc={skillDesc}
                        skillSubTilte={skillSubTilte}
                        skillTitle={skillTitle}
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

export default Skill;
