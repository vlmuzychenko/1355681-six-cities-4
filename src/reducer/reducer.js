import {combineReducers} from "redux";
import {reducer as data} from "./data/data";
import {reducer as main} from "./main/main";
import {reducer as user} from "./user/user";
import {reducer as reviews} from "./reviews/reviews";
import {reducer as nearby} from "./nearby/nearby";
import NameSpace from "./name-space";


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.MAIN]: main,
  [NameSpace.USER]: user,
  [NameSpace.REVIEWS]: reviews,
  [NameSpace.NEARBY]: nearby,
});
