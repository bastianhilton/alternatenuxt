"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Url_rewritesSumAggregate = class Url_rewritesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Url_rewritesSumAggregate.prototype, "id", void 0);
Url_rewritesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Url_rewritesSumAggregate", {
        isAbstract: true
    })
], Url_rewritesSumAggregate);
exports.Url_rewritesSumAggregate = Url_rewritesSumAggregate;
