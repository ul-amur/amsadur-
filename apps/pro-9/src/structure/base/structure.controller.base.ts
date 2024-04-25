/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { StructureService } from "../structure.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { StructureCreateInput } from "./StructureCreateInput";
import { Structure } from "./Structure";
import { StructureFindManyArgs } from "./StructureFindManyArgs";
import { StructureWhereUniqueInput } from "./StructureWhereUniqueInput";
import { StructureUpdateInput } from "./StructureUpdateInput";
import { EmployeeFindManyArgs } from "../../employee/base/EmployeeFindManyArgs";
import { Employee } from "../../employee/base/Employee";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class StructureControllerBase {
  constructor(
    protected readonly service: StructureService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Structure })
  @nestAccessControl.UseRoles({
    resource: "Structure",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: StructureCreateInput,
  })
  async createStructure(
    @common.Body() data: StructureCreateInput
  ): Promise<Structure> {
    return await this.service.createStructure({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Structure] })
  @ApiNestedQuery(StructureFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Structure",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async structures(@common.Req() request: Request): Promise<Structure[]> {
    const args = plainToClass(StructureFindManyArgs, request.query);
    return this.service.structures({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Structure })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Structure",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async structure(
    @common.Param() params: StructureWhereUniqueInput
  ): Promise<Structure | null> {
    const result = await this.service.structure({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Structure })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Structure",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: StructureUpdateInput,
  })
  async updateStructure(
    @common.Param() params: StructureWhereUniqueInput,
    @common.Body() data: StructureUpdateInput
  ): Promise<Structure | null> {
    try {
      return await this.service.updateStructure({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Structure })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Structure",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteStructure(
    @common.Param() params: StructureWhereUniqueInput
  ): Promise<Structure | null> {
    try {
      return await this.service.deleteStructure({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/employees")
  @ApiNestedQuery(EmployeeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  async findEmployees(
    @common.Req() request: Request,
    @common.Param() params: StructureWhereUniqueInput
  ): Promise<Employee[]> {
    const query = plainToClass(EmployeeFindManyArgs, request.query);
    const results = await this.service.findEmployees(params.id, {
      ...query,
      select: {
        createdAt: true,

        domiciliation: {
          select: {
            id: true,
          },
        },

        email: true,
        id: true,

        relocation: {
          select: {
            id: true,
          },
        },

        structure: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/employees")
  @nestAccessControl.UseRoles({
    resource: "Structure",
    action: "update",
    possession: "any",
  })
  async connectEmployees(
    @common.Param() params: StructureWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        connect: body,
      },
    };
    await this.service.updateStructure({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/employees")
  @nestAccessControl.UseRoles({
    resource: "Structure",
    action: "update",
    possession: "any",
  })
  async updateEmployees(
    @common.Param() params: StructureWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        set: body,
      },
    };
    await this.service.updateStructure({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/employees")
  @nestAccessControl.UseRoles({
    resource: "Structure",
    action: "update",
    possession: "any",
  })
  async disconnectEmployees(
    @common.Param() params: StructureWhereUniqueInput,
    @common.Body() body: EmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        disconnect: body,
      },
    };
    await this.service.updateStructure({
      where: params,
      data,
      select: { id: true },
    });
  }
}