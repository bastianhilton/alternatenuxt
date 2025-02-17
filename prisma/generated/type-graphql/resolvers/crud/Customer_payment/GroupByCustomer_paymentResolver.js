"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCustomer_paymentResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByCustomer_paymentArgs_1 = require("./args/GroupByCustomer_paymentArgs");
const Customer_payment_1 = require("../../../models/Customer_payment");
const Customer_paymentGroupBy_1 = require("../../outputs/Customer_paymentGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCustomer_paymentResolver = class GroupByCustomer_paymentResolver {
    async groupByCustomer_payment(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_payment.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Customer_paymentGroupBy_1.Customer_paymentGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCustomer_paymentArgs_1.GroupByCustomer_paymentArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCustomer_paymentResolver.prototype, "groupByCustomer_payment", null);
GroupByCustomer_paymentResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_payment_1.Customer_payment)
], GroupByCustomer_paymentResolver);
exports.GroupByCustomer_paymentResolver = GroupByCustomer_paymentResolver;
