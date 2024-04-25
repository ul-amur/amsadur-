import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type DialUpdateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  phone?: number;
};
