import { DomiciliationWhereInput } from "./DomiciliationWhereInput";
import { DomiciliationOrderByInput } from "./DomiciliationOrderByInput";

export type DomiciliationFindManyArgs = {
  where?: DomiciliationWhereInput;
  orderBy?: Array<DomiciliationOrderByInput>;
  skip?: number;
  take?: number;
};
