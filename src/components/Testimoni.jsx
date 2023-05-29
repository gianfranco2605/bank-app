import { feedback } from '../constans';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimoni = () => (
  <section id='clienti' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>Cosa dicono le <br className='sm:block hidden' /> persone su di noi</h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Tutto ciò di cui hai bisogno per accettare pagamenti con carta e far crescere la tua attività ovunque nel mondo.
        </p>
      </div>
    </div>

    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container z-[1]'>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
  )


export default Testimoni