import { Address } from "../address/Address";
import { Employee } from "../employee/Employee";

export type Domiciliation = {
  address?: Address;
  createdAt: Date;
  employees?: Employee;
  id: string;
  updatedAt: Date;
};
