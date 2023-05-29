import styles from '../style';
import Button from './Button';
 
const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row fllex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={`${styles.heading2}`}>Prova i nostri servizi ora!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>L'unica cosa che devi fare e accetare pagamenti con carta e far crecere il tuo negozio in tutto il mondo</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>  
  )


export default CTA