import {
  userTableEnum,
  verificationsEnum,
  dayMonthYearUi,
  purposeMap,
  statusMap
} from "../data";
import moment from "moment";

export const userTableSchema = (obj) => ({
  [userTableEnum.FULL_NAME]: `${obj[verificationsEnum.FIRST_NAME]} ${
    obj[verificationsEnum.LAST_NAME]
  }`,
  [userTableEnum.VERIFIER]:
    obj[verificationsEnum.VERIFIER_ORGANIZATION]?.name || "",
  [userTableEnum.REQUEST_TYPE]: purposeMap[obj[verificationsEnum.PURPOSE]],
  [userTableEnum.REQUEST_DATA]: moment(
    obj[verificationsEnum.CREATED_AT]
  ).format(dayMonthYearUi),
  [userTableEnum.DEADLINE]: moment(obj[verificationsEnum.DEADLINE_DATE]).format(
    dayMonthYearUi
  ),
  [userTableEnum.ASSIGN_TO]:
    obj[verificationsEnum.EMPLOYER_ORGANIZATION]?.name || "",
  [userTableEnum.STATUS]: statusMap[obj[verificationsEnum.STATE]]
});
