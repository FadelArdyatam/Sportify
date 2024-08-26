import { motion } from 'framer-motion';
import Bannerimg from '/Images/backgroundgirl.png';

const BgStyle = {
    backgroundImage: `url(${Bannerimg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
};

const Hero = () => {
    return (
    <div className='mr-10 ml-10'>
        <div style={BgStyle} className='bg-white dark:bg-black duration-200 '>
            <div className='bg-white/20 dark:bg-black/20 duration-200'>
                <motion.div
                    className='container min-h-[620px] flex items-center space-x-5'
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className='w-full md:w-[800px] mx-auto gap-2'>
                        <p className=' text-primary text-2xl'>Start Your Fitness Journey</p>
                        <h1 className='text-5xl md:text-7xl font-bold dark:text-white mb-2'>Your Fitness Journey Begins!</h1>
                        <p className='dark:text-white font-serif'>The body achieves what the mind believes</p>
                        <motion.button
                            className='primary-btn'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                         <a href='/Products'>
                            Get Started
                         </a>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
    )
}

export default Hero;
