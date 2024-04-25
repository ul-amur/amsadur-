import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DomiciliationResolverBase } from "./base/domiciliation.resolver.base";
import { Domiciliation } from "./base/Domiciliation";
import { DomiciliationService } from "./domiciliation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Domiciliation)
export class DomiciliationResolver extends DomiciliationResolverBase {
  constructor(
    protected readonly service: DomiciliationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
