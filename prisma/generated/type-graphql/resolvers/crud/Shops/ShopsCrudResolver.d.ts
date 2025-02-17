import { GraphQLResolveInfo } from "graphql";
import { AggregateShopsArgs } from "./args/AggregateShopsArgs";
import { CreateManyShopsArgs } from "./args/CreateManyShopsArgs";
import { CreateOneShopsArgs } from "./args/CreateOneShopsArgs";
import { DeleteManyShopsArgs } from "./args/DeleteManyShopsArgs";
import { DeleteOneShopsArgs } from "./args/DeleteOneShopsArgs";
import { FindFirstShopsArgs } from "./args/FindFirstShopsArgs";
import { FindManyShopsArgs } from "./args/FindManyShopsArgs";
import { FindUniqueShopsArgs } from "./args/FindUniqueShopsArgs";
import { GroupByShopsArgs } from "./args/GroupByShopsArgs";
import { UpdateManyShopsArgs } from "./args/UpdateManyShopsArgs";
import { UpdateOneShopsArgs } from "./args/UpdateOneShopsArgs";
import { UpsertOneShopsArgs } from "./args/UpsertOneShopsArgs";
import { Shops } from "../../../models/Shops";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateShops } from "../../outputs/AggregateShops";
import { ShopsGroupBy } from "../../outputs/ShopsGroupBy";
export declare class ShopsCrudResolver {
    aggregateShops(ctx: any, info: GraphQLResolveInfo, args: AggregateShopsArgs): Promise<AggregateShops>;
    createManyShops(ctx: any, info: GraphQLResolveInfo, args: CreateManyShopsArgs): Promise<AffectedRowsOutput>;
    createOneShops(ctx: any, info: GraphQLResolveInfo, args: CreateOneShopsArgs): Promise<Shops>;
    deleteManyShops(ctx: any, info: GraphQLResolveInfo, args: DeleteManyShopsArgs): Promise<AffectedRowsOutput>;
    deleteOneShops(ctx: any, info: GraphQLResolveInfo, args: DeleteOneShopsArgs): Promise<Shops | null>;
    findFirstShops(ctx: any, info: GraphQLResolveInfo, args: FindFirstShopsArgs): Promise<Shops | null>;
    findManyShops(ctx: any, info: GraphQLResolveInfo, args: FindManyShopsArgs): Promise<Shops[]>;
    findUniqueShops(ctx: any, info: GraphQLResolveInfo, args: FindUniqueShopsArgs): Promise<Shops | null>;
    groupByShops(ctx: any, info: GraphQLResolveInfo, args: GroupByShopsArgs): Promise<ShopsGroupBy[]>;
    updateManyShops(ctx: any, info: GraphQLResolveInfo, args: UpdateManyShopsArgs): Promise<AffectedRowsOutput>;
    updateOneShops(ctx: any, info: GraphQLResolveInfo, args: UpdateOneShopsArgs): Promise<Shops | null>;
    upsertOneShops(ctx: any, info: GraphQLResolveInfo, args: UpsertOneShopsArgs): Promise<Shops>;
}
