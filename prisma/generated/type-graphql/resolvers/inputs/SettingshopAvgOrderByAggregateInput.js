"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingshopAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SettingshopAvgOrderByAggregateInput = class SettingshopAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SettingshopAvgOrderByAggregateInput.prototype, "id", void 0);
SettingshopAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SettingshopAvgOrderByAggregateInput", {
        isAbstract: true
    })
], SettingshopAvgOrderByAggregateInput);
exports.SettingshopAvgOrderByAggregateInput = SettingshopAvgOrderByAggregateInput;
