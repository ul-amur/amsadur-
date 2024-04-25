import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type DomiciliationUpdateInput = {
  address?: AddressWhereUniqueInput;
  employees?: EmployeeWhereUniqueInput;
};
