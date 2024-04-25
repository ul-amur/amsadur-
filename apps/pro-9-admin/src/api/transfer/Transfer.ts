import { Address } from "../address/Address";
import { Employee } from "../employee/Employee";

export type Transfer = {
  address?: Address | null;
  createdAt: Date;
  employee?: Employee | null;
  id: string;
  updatedAt: Date;
};
