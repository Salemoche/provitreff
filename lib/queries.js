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
                    provitreffLogo {
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
                    programTitle {
                        url
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
                cultureTitle
                cultureCalendar
                movementTitle
                movementCalendar
                termsContent
                occupancyTitle {
                    url
                }
                occupancyContent
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
                }
            }
        }
    `
}