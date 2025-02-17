"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AgreementsSumOrderByAggregateInput = class AgreementsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsSumOrderByAggregateInput.prototype, "reference_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsSumOrderByAggregateInput.prototype, "user_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsSumOrderByAggregateInput.prototype, "shop_id", void 0);
AgreementsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgreementsSumOrderByAggregateInput", {
        isAbstract: true
    })
], AgreementsSumOrderByAggregateInput);
exports.AgreementsSumOrderByAggregateInput = AgreementsSumOrderByAggregateInput;
