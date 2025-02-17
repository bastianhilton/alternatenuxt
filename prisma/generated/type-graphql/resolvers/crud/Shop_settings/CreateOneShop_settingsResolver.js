"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneShop_settingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneShop_settingsArgs_1 = require("./args/CreateOneShop_settingsArgs");
const Shop_settings_1 = require("../../../models/Shop_settings");
const helpers_1 = require("../../../helpers");
let CreateOneShop_settingsResolver = class CreateOneShop_settingsResolver {
    async createOneShop_settings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shop_settings.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shop_settings_1.Shop_settings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneShop_settingsArgs_1.CreateOneShop_settingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneShop_settingsResolver.prototype, "createOneShop_settings", null);
CreateOneShop_settingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shop_settings_1.Shop_settings)
], CreateOneShop_settingsResolver);
exports.CreateOneShop_settingsResolver = CreateOneShop_settingsResolver;
