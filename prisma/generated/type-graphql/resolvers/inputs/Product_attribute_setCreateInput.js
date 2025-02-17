"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Product_attribute_setCreateInput = class Product_attribute_setCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setCreateInput.prototype, "based_on", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_setCreateInput.prototype, "attribute_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setCreateInput.prototype, "product_attribute", void 0);
Product_attribute_setCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setCreateInput", {
        isAbstract: true
    })
], Product_attribute_setCreateInput);
exports.Product_attribute_setCreateInput = Product_attribute_setCreateInput;
