"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveysWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let SurveysWhereUniqueInput = class SurveysWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SurveysWhereUniqueInput.prototype, "id", void 0);
SurveysWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SurveysWhereUniqueInput", {
        isAbstract: true
    })
], SurveysWhereUniqueInput);
exports.SurveysWhereUniqueInput = SurveysWhereUniqueInput;
