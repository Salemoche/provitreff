import React from 'react'
import { ContentStyles } from './flexible-content.styles'
import TitleComponent from '../title/title.component';
import { TableStyles } from '../../../styles/global.styles.components';

const FlexibleContentComponent = ({ content }) => { 

    return (
        <>   
            { content.map( ( section, i ) => {
                if ( section.typeHandle == 'sectionTitle' ) {
                    return <div key={`section-title-${i}`}><TitleComponent url={ section.sectionTitle[0].url } hoverUrl={ section.sectionTitleHover[0].url } id="download" key={`title-${i}`}/><br /></div>
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
                        <>
                            <TableStyles className="provi-table" key={`table-${i}`}>
                                { section.tableHeader && <h3>{ section.tableHeader }</h3> }
                                <table>
                                    <tbody>
                                        { section.table.map( ( row, j ) => (
                                            <tr key={`row-${j}`}>
                                                <td>{row.col1}</td>
                                                <td>{row.col2}</td>
                                            </tr>
                                        )) }
                                    </tbody>
                                </table>
                            </TableStyles>
                        </>
                    )
                }
            })}
        </>
    )
}

export default FlexibleContentComponent