import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DialListRelationFilter } from "../dial/DialListRelationFilter";
import { DomiciliationWhereUniqueInput } from "../domiciliation/DomiciliationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { TransferWhereUniqueInput } from "../transfer/TransferWhereUniqueInput";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";

export type EmployeeWhereInput = {
  birthCountry?: StringNullableFilter;
  birthDate?: DateTimeNullableFilter;
  birthName?: StringNullableFilter;
  birthPlace?: StringNullableFilter;
  contacts?: DialListRelationFilter;
  domiciliation?: DomiciliationWhereUniqueInput;
  email?: StringFilter;
  firstName?: StringFilter;
  id?: IntFilter;
  lastName?: StringFilter;
  names?: StringNullableFilter;
  nationality?: StringNullableFilter;
  relocation?: TransferWhereUniqueInput;
  sex?: "Homme" | "Femme" | "Inconnu";
  structure?: StructureWhereUniqueInput;
};
