import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type DialWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  phone?: IntFilter;
};
