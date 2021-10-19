import { combineReducers } from 'redux'

import countries from './country'
import categories from './category'
import hmos from './hmo'
import plans from './plan'
import states from './state'
import hcps from './hcp'
import users from './modules/user'
import roles from 'src/redux/modules/role'

export default combineReducers({
  countries,
  categories,
  hmos,
  plans,
  states,
  hcps,
  users,
  roles,
})
