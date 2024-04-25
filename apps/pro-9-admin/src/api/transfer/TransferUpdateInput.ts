import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type TransferUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput | null;
};
