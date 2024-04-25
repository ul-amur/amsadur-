import { Employee } from "../employee/Employee";

export type Dial = {
  createdAt: Date;
  employee?: Employee | null;
  id: string;
  phone: number;
  updatedAt: Date;
};
