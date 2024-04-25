import { Domiciliation } from "../domiciliation/Domiciliation";
import { Transfer } from "../transfer/Transfer";

export type Address = {
  createdAt: Date;
  id: string;
  principalAddresses?: Domiciliation | null;
  secondaryAddresses?: Transfer | null;
  updatedAt: Date;
};
