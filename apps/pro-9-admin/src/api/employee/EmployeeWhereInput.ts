import { DialListRelationFilter } from "../dial/DialListRelationFilter";
import { DomiciliationWhereUniqueInput } from "../domiciliation/DomiciliationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TransferWhereUniqueInput } from "../transfer/TransferWhereUniqueInput";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";

export type EmployeeWhereInput = {
  contacts?: DialListRelationFilter;
  domiciliation?: DomiciliationWhereUniqueInput;
  email?: StringFilter;
  id?: StringFilter;
  relocation?: TransferWhereUniqueInput;
  structure?: StructureWhereUniqueInput;
};
