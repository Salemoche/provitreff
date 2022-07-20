// Components
import LayoutComponent from '../components/global/layout/layout.component';


// Data
import { apolloClient } from '../lib/apolloClient';
import { GLOBAL_QUERY, AKTUELL_QUERY } from '../lib/queries';

// Animation
import { motion } from 'framer-motion'
import { useSetGlobals } from '../lib/hooks';
import TitleComponent from '../components/global/title/title.component';

// Helpers
const Home = ({ locale, aktuell, global }) => {

    useSetGlobals( global );
    
    const programTitleUrl = aktuell?.currentEntries[0]?.programTitle[0]?.url;

	return (
        <motion.div
            key="provi-home"
            className="provi-page provi-home"
            // initial={{ opacity: 0, transform: 'translateY(-100%)' }}
            // animate={{ opacity: 1, transform: 'translateY(0)', transition: { duration: .6 }, transitionEnd: { transform: 'none' }  }}
            // exit={{ opacity: 1, transform: 'translateY(-100%)', transition: { duration: .6, delay: 0 }  }}
            // style={ homeAnimationWrapperStyles }
            // initial={{ y: 0}}
            // animate={{ y: 0}}
            // exit={{ y: /*isMobile ? 0 :*/ -200 - windowHeight.current}}
            // transition={{ duration: 1.2 }}
        >
            <LayoutComponent>
                <TitleComponent url={programTitleUrl}/>
            </LayoutComponent>
        </motion.div>
	)
}

export default Home


export const getStaticProps = async(locale) => {

    let language = 'default'

    switch (locale.locale) {
        case 'en':
            language = 'english'
            break;
    }

    console.log('oy ––––––––––––––––––––––––––––')
    console.log(locale.locale, language)

    const aktuellData = await apolloClient.query({
        query: AKTUELL_QUERY(),
        variables: {
            language: language
        }
    });

    const globalData = await apolloClient.query({
        query: GLOBAL_QUERY()
    });

    
    const aktuell = aktuellData.data;
    const global = globalData.data;
    
    return {
        props: {
            locale,
            aktuell,
            global
        }
    }
}  
