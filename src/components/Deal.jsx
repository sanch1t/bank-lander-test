import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'


const Deal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Newer and better deals.<br className='sm:block hidden'/> Daily.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Never miss a deal again. Real-time updates for the latest news in the world of finance that can save you every last paisa.</p>
      <Button styles="mt-10"/>

    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt='card' className='w-[100%] h-[100%]'/>

    </div>

  </section>

)


export default Deal