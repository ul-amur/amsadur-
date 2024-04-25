import { DialCreateNestedManyWithoutEmployeesInput } from "./DialCreateNestedManyWithoutEmployeesInput";
import { DomiciliationWhereUniqueInput } from "../domiciliation/DomiciliationWhereUniqueInput";
import { TransferWhereUniqueInput } from "../transfer/TransferWhereUniqueInput";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";

export type EmployeeCreateInput = {
  birthCountry?: string | null;
  birthDate?: Date | null;
  birthName?: string | null;
  birthPlace?: string | null;
  contacts?: DialCreateNestedManyWithoutEmployeesInput;
  domiciliation?: DomiciliationWhereUniqueInput | null;
  email: string;
  firstName: string;
  lastName: string;
  names?: string | null;
  nationality?: string | null;
  relocation?: TransferWhereUniqueInput | null;
  sex?: "Homme" | "Femme" | "Inconnu" | null;
  structure?: StructureWhereUniqueInput | null;
};
