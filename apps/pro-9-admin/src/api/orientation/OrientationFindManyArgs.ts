import { OrientationWhereInput } from "./OrientationWhereInput";
import { OrientationOrderByInput } from "./OrientationOrderByInput";

export type OrientationFindManyArgs = {
  where?: OrientationWhereInput;
  orderBy?: Array<OrientationOrderByInput>;
  skip?: number;
  take?: number;
};
