import { pick } from "lodash";

export const sanitizeList = (objSchema, list, pickProperties) => {
  return list.map((listElement) => {
    return objSchema(pick(listElement, pickProperties));
  });
};
