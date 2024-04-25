import { Employee as TEmployee } from "../api/employee/Employee";

export const EMPLOYEE_TITLE_FIELD = "birthName";

export const EmployeeTitle = (record: TEmployee): string => {
  return record.birthName?.toString() || String(record.id);
};
