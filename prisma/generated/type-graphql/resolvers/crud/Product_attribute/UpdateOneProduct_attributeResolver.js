"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneProduct_attributeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneProduct_attributeArgs_1 = require("./args/UpdateOneProduct_attributeArgs");
const Product_attribute_1 = require("../../../models/Product_attribute");
const helpers_1 = require("../../../helpers");
let UpdateOneProduct_attributeResolver = class UpdateOneProduct_attributeResolver {
    async updateOneProduct_attribute(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product_attribute.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_attribute_1.Product_attribute, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneProduct_attributeArgs_1.UpdateOneProduct_attributeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneProduct_attributeResolver.prototype, "updateOneProduct_attribute", null);
UpdateOneProduct_attributeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_attribute_1.Product_attribute)
], UpdateOneProduct_attributeResolver);
exports.UpdateOneProduct_attributeResolver = UpdateOneProduct_attributeResolver;
