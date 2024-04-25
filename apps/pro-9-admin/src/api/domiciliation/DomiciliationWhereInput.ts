import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type DomiciliationWhereInput = {
  address?: AddressWhereUniqueInput;
  employees?: EmployeeWhereUniqueInput;
  id?: StringFilter;
};
