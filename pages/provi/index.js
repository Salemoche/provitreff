// Components
import LayoutComponent from '../../components/global/layout/layout.component';


// Data
import { apolloClient } from '../../lib/apolloClient';
import { GLOBAL_QUERY, PROVI_QUERY } from '../../lib/queries';
import { useSnapshot } from 'valtio';
import { state } from '../../lib/state';

// Animation
import { motion } from 'framer-motion'
import { useSetGlobals } from '../../lib/hooks';
import TitleComponent from '../../components/global/title/title.component';
import { SectionStyles } from '../../styles/global.styles.components';
import { DownloadsStyles } from './index.styles';
import { ContactStyles } from './index.styles';
// Helpers

const Provi = ({ locale, content, global }) => {

    const snap = useSnapshot(state);
    useSetGlobals( global );
    console.log(content)
    
    const conceptContent = content?.proviEntries[0]?.conceptContent || '';
    const conceptTitleUrl = content?.proviEntries[0]?.conceptTitle[0]?.url || '';
    const contactContent = content?.proviEntries[0]?.contactContent || '';
    const contactTitleUrl = content?.proviEntries[0]?.contactTitle[0]?.url || '';
    const historyContent = content?.proviEntries[0]?.historyContent || '';
    const historyTitleUrl = content?.proviEntries[0]?.historyTitle[0]?.url || '';

    
	return (
        <motion.div
            key="provi-mieten"
            className="provi-page provi-home"
            initial={{ opacity: 0, backgroundColor: 'white' }}
            animate={{ opacity: 1, backgroundColor: snap?.global?.colors?.current || global?.colors?.colors[1] }}
            exit={{ opacity: 0 }}
        >
            <LayoutComponent>
                <TitleComponent url={conceptTitleUrl} id="concept"/>
                <SectionStyles dangerouslySetInnerHTML={{__html: conceptContent }}></SectionStyles>
                <TitleComponent url={contactTitleUrl} id="contact"/>
                <ContactStyles dangerouslySetInnerHTML={{__html: contactContent }}></ContactStyles>
                <TitleComponent url={historyTitleUrl} id="history"/>
                <SectionStyles dangerouslySetInnerHTML={{__html: historyContent }}></SectionStyles>
            </LayoutComponent>
        </motion.div>
	)
}

export default Provi


export const getStaticProps = async(locale) => {

    let language = 'default'

    switch (locale.locale) {
        case 'en':
            language = 'english'
            break;
    }

    const contentData = await apolloClient.query({
        query: PROVI_QUERY(),
        variables: {
            language: language
        }
    });

    const globalData = await apolloClient.query({
        query: GLOBAL_QUERY()
    });

    
    const content = contentData.data;
    const global = globalData.data;
    
    return {
        props: {
            locale,
            content,
            global
        }
    }
}  
