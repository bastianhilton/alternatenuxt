"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneSettingshopArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingshopWhereUniqueInput_1 = require("../../../inputs/SettingshopWhereUniqueInput");
let DeleteOneSettingshopArgs = class DeleteOneSettingshopArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingshopWhereUniqueInput_1.SettingshopWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SettingshopWhereUniqueInput_1.SettingshopWhereUniqueInput)
], DeleteOneSettingshopArgs.prototype, "where", void 0);
DeleteOneSettingshopArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneSettingshopArgs);
exports.DeleteOneSettingshopArgs = DeleteOneSettingshopArgs;
