import Inizio from './Inizio';

import styles from '../style';
import { discount, robot } from '../assets'

const Hero = () =>  (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%  </span>Di Sconto Per I Primi {" "}
            <span className='text-white'>3 Mesi </span>
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]'>La Prossima <br className='sm:block hidden'/> {" "}<span className='text-gradient'>Generazione</span>{" "}Per I Pagamenti Online.</h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <Inizio></Inizio>
          </div>
        </div>
      </div>
    </section>    
  )


export default Hero