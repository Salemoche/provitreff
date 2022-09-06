import {
    gql
} from "@apollo/client";

export const GLOBAL_QUERY = () => {
    return gql `
        query MyQuery {
            globalSet {
                ... on globalSettings_GlobalSet {
                    proviAddress
                    proviEmail
                    proviLogo {
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
                occupancyContent

                flexibleContentRent1 {
                    ... on flexibleContentRent1_sectionTitle_BlockType {
                        typeHandle
                        sectionTitle {
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
                        table {
                            col1
                            col2
                        }
                    }
                }

                
                cultureTitle
                cultureCalendar
                movementTitle
                movementCalendar

                flexibleContentRent2 {
                    ... on flexibleContentRent2_sectionTitle_BlockType {
                        typeHandle
                        sectionTitle {
                            url
                        }
                    }
                    ... on flexibleContentRent2_standardContent_BlockType {
                        typeHandle
                        subtitle
                        text
                    }
                    ... on flexibleContentRent2_table_BlockType {
                        typeHandle
                        table {
                            col1
                            col2
                        }
                    }
                }

                downloadTitle {
                    url
                }
                downloads {
                    ... on downloads_downloads_BlockType {
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
                    contactContent
                    contactTitle {
                        url
                    }
                    historyContent
                    historyTitle {
                        url
                    }
                }
            }
        }
    `
}