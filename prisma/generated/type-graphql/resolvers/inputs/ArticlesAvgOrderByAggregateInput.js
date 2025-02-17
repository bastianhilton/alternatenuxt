"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ArticlesAvgOrderByAggregateInput = class ArticlesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesAvgOrderByAggregateInput.prototype, "cust_id", void 0);
ArticlesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArticlesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ArticlesAvgOrderByAggregateInput);
exports.ArticlesAvgOrderByAggregateInput = ArticlesAvgOrderByAggregateInput;
