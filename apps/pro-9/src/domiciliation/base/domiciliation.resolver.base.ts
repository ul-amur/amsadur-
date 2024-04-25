/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Domiciliation } from "./Domiciliation";
import { DomiciliationCountArgs } from "./DomiciliationCountArgs";
import { DomiciliationFindManyArgs } from "./DomiciliationFindManyArgs";
import { DomiciliationFindUniqueArgs } from "./DomiciliationFindUniqueArgs";
import { CreateDomiciliationArgs } from "./CreateDomiciliationArgs";
import { UpdateDomiciliationArgs } from "./UpdateDomiciliationArgs";
import { DeleteDomiciliationArgs } from "./DeleteDomiciliationArgs";
import { Address } from "../../address/base/Address";
import { Employee } from "../../employee/base/Employee";
import { DomiciliationService } from "../domiciliation.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Domiciliation)
export class DomiciliationResolverBase {
  constructor(
    protected readonly service: DomiciliationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Domiciliation",
    action: "read",
    possession: "any",
  })
  async _domiciliationsMeta(
    @graphql.Args() args: DomiciliationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Domiciliation])
  @nestAccessControl.UseRoles({
    resource: "Domiciliation",
    action: "read",
    possession: "any",
  })
  async domiciliations(
    @graphql.Args() args: DomiciliationFindManyArgs
  ): Promise<Domiciliation[]> {
    return this.service.domiciliations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Domiciliation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Domiciliation",
    action: "read",
    possession: "own",
  })
  async domiciliation(
    @graphql.Args() args: DomiciliationFindUniqueArgs
  ): Promise<Domiciliation | null> {
    const result = await this.service.domiciliation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Domiciliation)
  @nestAccessControl.UseRoles({
    resource: "Domiciliation",
    action: "create",
    possession: "any",
  })
  async createDomiciliation(
    @graphql.Args() args: CreateDomiciliationArgs
  ): Promise<Domiciliation> {
    return await this.service.createDomiciliation({
      ...args,
      data: {
        ...args.data,

        address: {
          connect: args.data.address,
        },

        employees: {
          connect: args.data.employees,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Domiciliation)
  @nestAccessControl.UseRoles({
    resource: "Domiciliation",
    action: "update",
    possession: "any",
  })
  async updateDomiciliation(
    @graphql.Args() args: UpdateDomiciliationArgs
  ): Promise<Domiciliation | null> {
    try {
      return await this.service.updateDomiciliation({
        ...args,
        data: {
          ...args.data,

          address: {
            connect: args.data.address,
          },

          employees: {
            connect: args.data.employees,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Domiciliation)
  @nestAccessControl.UseRoles({
    resource: "Domiciliation",
    action: "delete",
    possession: "any",
  })
  async deleteDomiciliation(
    @graphql.Args() args: DeleteDomiciliationArgs
  ): Promise<Domiciliation | null> {
    try {
      return await this.service.deleteDomiciliation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Address, {
    nullable: true,
    name: "address",
  })
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "read",
    possession: "any",
  })
  async getAddress(
    @graphql.Parent() parent: Domiciliation
  ): Promise<Address | null> {
    const result = await this.service.getAddress(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Employee, {
    nullable: true,
    name: "employees",
  })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  async getEmployees(
    @graphql.Parent() parent: Domiciliation
  ): Promise<Employee | null> {
    const result = await this.service.getEmployees(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
