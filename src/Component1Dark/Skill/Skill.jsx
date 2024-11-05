import SkillCard from './SkillCard';
import icon from '/images/icons/figma.svg';
import icon2 from '/images/icons/sketch.svg';
import icon3 from '/images/icons/xd.svg';
import icon4 from '/images/icons/wp.svg';
import icon5 from '/images/icons/react.svg';
import icon6 from '/images/icons/js.svg';

const Skill = () => {
  return (
    <section className=' bg-BodyBg-0 py-[60px] md:py-20 lg:pt-[96px] xl:pt-[106px] lg:pb-[100px] xl:pb-[120px] relative'>
      <div className='Container'>
        <div className='text-center'>
          <h1
            className='font-Sora text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-bold bg-gradient-to-l to-PrimaryColor-0 via-PrimaryColor-0 from-white from-25% bg-clip-text text-transparent'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            My Skills
          </h1>
          <p
            className='font-Sora text-TextColor-0 mt-2 mx-auto max-w-[640px] w-full'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div className='relative z-10 mt-10 md:mt-[50px] flex gap-5 items-center justify-center flex-wrap'>
          <div
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <SkillCard
              skillIcon={icon}
              skillPercent={92}
              skillSuffix={'%'}
              skillTitle={'Figma'}
            />
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <SkillCard
              skillIcon={icon2}
              skillPercent={80}
              skillSuffix={'%'}
              skillTitle={'Sketch'}
            />
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <SkillCard
              skillIcon={icon3}
              skillPercent={85}
              skillSuffix={'%'}
              skillTitle={'XD'}
            />
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <SkillCard
              skillIcon={icon4}
              skillPercent={99}
              skillSuffix={'%'}
              skillTitle={'WordPess'}
            />
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <SkillCard
              skillIcon={icon5}
              skillPercent={89}
              skillSuffix={'%'}
              skillTitle={'React'}
            />
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <SkillCard
              skillIcon={icon6}
              skillPercent={93}
              skillSuffix={'%'}
              skillTitle={'JavaScript'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
