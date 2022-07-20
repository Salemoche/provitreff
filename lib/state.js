import { proxy } from 'valtio';

export const defaultState = {
    device: {
        isMobile: false,
        size: 'm',
    },
    global: {
        colors: {
            current: '',
            colors: [],
        },
    },
    pages: {
        aktuell: {
            titel: {
                de: 'Aktuell',
                en: 'Current',
            },
            routes: {
                de: 'aktuell',
                en: 'current',
            }
        }, 
        mieten: {
            titel: {
                de: 'Mieten',
                en: 'Rent',
            },
            routes: {
                de: 'mieten',
                en: 'rent',                
            }
        },
        provi: {
            titel: {
                de: 'Provi',
                en: 'Provi',
            },
            routes: {
                de: 'provi',
                en: 'provi',                
            }
        }
    }
}

// export default defaultState

export const state = proxy( defaultState );