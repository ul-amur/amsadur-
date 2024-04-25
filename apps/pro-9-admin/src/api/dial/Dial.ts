import { Employee } from "../employee/Employee";

export type Dial = {
  createdAt: Date;
  employee?: Employee | null;
  id: string;
  kind?:
    | "TelephoneProfessionnel"
    | "EmailPersonnel"
    | "EmailProfessionnel"
    | "TelephoneFix"
    | "TelephoneMobile";
  updatedAt: Date;
  value: string;
};
