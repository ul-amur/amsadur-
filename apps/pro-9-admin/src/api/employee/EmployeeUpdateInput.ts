import { DialUpdateManyWithoutEmployeesInput } from "./DialUpdateManyWithoutEmployeesInput";
import { DomiciliationWhereUniqueInput } from "../domiciliation/DomiciliationWhereUniqueInput";
import { TransferWhereUniqueInput } from "../transfer/TransferWhereUniqueInput";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";

export type EmployeeUpdateInput = {
  birthCountry?: string | null;
  birthDate?: Date | null;
  birthName?: string | null;
  birthPlace?: string | null;
  contacts?: DialUpdateManyWithoutEmployeesInput;
  domiciliation?: DomiciliationWhereUniqueInput | null;
  email?: string;
  firstName?: string;
  lastName?: string;
  names?: string | null;
  nationality?: string | null;
  relocation?: TransferWhereUniqueInput | null;
  sex?: "Homme" | "Femme" | "Inconnu" | null;
  structure?: StructureWhereUniqueInput | null;
};
