import React from 'react'
import { ContentStyles } from './flexible-content.styles'
import TitleComponent from '../title/title.component';
import { TableStyles } from '../../../styles/global.styles.components';

const FlexibleContentComponent = ({ content }) => { 
// console.log(content[4]?.table[0])
    return (
        <>   
            { content.map( ( section, i ) => {
                if ( section.typeHandle == 'sectionTitle' ) {
                    return <React.Fragment key={`section-title-${i}`}><TitleComponent url={ section.sectionTitle[0].url } hoverUrl={ section.sectionTitleHover[0].url } id="download" key={`title-${i}`}/><br /></React.Fragment>
                } else if ( section.typeHandle == 'standardContent' ) {
                    return (
                        <ContentStyles className="provi-content" key={`content-${i}`} isOnlyTitle={section.subtitle && !section.text}>
                            { section.subtitle && <h2>{ section.subtitle }</h2> }
                            { section.subtitle && <br /> }
                            { section.text && <div dangerouslySetInnerHTML={{ __html: section.text}}></div> }
                            { (section.subtitle || section.text) && <br /> }
                            { section.text && <br /> }
                            { (section.subtitle && section.text) && <br /> }
                        </ContentStyles>
                    )
                } else if ( section.typeHandle == 'table' ) {
                    return (
                        <React.Fragment key={`table-${i}`}>
                            <TableStyles className="provi-table">
                                { section.tableHeader && <h3>{ section.tableHeader }</h3> }
                                <div className="provi-table-table">
                                    { section.table.map( ( row, j ) => (
                                        <div className="provi-table-row" key={`row-${j}`}>
                                            <div className="provi-table-element" dangerouslySetInnerHTML={{ __html: row.col1}}></div>
                                            <div className="provi-table-element" dangerouslySetInnerHTML={{ __html: row.col2}}></div>
                                        </div>
                                    )) }
                                </div>
                            </TableStyles>
                        </React.Fragment>
                    )
                }
            })}
        </>
    )
}

export default FlexibleContentComponent