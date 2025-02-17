"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProduct_attributeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Product_attributeOrderByWithRelationAndSearchRelevanceInput");
const Product_attributeWhereInput_1 = require("../../../inputs/Product_attributeWhereInput");
const Product_attributeWhereUniqueInput_1 = require("../../../inputs/Product_attributeWhereUniqueInput");
const Product_attributeScalarFieldEnum_1 = require("../../../../enums/Product_attributeScalarFieldEnum");
let FindFirstProduct_attributeArgs = class FindFirstProduct_attributeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereInput_1.Product_attributeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereInput_1.Product_attributeWhereInput)
], FindFirstProduct_attributeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeOrderByWithRelationAndSearchRelevanceInput_1.Product_attributeOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstProduct_attributeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput)
], FindFirstProduct_attributeArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstProduct_attributeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstProduct_attributeArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeScalarFieldEnum_1.Product_attributeScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstProduct_attributeArgs.prototype, "distinct", void 0);
FindFirstProduct_attributeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstProduct_attributeArgs);
exports.FindFirstProduct_attributeArgs = FindFirstProduct_attributeArgs;
