import SkillCard from './SkillCard';
import icon from '/images/icons/figma.svg';
import icon2 from '/images/icons/sketch.svg';
import icon3 from '/images/icons/xd.svg';
import icon4 from '/images/icons/wp.svg';
import icon5 from '/images/icons/react.svg';
import icon6 from '/images/icons/js.svg';

const SkillData = [
  {
    id: 1,
    skillIcon: icon,
    skillPercent: 92,
    skillSuffix: '%',
    skillTitle: 'Figma',
  },
  {
    id: 2,
    skillIcon: icon2,
    skillPercent: 80,
    skillSuffix: '%',
    skillTitle: 'Sketch',
  },
  {
    id: 3,
    skillIcon: icon3,
    skillPercent: 85,
    skillSuffix: '%',
    skillTitle: 'XD',
  },
  {
    id: 4,
    skillIcon: icon4,
    skillPercent: 99,
    skillSuffix: '%',
    skillTitle: 'Wordpress',
  },
  {
    id: 5,
    skillIcon: icon5,
    skillPercent: 89,
    skillSuffix: '%',
    skillTitle: 'React',
  },
  {
    id: 6,
    skillIcon: icon6,
    skillPercent: 93,
    skillSuffix: '%',
    skillTitle: 'JavaScript',
  },
];


const Skill = () => {
  return (
    <section className=' bg-BodyBg-0 pt-[113px] pb-[120px] relative'>
      <div className='Container'>
        <div className='text-center'>
          <h1 className='font-Sora text-[27px] sm:text-[34px] md:text-[45px] font-medium bg-gradient-to-l to-PrimaryColor-0 via-PrimaryColor-0 from-white from-25% bg-clip-text text-transparent'>
            My Skills
          </h1>
          <p className='font-Sora text-TextColor-0 mt-2 mx-auto max-w-[640px] w-full'>
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div className='relative z-10 mt-[50px] flex gap-5 items-center justify-center flex-wrap'>
          {SkillData.map(
            ({ id, skillIcon, skillPercent, skillSuffix, skillTitle }) => {
              return (
                <div key={id}>
                  <SkillCard
                    skillIcon={skillIcon}
                    skillPercent={skillPercent}
                    skillSuffix={skillSuffix}
                    skillTitle={skillTitle}
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
