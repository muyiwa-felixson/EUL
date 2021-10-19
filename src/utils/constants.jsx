export const DEFAULT_LOCALE = 'en'

// MAX_PAGE_SIZE ==> used as a hack to return all records via api
// calls pending when pagination is fully implemented
export const MAX_PAGE_SIZE = 5000
export const API_URL = process.env.REACT_APP_API_URL

export const COUNTRIES_URL = 'countries/'
export const STATES_URL = 'states/'
export const CATEGORIES_URL = 'categories/'
export const USERS_URL = 'users/'
export const HMOS_URL = 'hmos/'
export const PLANS_URL = 'plans/'
export const HCPS_URL = 'hcps/'
export const HCPS_MAP_URL = 'hcps/map/'

export const LOGIN_URL = 'auth/login/'
export const LOGOUT_URL = '/logout'
export const ROLES_URL = 'roles/'


export const COOKIE_NAME = 'eul-cookie'

export const DATE_FORMAT = 'DD MMMM, YYYY HH:mm'
export const PAGE_SIZE = 10

export const NETWORK_STATUS = {
    CREATING: 'CREATING',
    FETCHING: 'FETCHING',
    UPDATING: 'UPDATING',
    DELETING: 'DELETING',
    READY: 'READY',
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS'
}
