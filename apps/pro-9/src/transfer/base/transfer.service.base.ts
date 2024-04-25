/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Transfer as PrismaTransfer,
  Address as PrismaAddress,
  Employee as PrismaEmployee,
} from "@prisma/client";

export class TransferServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TransferCountArgs, "select">): Promise<number> {
    return this.prisma.transfer.count(args);
  }

  async transfers<T extends Prisma.TransferFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransferFindManyArgs>
  ): Promise<PrismaTransfer[]> {
    return this.prisma.transfer.findMany<Prisma.TransferFindManyArgs>(args);
  }
  async transfer<T extends Prisma.TransferFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransferFindUniqueArgs>
  ): Promise<PrismaTransfer | null> {
    return this.prisma.transfer.findUnique(args);
  }
  async createTransfer<T extends Prisma.TransferCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransferCreateArgs>
  ): Promise<PrismaTransfer> {
    return this.prisma.transfer.create<T>(args);
  }
  async updateTransfer<T extends Prisma.TransferUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransferUpdateArgs>
  ): Promise<PrismaTransfer> {
    return this.prisma.transfer.update<T>(args);
  }
  async deleteTransfer<T extends Prisma.TransferDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransferDeleteArgs>
  ): Promise<PrismaTransfer> {
    return this.prisma.transfer.delete(args);
  }

  async getAddress(parentId: string): Promise<PrismaAddress | null> {
    return this.prisma.transfer
      .findUnique({
        where: { id: parentId },
      })
      .address();
  }

  async getEmployee(parentId: string): Promise<PrismaEmployee | null> {
    return this.prisma.transfer
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }
}
