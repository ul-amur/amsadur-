import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type TransferCreateInput = {
  address?: AddressWhereUniqueInput | null;
  employee: EmployeeWhereUniqueInput | null;
};
