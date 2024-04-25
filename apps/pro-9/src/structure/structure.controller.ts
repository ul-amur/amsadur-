import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StructureService } from "./structure.service";
import { StructureControllerBase } from "./base/structure.controller.base";

@swagger.ApiTags("structures")
@common.Controller("structures")
export class StructureController extends StructureControllerBase {
  constructor(
    protected readonly service: StructureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
