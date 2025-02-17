"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let ReturnsSumAggregate = class ReturnsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ReturnsSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ReturnsSumAggregate.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReturnsSumAggregate.prototype, "cust_id", void 0);
ReturnsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReturnsSumAggregate", {
        isAbstract: true
    })
], ReturnsSumAggregate);
exports.ReturnsSumAggregate = ReturnsSumAggregate;
