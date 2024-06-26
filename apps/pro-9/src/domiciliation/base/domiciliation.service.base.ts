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
  Domiciliation as PrismaDomiciliation,
  Address as PrismaAddress,
  Employee as PrismaEmployee,
} from "@prisma/client";

export class DomiciliationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DomiciliationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.domiciliation.count(args);
  }

  async domiciliations<T extends Prisma.DomiciliationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DomiciliationFindManyArgs>
  ): Promise<PrismaDomiciliation[]> {
    return this.prisma.domiciliation.findMany<Prisma.DomiciliationFindManyArgs>(
      args
    );
  }
  async domiciliation<T extends Prisma.DomiciliationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DomiciliationFindUniqueArgs>
  ): Promise<PrismaDomiciliation | null> {
    return this.prisma.domiciliation.findUnique(args);
  }
  async createDomiciliation<T extends Prisma.DomiciliationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DomiciliationCreateArgs>
  ): Promise<PrismaDomiciliation> {
    return this.prisma.domiciliation.create<T>(args);
  }
  async updateDomiciliation<T extends Prisma.DomiciliationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DomiciliationUpdateArgs>
  ): Promise<PrismaDomiciliation> {
    return this.prisma.domiciliation.update<T>(args);
  }
  async deleteDomiciliation<T extends Prisma.DomiciliationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DomiciliationDeleteArgs>
  ): Promise<PrismaDomiciliation> {
    return this.prisma.domiciliation.delete(args);
  }

  async getAddress(parentId: string): Promise<PrismaAddress | null> {
    return this.prisma.domiciliation
      .findUnique({
        where: { id: parentId },
      })
      .address();
  }

  async getEmployees(parentId: string): Promise<PrismaEmployee | null> {
    return this.prisma.domiciliation
      .findUnique({
        where: { id: parentId },
      })
      .employees();
  }
}
