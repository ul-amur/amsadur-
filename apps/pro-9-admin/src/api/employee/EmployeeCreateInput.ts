import { DialCreateNestedManyWithoutEmployeesInput } from "./DialCreateNestedManyWithoutEmployeesInput";
import { DomiciliationWhereUniqueInput } from "../domiciliation/DomiciliationWhereUniqueInput";
import { TransferWhereUniqueInput } from "../transfer/TransferWhereUniqueInput";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";

export type EmployeeCreateInput = {
  contacts?: DialCreateNestedManyWithoutEmployeesInput;
  domiciliation?: DomiciliationWhereUniqueInput | null;
  email: string;
  relocation?: TransferWhereUniqueInput | null;
  structure?: StructureWhereUniqueInput | null;
};
