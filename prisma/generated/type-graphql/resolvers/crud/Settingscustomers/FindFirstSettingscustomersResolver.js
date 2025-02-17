"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSettingscustomersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstSettingscustomersArgs_1 = require("./args/FindFirstSettingscustomersArgs");
const Settingscustomers_1 = require("../../../models/Settingscustomers");
const helpers_1 = require("../../../helpers");
let FindFirstSettingscustomersResolver = class FindFirstSettingscustomersResolver {
    async findFirstSettingscustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingscustomers.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settingscustomers_1.Settingscustomers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSettingscustomersArgs_1.FindFirstSettingscustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSettingscustomersResolver.prototype, "findFirstSettingscustomers", null);
FindFirstSettingscustomersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingscustomers_1.Settingscustomers)
], FindFirstSettingscustomersResolver);
exports.FindFirstSettingscustomersResolver = FindFirstSettingscustomersResolver;
