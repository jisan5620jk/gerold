import CountUp from "react-countup";

const Counter = () => {
    return (
      <div className='bg-white'>
        <div className='Container'>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-10 xl:gap-20 py-16 sm:py-20 md:py-[92px]'>
            <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
              <div>
                <CountUp
                  start={-11}
                  end={'14'}
                  suffix={''}
                  className='font-Sora text-4xl sm:text-6xl md:text-[64px] text-PrimaryColor-0 font-bold'
                />
              </div>
              <p className='font-Sora text-PrimaryColor-0 -mt-2'>
                Years of <br />
                Experience
              </p>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
              <div>
                <CountUp
                  start={-11}
                  end={'50'}
                  suffix={'+'}
                  className='font-Sora text-4xl sm:text-6xl md:text-[64px] text-PrimaryColor-0 font-bold'
                />
              </div>
              <p className='font-Sora text-PrimaryColor-0 -mt-2'>
                Project <br />
                Completed
              </p>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
              <div>
                <CountUp
                  start={-11}
                  prefix='1.'
                  end={'5'}
                  suffix='k+'
                  className='font-Sora text-4xl sm:text-6xl md:text-[64px] text-PrimaryColor-0 font-bold'
                />
              </div>
              <p className='font-Sora text-PrimaryColor-0 -mt-2'>
                Happy <br />
                Clients
              </p>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center gap-3'>
              <div>
                <CountUp
                  start={-11}
                  end={'12'}
                  suffix={''}
                  className='font-Sora text-4xl sm:text-6xl md:text-[64px] text-PrimaryColor-0 font-bold'
                />
              </div>
              <p className='font-Sora text-PrimaryColor-0 -mt-2'>
                Creativity <br /> Award
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Counter;