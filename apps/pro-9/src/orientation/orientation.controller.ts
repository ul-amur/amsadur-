import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrientationService } from "./orientation.service";
import { OrientationControllerBase } from "./base/orientation.controller.base";

@swagger.ApiTags("orientations")
@common.Controller("orientations")
export class OrientationController extends OrientationControllerBase {
  constructor(
    protected readonly service: OrientationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
