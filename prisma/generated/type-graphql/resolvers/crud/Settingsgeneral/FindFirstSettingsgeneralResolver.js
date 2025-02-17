"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSettingsgeneralResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstSettingsgeneralArgs_1 = require("./args/FindFirstSettingsgeneralArgs");
const Settingsgeneral_1 = require("../../../models/Settingsgeneral");
const helpers_1 = require("../../../helpers");
let FindFirstSettingsgeneralResolver = class FindFirstSettingsgeneralResolver {
    async findFirstSettingsgeneral(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Settingsgeneral_1.Settingsgeneral, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSettingsgeneralArgs_1.FindFirstSettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSettingsgeneralResolver.prototype, "findFirstSettingsgeneral", null);
FindFirstSettingsgeneralResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingsgeneral_1.Settingsgeneral)
], FindFirstSettingsgeneralResolver);
exports.FindFirstSettingsgeneralResolver = FindFirstSettingsgeneralResolver;
