import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type DialCreateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  kind:
    | "TelephoneProfessionnel"
    | "EmailPersonnel"
    | "EmailProfessionnel"
    | "TelephoneFix"
    | "TelephoneMobile";
  value: string;
};
