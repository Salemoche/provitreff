// Components
import LayoutComponent from '../components/global/layout/layout.component';


// Data
import { apolloClient } from '../lib/apolloClient';
import { GLOBAL_QUERY, AKTUELL_QUERY } from '../lib/queries';
import { useSnapshot } from 'valtio';
import { state } from '../lib/state';

// Animation
import { motion } from 'framer-motion'
import { useSetGlobals } from '../lib/hooks';
import TitleComponent from '../components/global/title/title.component';

// Helpers
const Home = ({ locale, aktuell, global }) => {

    const snap = useSnapshot(state);
    useSetGlobals( global );
    
    const programTitleUrl = aktuell?.currentEntries[0]?.programTitle[0]?.url;
    console.log('thesnap:', snap.global, global?.colors?.colors[1])

	return (
        <motion.div
            key="provi-home"
            className="provi-page provi-home"
            initial={{ opacity: 0, backgroundColor: 'white' }}
            animate={{ opacity: 1, backgroundColor: snap?.global?.colors?.current || global?.colors?.colors[1] }}
            exit={{ opacity: 0 }}
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
