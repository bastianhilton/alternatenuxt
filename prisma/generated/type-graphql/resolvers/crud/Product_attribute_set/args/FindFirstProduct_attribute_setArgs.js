"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstProduct_attribute_setArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Product_attribute_setOrderByWithRelationAndSearchRelevanceInput");
const Product_attribute_setWhereInput_1 = require("../../../inputs/Product_attribute_setWhereInput");
const Product_attribute_setWhereUniqueInput_1 = require("../../../inputs/Product_attribute_setWhereUniqueInput");
const Product_attribute_setScalarFieldEnum_1 = require("../../../../enums/Product_attribute_setScalarFieldEnum");
let FindFirstProduct_attribute_setArgs = class FindFirstProduct_attribute_setArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereInput_1.Product_attribute_setWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereInput_1.Product_attribute_setWhereInput)
], FindFirstProduct_attribute_setArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setOrderByWithRelationAndSearchRelevanceInput_1.Product_attribute_setOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstProduct_attribute_setArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput)
], FindFirstProduct_attribute_setArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstProduct_attribute_setArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstProduct_attribute_setArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setScalarFieldEnum_1.Product_attribute_setScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstProduct_attribute_setArgs.prototype, "distinct", void 0);
FindFirstProduct_attribute_setArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstProduct_attribute_setArgs);
exports.FindFirstProduct_attribute_setArgs = FindFirstProduct_attribute_setArgs;
