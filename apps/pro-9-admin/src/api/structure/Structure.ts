import { Employee } from "../employee/Employee";

export type Structure = {
  createdAt: Date;
  employees?: Array<Employee>;
  id: string;
  updatedAt: Date;
};
