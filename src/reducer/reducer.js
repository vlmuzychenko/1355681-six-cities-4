import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as main} from "./main/main.js";
import {reducer as user} from "./user/user.js";
import {reducer as reviews} from "./reviews/reviews.js";
import {reducer as nearby} from "./nearby/nearby.js";
import NameSpace from "./name-space.js";


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.MAIN]: main,
  [NameSpace.USER]: user,
  [NameSpace.REVIEWS]: reviews,
  [NameSpace.NEARBY]: nearby,
});
