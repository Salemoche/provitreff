import React from 'react'
import { ContentStyles } from './flexible-content.styles'
import TitleComponent from '../title/title.component';
import { TableStyles } from '../../../styles/global.styles.components';

const FlexibleContentComponent = ({ content }) => { 

    return (
        <>   
            { content.map( ( section, i ) => {
                if ( section.typeHandle == 'sectionTitle' ) {
                    return <TitleComponent url={ section.sectionTitle[0].url } id="download" key={`title-${i}`}/>
                } else if ( section.typeHandle == 'standardContent' ) {
                    return (
                        <ContentStyles className="provi-content" key={`content-${i}`}>
                            { section.subtitle && <h2>{ section.subtitle }</h2> }
                            { section.text && <div dangerouslySetInnerHTML={{ __html: section.text}}></div> }
                        </ContentStyles>
                    )
                } else if ( section.typeHandle == 'table' ) {
                    return (
                        <TableStyles className="provi-table" key={`table-${i}`}>
                            <tbody>
                                { section.table.map( ( row, j ) => (
                                    <tr key={`row-${j}`}>
                                        <td>{row.col1}</td>
                                        <td>{row.col2}</td>
                                    </tr>
                                )) }
                            </tbody>
                        </TableStyles>
                    )
                }
            })}
        </>
    )
}

export default FlexibleContentComponent