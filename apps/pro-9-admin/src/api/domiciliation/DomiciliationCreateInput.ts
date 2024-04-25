import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type DomiciliationCreateInput = {
  address: AddressWhereUniqueInput;
  employees: EmployeeWhereUniqueInput;
};
