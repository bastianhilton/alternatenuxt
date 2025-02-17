"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByShopsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByShopsArgs_1 = require("./args/GroupByShopsArgs");
const Shops_1 = require("../../../models/Shops");
const ShopsGroupBy_1 = require("../../outputs/ShopsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByShopsResolver = class GroupByShopsResolver {
    async groupByShops(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ShopsGroupBy_1.ShopsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByShopsArgs_1.GroupByShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByShopsResolver.prototype, "groupByShops", null);
GroupByShopsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shops_1.Shops)
], GroupByShopsResolver);
exports.GroupByShopsResolver = GroupByShopsResolver;
