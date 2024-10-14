import SkillCard from './SkillCard';
import { LuArrowUpRight } from 'react-icons/lu';

const SkillData = [
  {
    id: 1,
    skillDesc:
      'I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people',
    skillNumber: '01',
    skillTitle: 'Branding Design',
    skillUrl: '/',
    btnIcon: <LuArrowUpRight />,
  },
  {
    id: 2,
    skillDesc:
      'I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people',
    skillNumber: '02',
    skillTitle: 'Web Design',
    skillUrl: '/',
    btnIcon: <LuArrowUpRight />,
  },
  {
    id: 3,
    skillDesc:
      'I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people',
    skillNumber: '03',
    skillTitle: 'UI/UX Design',
    skillUrl: '/',
    btnIcon: <LuArrowUpRight />,
  },
  {
    id: 4,
    skillDesc:
      'I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people',
    skillNumber: '04',
    skillTitle: 'Graphic Design',
    skillUrl: '/',
    btnIcon: <LuArrowUpRight />,
  },
];

const Skill = () => {
  return (
    <section className=' bg-BodyBg2-0 py-[120px] relative'>
      <div className='Container'>
        <div className='text-center'>
          <h1 className='font-Sora text-[45px] font-bold bg-gradient-to-r from-PrimaryColor-0 to-white bg-clip-text text-transparent'>
            My Quality skills
          </h1>
          <p className='font-Sora text-TextColor-0 mt-4'>
            We put your ideas and thus your wishes in the form of a unique web
            project that <br /> inspires you and you customers.
          </p>
        </div>
        <div className='relative z-10 mt-[60px]'>
          {SkillData.map(
            ({ id, skillDesc, skillNumber, skillTitle, skillUrl, btnIcon }) => {
              return (
                <div key={id}>
                  <SkillCard
                    skillDesc={skillDesc}
                    skillNumber={skillNumber}
                    skillTitle={skillTitle}
                    skillUrl={skillUrl}
                    btnIcon={btnIcon}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Skill;
