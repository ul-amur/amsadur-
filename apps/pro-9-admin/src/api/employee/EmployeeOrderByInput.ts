import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  createdAt?: SortOrder;
  domiciliationId?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  relocationId?: SortOrder;
  structureId?: SortOrder;
  updatedAt?: SortOrder;
};
