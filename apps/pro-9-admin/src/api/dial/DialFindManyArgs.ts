import { DialWhereInput } from "./DialWhereInput";
import { DialOrderByInput } from "./DialOrderByInput";

export type DialFindManyArgs = {
  where?: DialWhereInput;
  orderBy?: Array<DialOrderByInput>;
  skip?: number;
  take?: number;
};
