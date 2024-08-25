import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Bannerimg from '../../assets/man.png';
import { slideLeft } from '../../Utility/animation';

const About3 = () => {
    // Define the animation controls
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    // Start the animation when the element comes into view
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div ref={ref} className='py-16 dark:bg-black bg-slate-100 duration-200 dark:text-white'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
                    
                    {/* Image section */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        animate={controls}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src={Bannerimg} alt="banner" className='sm:scale-105 max-h-[300px] drop-shadow-md mx-auto' />
                    </motion.div>

                    {/* Text section */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        animate={controls}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='space-y-4 px-2'
                    >
                        {/* Heading Section */}
                        <div className='flex items-center gap-4'>
                            <div className='text-primary text-7xl'>
                                <h1 className='font-bold'>01</h1>
                            </div>
                            <div className='items-center gap-4'>
                                <p className='text-primary'>Global Fitness</p>
                                <h1 className='text-2xl sm:text-4xl font-bold'>About Us</h1>
                            </div>
                        </div>
                        {/* Bottom Section */}
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.
                                asprenatur, magnam tenetur odio quo et molestias
                                Lorem {" "}
                                <br />
                                <br />
                                dolor sit amet consectetur adipisicing elit.
                                sequi, tempora
                            </p>
                        </div>
                        <button className='outline-btn'>Get Started</button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About3;
