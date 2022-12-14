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
import { ContactStyles } from  '../../styles/modules/provi/index.styles';
import { cleanHTML } from '../../lib/helpers';
import ImageSliderComponent from '../../components/global/image-slider/image-slider.component';
// Helpers

const Provi = ({ locale, content, global }) => {

    const snap = useSnapshot(state);
    useSetGlobals( global );
    
    const conceptContent = content?.proviEntries[0]?.conceptContent || '';
    const conceptTitleUrl = content?.proviEntries[0]?.conceptTitle[0]?.url || '';
    const conceptTitleUrlHover = content?.proviEntries[0]?.conceptTitleHover[0]?.url || '';
    const contactContent = content?.proviEntries[0]?.contactContent || '';
    const contactTitleUrl = content?.proviEntries[0]?.contactTitle[0]?.url || '';
    const contactTitleUrlHover = content?.proviEntries[0]?.contactTitleHover[0]?.url || '';
    const historyContent = content?.proviEntries[0]?.historyContent || '';
    const historyTitleUrl = content?.proviEntries[0]?.historyTitle[0]?.url || '';
    const historyTitleUrlHover = content?.proviEntries[0]?.historyTitleHover[0]?.url || '';
    const images = content?.proviEntries[0]?.imageSlider || '';
    
	return (
        <motion.div
            key="provi-mieten"
            className="provi-page provi-home"
            initial={{ opacity: 0, backgroundColor: 'white' }}
            animate={{ opacity: 1, backgroundColor: snap?.global?.colors?.current || global?.colors?.colors[1] }}
            exit={{ opacity: 0 }}
        >
            <LayoutComponent>
                <TitleComponent url={conceptTitleUrl} hoverUrl={conceptTitleUrlHover} id="concept"/>
                <div class="provi-gap"></div>
                <SectionStyles dangerouslySetInnerHTML={{__html: cleanHTML(conceptContent) }}></SectionStyles>
                <div class="provi-gap"></div><div class="provi-gap"></div>
                <TitleComponent url={contactTitleUrl} hoverUrl={contactTitleUrlHover} id="contact"/>
                <div class="provi-gap"></div>
                <ContactStyles dangerouslySetInnerHTML={{__html: cleanHTML(contactContent) }}></ContactStyles>
                <TitleComponent url={historyTitleUrl} hoverUrl={historyTitleUrlHover} id="history"/>
                <div class="provi-gap"></div>
                <ImageSliderComponent images={images} />
                <SectionStyles dangerouslySetInnerHTML={{__html: cleanHTML(historyContent) }}></SectionStyles>
                    
                <div class="provi-gap"></div><div class="provi-gap"></div>
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
