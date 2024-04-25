import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TransferWhereInput = {
  address?: AddressWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
};
