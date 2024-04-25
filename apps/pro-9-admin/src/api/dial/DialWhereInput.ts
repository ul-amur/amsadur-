import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type DialWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  kind?:
    | "TelephoneProfessionnel"
    | "EmailPersonnel"
    | "EmailProfessionnel"
    | "TelephoneFix"
    | "TelephoneMobile";
  value?: StringFilter;
};
