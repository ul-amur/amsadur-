import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type DialCreateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  phone: number;
};
