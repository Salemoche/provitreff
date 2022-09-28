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
import { EventStyles, ProgramStyles } from '../styles/modules/aktuell/index.styles';
import { cleanHTML } from '../lib/helpers';

// Helpers

const Home = ({ locale, content, global }) => {

    const snap = useSnapshot(state);
    useSetGlobals( global );
    
    const programTitleUrl = content?.currentEntries[0]?.programTitle[0]?.url;
    const programTitleUrlHover = content?.currentEntries[0]?.programTitleHover[0]?.url;
    const program = content?.currentEntries[0]?.program;

	return (
        <motion.div
            key="provi-home"
            className="provi-page provi-home"
            initial={{ opacity: 0, backgroundColor: 'white' }}
            animate={{ opacity: 1, backgroundColor: snap?.global?.colors?.current || global?.colors?.colors[1] }}
            exit={{ opacity: 0 }}
        >
            <LayoutComponent>
                <TitleComponent url={programTitleUrl} hoverUrl={programTitleUrlHover}/>
                <br />
                <ProgramStyles>
                    { program.map( month => (
                        <div className="month" key={month.month} id={month.month}>
                            <h2>{ month.month }</h2>
                            <br />

                            { month.selected_events.map( event => (
                                <EventStyles key={event.title}>
                                    <div>{ event.eventTime }</div>
                                    <div>{ event.title }</div>
                                    { event.eventInfo && <div dangerouslySetInnerHTML={{ __html: cleanHTML(event.eventInfo) }}></div> }
                                    { event.eventTags && <div>{ event.eventTags }</div> }
                                </EventStyles>
                            ))}
                            <br />
                        </div>
                    ))}
                </ProgramStyles>
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

    const contentData = await apolloClient.query({
        query: AKTUELL_QUERY(),
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
