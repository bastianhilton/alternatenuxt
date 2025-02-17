"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSettingsgeneralResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneSettingsgeneralArgs_1 = require("./args/DeleteOneSettingsgeneralArgs");
const Settingsgeneral_1 = require("../../../models/Settingsgeneral");
const helpers_1 = require("../../../helpers");
let DeleteOneSettingsgeneralResolver = class DeleteOneSettingsgeneralResolver {
    async deleteOneSettingsgeneral(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).settingsgeneral.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Settingsgeneral_1.Settingsgeneral, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneSettingsgeneralArgs_1.DeleteOneSettingsgeneralArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneSettingsgeneralResolver.prototype, "deleteOneSettingsgeneral", null);
DeleteOneSettingsgeneralResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Settingsgeneral_1.Settingsgeneral)
], DeleteOneSettingsgeneralResolver);
exports.DeleteOneSettingsgeneralResolver = DeleteOneSettingsgeneralResolver;
