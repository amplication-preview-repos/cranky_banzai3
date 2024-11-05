import * as graphql from "@nestjs/graphql";
import { ScriptResolverBase } from "./base/script.resolver.base";
import { Script } from "./base/Script";
import { ScriptService } from "./script.service";

@graphql.Resolver(() => Script)
export class ScriptResolver extends ScriptResolverBase {
  constructor(protected readonly service: ScriptService) {
    super(service);
  }
}
