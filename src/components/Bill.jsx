import { apple, bill, google} from '../assets'
import styles, { layout } from '../style'


const Bill = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Billing and invoices <br className='sm:block hidden'/>at the touch of a button.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}><span className='text-gradient font-bold'>YouPI</span> helps you keep track of all your invoices. No payment goes unbilled, no bills go unpaid.</p>
        <div className='flex flex-row fwlex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt='apple_store' className='w-[128px] h-[42px] object-contain'/>
          <img src={google} alt='google_play' className='w-[128px] h-[42px] object-contain'/>


        </div>

      </div>

    </section>
  )
}

export default Bill