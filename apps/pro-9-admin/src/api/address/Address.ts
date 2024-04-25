import { Domiciliation } from "../domiciliation/Domiciliation";
import { Transfer } from "../transfer/Transfer";

export type Address = {
  complement: string | null;
  country: string | null;
  createdAt: Date;
  id: string;
  inseeCog: string | null;
  precision1: string | null;
  precision_2: string | null;
  principalAddresses?: Domiciliation | null;
  secondaryAddresses?: Transfer | null;
  town: string | null;
  updatedAt: Date;
};
