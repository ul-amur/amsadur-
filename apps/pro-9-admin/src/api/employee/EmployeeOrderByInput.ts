import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  birthCountry?: SortOrder;
  birthDate?: SortOrder;
  birthName?: SortOrder;
  birthPlace?: SortOrder;
  createdAt?: SortOrder;
  domiciliationId?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  names?: SortOrder;
  nationality?: SortOrder;
  relocationId?: SortOrder;
  sex?: SortOrder;
  structureId?: SortOrder;
  updatedAt?: SortOrder;
};
