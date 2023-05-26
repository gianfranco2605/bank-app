import Inizio from './Inizio';

import styles from '../style';
import { discount, robot } from '../assets'

const Hero = () =>  (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingX}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2">
          <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%  </span>Di Sconto Per I Primi {" "}
            <span className='text-white'>3 Mesi </span>
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>La Prossima <br className='sm:block hidden'/> {" "}<span className='text-gradient'>Generazione</span>{" "}</h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <Inizio />
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>Per I Pagamenti Online.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Il nostro team di esperti utilizza una metodologia per identificare le carte di credito più adatte alle tue esigenze. Esaminiamo i tassi di interesse annui e le commissioni annuali.</p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/> 
        {/* GRADIENT BACKGROUND */}
        <div className='absolute z-[0] w-[40%] h-[40%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] bottom-20  blue__gradient'></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <Inizio />
      </div>
    </section>    
  )


export default Hero