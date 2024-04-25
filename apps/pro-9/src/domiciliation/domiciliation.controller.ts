import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DomiciliationService } from "./domiciliation.service";
import { DomiciliationControllerBase } from "./base/domiciliation.controller.base";

@swagger.ApiTags("domiciliations")
@common.Controller("domiciliations")
export class DomiciliationController extends DomiciliationControllerBase {
  constructor(
    protected readonly service: DomiciliationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
