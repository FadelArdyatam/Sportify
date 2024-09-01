import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Bannerimg from '../../assets/about2.png';
import { slideRight } from '../../Utility/animation';

const About2 = () => {
    // Define the animation controls
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    // Define the slideRight variant

    // Start the animation when the element comes into view
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
      <div
        ref={ref}
        className="py-16 dark:bg-dark bg-white duration-200 dark:text-white"
      >
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            {/* Text section */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate={controls}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 px-2"
            >
              {/* Heading Section */}
              <div className="flex items-center gap-4">
                <div className="text-primary text-7xl">
                  <h1 className="font-bold">02</h1>
                </div>
                <div className="items-center gap-4">
                  <p className="text-primary">Global Fitness</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">Footsal Center</h1>
                </div>
              </div>
              {/* Bottom Section */}
              <div>
                <p>
                  Penyewaan bola futsal dengan proses yang mudah dan cepat.
                  Pesan online, dan bola siap digunakan kapan pun Anda
                  butuhkan.Dapatkan bola futsal terbaik dengan cara sewa bolanya
                  dari lokasi tempatmu bermain dan dapatan diskonnya, atau kamu
                  bisa membelinya di store kami yang terpercaya keunggulannya.{" "}
                  <br />
                  <br />
                  
                </p>
              </div>
              <button className="outline-btn">Get Started</button>
            </motion.div>

            {/* Image section */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate={controls}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={Bannerimg}
                alt="banner"
                className="sm:scale-105 max-h-[300px] drop-shadow-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    );
}

export default About2;