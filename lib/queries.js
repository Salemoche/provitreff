import {
    gql
} from "@apollo/client";

export const GLOBAL_QUERY = () => {
    return gql `
        query MyQuery {
            globalSet {
                ... on globalSettings_GlobalSet {
                    proviAddress
                    proviNumber
                    proviEmail
                    proviLogo {
                        url
                    }
                    proviLogoHover {
                        url
                    }
                    proviLogoBurger {
                        url
                    }
                        colors {
                        ... on colors_color_matrix_BlockType {
                            color
                        }
                    }
                }
            }
        }
    `
}

export const AKTUELL_QUERY = () => {
    return gql `
        query MyQuery($language: [String]) {
            currentEntries(site: $language) {
                ... on current_current_Entry {
                    id
                    programTitle {
                        id
                        url
                    }
                    programTitleHover {
                        id
                        url
                    }
                    program {
                        ... on program_programm_BlockType {
                            month
                            selected_events {
                                ... on events_event_Entry {
                                    title
                                    eventTime
                                    eventInfo
                                    eventTags
                                }
                            }
                        }
                    }
                }
            }
        }
    `
}

export const MIETEN_QUERY = () => {
    return gql `
    query MyQuery($language: [String]) {
        rentEntries(site: $language) {
            ... on rent_rent_Entry {
                infoTitle {
                    url
                }
                infoContent
                termsTitle {
                    url
                }
                termsContent
                occupancyTitle {
                    url
                }
                occupancyTitleHover {
                    url
                }
                reservedTitle
                freeTitle
                occupiedTitle
                occupancyContent

                flexibleContentRent1 {
                    ... on flexibleContentRent1_sectionTitle_BlockType {
                        typeHandle
                        sectionTitle {
                            url
                        }
                        sectionTitleHover {
                            url
                        }
                    }
                    ... on flexibleContentRent1_standardContent_BlockType {
                        typeHandle
                        subtitle
                        text
                    }
                    ... on flexibleContentRent1_table_BlockType {
                        typeHandle
                        tableHeader
                        table {
                            col1
                            col2
                        }
                    }
                }

                
                cultureTitle
                movementTitle

                flexibleContentRentCulture {
                    ... on flexibleContentRentCulture_sectionTitle_BlockType {
                        typeHandle
                        sectionTitle {
                            url
                        }
                        sectionTitleHover {
                            url
                        }
                    }
                    ... on flexibleContentRentCulture_standardContent_BlockType {
                        typeHandle
                        subtitle
                        text
                    }
                    ... on flexibleContentRentCulture_table_BlockType {
                        typeHandle
                        tableHeader
                        table {
                            col1
                            col2
                        }
                    }
                }

                flexibleContentRentMovement {
                    ... on flexibleContentRentMovement_sectionTitle_BlockType {
                        typeHandle
                        sectionTitle {
                            url
                        }
                        sectionTitleHover {
                            url
                        }
                    }
                    ... on flexibleContentRentMovement_standardContent_BlockType {
                        typeHandle
                        subtitle
                        text
                    }
                    ... on flexibleContentRentMovement_table_BlockType {
                        typeHandle
                        tableHeader
                        table {
                            col1
                            col2
                        }
                    }
                }

                downloadTitle {
                    url
                }
                downloadTitleHover {
                    url
                }
                downloadsCulture {
                    ... on downloadsCulture_downloads_BlockType {
                        downloadName
                        downloadFile {
                        url
                        }
                    }
                }
                downloadsMovement {
                    ... on downloadsMovement_downloads_BlockType {
                        downloadName
                        downloadFile {
                        url
                        }
                    }
                }
            }
        }
    }
    `
}

export const PROVI_QUERY = () => {
    return gql `
        query MyQuery($language: [String]) {
            proviEntries(site: $language) {
                ... on provi_provi_Entry {
                    id
                    conceptContent
                    conceptTitle {
                        url
                    }
                    conceptTitleHover {
                        url
                    }
                    contactContent
                    contactTitle {
                        url
                    }
                    contactTitleHover {
                        url
                    }
                    historyContent
                    historyTitle {
                        url
                    }
                    historyTitleHover {
                        url
                    }
                    imageSlider {
                        url
                    }
                }
            }
        }
    `
}