import { motion } from 'framer-motion';
import Bannerimg from '../../assets/AppBanner.png';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaAppStoreIos } from 'react-icons/fa';


const BgStyle = {
    backgroundImage: `url(${Bannerimg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
};

const AppBanner = () => {
    return (
    <div className='mr-10 ml-10'>
        <div style={BgStyle} className='bg-white dark:bg-black duration-200 '>
            <div className=' dark:bg-black/20 duration-200'>
                <motion.div
                    className='container min-h-[620px] flex items-center space-x-5'
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className='w-full md:w-[800px] mx-auto gap-2 justify-center'>
                        <p className=' text-primary text-2xl'>Start Your Fitness Journey</p>
                        <h1 className='text-5xl md:text-7xl font-bold dark:text-white mb-2'>Your Fitness Journey Begins!</h1>
                        <p className='dark:text-white font-serif text-white'>The body achieves what the mind believes</p>
                        <motion.button
                            className='primary-btn'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Download App
                        </motion.button>

                        <div className='text-white flex justify-center items-center mx-auto'>
                          <FaAppStoreIos  className='w-10 h-10 flex bg-black '/>APP STORE
                          <IoLogoGooglePlaystore className='w-10 h-10'/>PLAY STORE
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
    )
}

export default AppBanner;
