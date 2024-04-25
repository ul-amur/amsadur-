import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type StructureWhereInput = {
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
};
