import { DialUpdateManyWithoutEmployeesInput } from "./DialUpdateManyWithoutEmployeesInput";
import { DomiciliationWhereUniqueInput } from "../domiciliation/DomiciliationWhereUniqueInput";
import { TransferWhereUniqueInput } from "../transfer/TransferWhereUniqueInput";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";

export type EmployeeUpdateInput = {
  contacts?: DialUpdateManyWithoutEmployeesInput;
  domiciliation?: DomiciliationWhereUniqueInput | null;
  email?: string;
  relocation?: TransferWhereUniqueInput | null;
  structure?: StructureWhereUniqueInput | null;
};
