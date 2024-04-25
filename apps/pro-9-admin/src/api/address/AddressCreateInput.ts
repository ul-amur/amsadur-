import { DomiciliationWhereUniqueInput } from "../domiciliation/DomiciliationWhereUniqueInput";
import { TransferWhereUniqueInput } from "../transfer/TransferWhereUniqueInput";

export type AddressCreateInput = {
  principalAddresses?: DomiciliationWhereUniqueInput | null;
  secondaryAddresses?: TransferWhereUniqueInput | null;
};
