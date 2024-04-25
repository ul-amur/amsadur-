import { EmployeeCreateNestedManyWithoutStructuresInput } from "./EmployeeCreateNestedManyWithoutStructuresInput";

export type StructureCreateInput = {
  employees?: EmployeeCreateNestedManyWithoutStructuresInput;
};
