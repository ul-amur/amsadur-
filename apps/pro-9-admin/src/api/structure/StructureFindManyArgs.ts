import { StructureWhereInput } from "./StructureWhereInput";
import { StructureOrderByInput } from "./StructureOrderByInput";

export type StructureFindManyArgs = {
  where?: StructureWhereInput;
  orderBy?: Array<StructureOrderByInput>;
  skip?: number;
  take?: number;
};
