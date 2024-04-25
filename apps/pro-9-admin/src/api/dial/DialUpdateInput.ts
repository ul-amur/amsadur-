import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type DialUpdateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  kind?:
    | "TelephoneProfessionnel"
    | "EmailPersonnel"
    | "EmailProfessionnel"
    | "TelephoneFix"
    | "TelephoneMobile";
  value?: string;
};
