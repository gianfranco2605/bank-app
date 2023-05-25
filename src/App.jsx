import styles from "./style";

import { Navbar, Hero, Stats, Attivita, CardDeal, Testimoni, Clienti, CTA, Footer, Fatturazione } from "./components";



const App = () =>  (
    <div className='bg-primary  w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}` }>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Attivita />
          <Fatturazione />
          <CardDeal />
          <Testimoni />
          <Clienti />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )


export default App