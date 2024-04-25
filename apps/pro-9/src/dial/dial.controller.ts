import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DialService } from "./dial.service";
import { DialControllerBase } from "./base/dial.controller.base";

@swagger.ApiTags("dials")
@common.Controller("dials")
export class DialController extends DialControllerBase {
  constructor(
    protected readonly service: DialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
