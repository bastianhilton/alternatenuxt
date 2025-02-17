"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUrl_rewritesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Url_rewritesOrderByWithRelationAndSearchRelevanceInput");
const Url_rewritesWhereInput_1 = require("../../../inputs/Url_rewritesWhereInput");
const Url_rewritesWhereUniqueInput_1 = require("../../../inputs/Url_rewritesWhereUniqueInput");
const Url_rewritesScalarFieldEnum_1 = require("../../../../enums/Url_rewritesScalarFieldEnum");
let FindFirstUrl_rewritesArgs = class FindFirstUrl_rewritesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesWhereInput_1.Url_rewritesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesWhereInput_1.Url_rewritesWhereInput)
], FindFirstUrl_rewritesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Url_rewritesOrderByWithRelationAndSearchRelevanceInput_1.Url_rewritesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstUrl_rewritesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesWhereUniqueInput_1.Url_rewritesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Url_rewritesWhereUniqueInput_1.Url_rewritesWhereUniqueInput)
], FindFirstUrl_rewritesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstUrl_rewritesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstUrl_rewritesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Url_rewritesScalarFieldEnum_1.Url_rewritesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstUrl_rewritesArgs.prototype, "distinct", void 0);
FindFirstUrl_rewritesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstUrl_rewritesArgs);
exports.FindFirstUrl_rewritesArgs = FindFirstUrl_rewritesArgs;
