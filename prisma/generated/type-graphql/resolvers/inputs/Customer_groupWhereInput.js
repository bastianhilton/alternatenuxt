"use strict";
var Customer_groupWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let Customer_groupWhereInput = Customer_groupWhereInput_1 = class Customer_groupWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Customer_groupWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], Customer_groupWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Customer_groupWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Customer_groupWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Customer_groupWhereInput.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Customer_groupWhereInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Customer_groupWhereInput.prototype, "customers", void 0);
Customer_groupWhereInput = Customer_groupWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupWhereInput", {
        isAbstract: true
    })
], Customer_groupWhereInput);
exports.Customer_groupWhereInput = Customer_groupWhereInput;
