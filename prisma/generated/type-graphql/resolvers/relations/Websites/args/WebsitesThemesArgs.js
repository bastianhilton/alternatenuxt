"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesThemesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/ThemesOrderByWithRelationAndSearchRelevanceInput");
const ThemesWhereInput_1 = require("../../../inputs/ThemesWhereInput");
const ThemesWhereUniqueInput_1 = require("../../../inputs/ThemesWhereUniqueInput");
const ThemesScalarFieldEnum_1 = require("../../../../enums/ThemesScalarFieldEnum");
let WebsitesThemesArgs = class WebsitesThemesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereInput_1.ThemesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesWhereInput_1.ThemesWhereInput)
], WebsitesThemesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesOrderByWithRelationAndSearchRelevanceInput_1.ThemesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WebsitesThemesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereUniqueInput_1.ThemesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesWhereUniqueInput_1.ThemesWhereUniqueInput)
], WebsitesThemesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WebsitesThemesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], WebsitesThemesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesScalarFieldEnum_1.ThemesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WebsitesThemesArgs.prototype, "distinct", void 0);
WebsitesThemesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], WebsitesThemesArgs);
exports.WebsitesThemesArgs = WebsitesThemesArgs;
