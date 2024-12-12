
const NAV_LINKS = [
    {
        to: '/private/declarations',
        label: 'les declarations'
    },
    {
        to: '/private/profiles',
        label: 'les personnes'
    },
    {
        to: '/private/request',
        label: 'les demandes'
    },
    {
        to: '/private/notifications',
        label: 'les courriers'
    }
];

const UPDATE_DECLARARTIONS = "UPDATE_DECLARARTIONS";
const UPDATE_DECLARARTIONS_STATUS = "UPDATE_DECLARARTIONS_STATUS";

const INITIAL_STATE = { declarations: [] }
export { INITIAL_STATE, NAV_LINKS, UPDATE_DECLARARTIONS, UPDATE_DECLARARTIONS_STATUS }