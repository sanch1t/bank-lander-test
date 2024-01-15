import styles from '../style'
import {discount, robot} from '../assets'
import GS from './GS'


const Hero = () => (
    <section id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className='flex flex-row items-center py[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
            <img
              src={discount}
              alt='discount'
              className='h-[32px] w-[32px]'/>
              <p className={` ${styles.paragraph} ml-2`}>
                <span className='text-white'>40%</span> Discount For {" "} <span className='text-white'>New Accounts!</span>
              </p>
          </div>

          <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
              Next-Gen Finance.  <br className='sm:block hidden'/>
              From<span className='text-gradient'> You</span>PI,  <br className='sm:block hidden'/>
              For <span className='text-gradient'> YOU.</span>
            </h1>

            <div className='ss:flex hidden md:mr-4 mr-0'>
              <GS/>

            </div>

          </div>

          <p className={` ${styles.paragraph} max-w-[470px] mt-5`}>
            Our team of experts uses unique methodologies to identify the cards and finance methods that are tailor-fitted to your needs. Leave the hassle to us.
          </p>

        </div>

        <div className={` flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

          <img
            src={robot}
            alt='billing'
            className='w-[100%] h-[100%] relative z-[5]'
            />

          <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
          <div className='absolute z-[1] w-[80%] h-[80%] rounded bottom-40 white__gradient'/>
          <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GS/>
        </div>

    </section>
  )


export default Hero