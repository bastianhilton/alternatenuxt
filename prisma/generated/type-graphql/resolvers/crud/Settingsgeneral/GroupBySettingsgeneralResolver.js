"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySettingsgeneralResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupBySettingsgeneralArgs_1 = require("./args/GroupBySettingsgeneralArgs");
const Settingsgeneral_1 = require("../../../models/Settingsgeneral");
const SettingsgeneralGroupBy_1 = require("../../outputs/SettingsgeneralGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySettingsgeneralResolver = class GroupBySettingsgeneralResolver {
    async groupBySettingsgeneral(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SettingsgeneralGroupBy_1.SettingsgeneralGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySettingsgeneralArgs_1.GroupBySettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySettingsgeneralResolver.prototype, "groupBySettingsgeneral", null);
GroupBySettingsgeneralResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingsgeneral_1.Settingsgeneral)
], GroupBySettingsgeneralResolver);
exports.GroupBySettingsgeneralResolver = GroupBySettingsgeneralResolver;
