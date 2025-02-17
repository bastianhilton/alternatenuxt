import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ShopsWhereInput {
    AND?: ShopsWhereInput[] | undefined;
    OR?: ShopsWhereInput[] | undefined;
    NOT?: ShopsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    website?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    articles?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    comments?: StringNullableFilter | undefined;
    coupons?: StringNullableFilter | undefined;
    categories?: StringNullableFilter | undefined;
    polls?: StringNullableFilter | undefined;
    quotes?: StringNullableFilter | undefined;
    reviews?: StringNullableFilter | undefined;
    gift_certificates?: StringNullableFilter | undefined;
    rating?: StringNullableFilter | undefined;
    tags?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
    invoices?: StringNullableFilter | undefined;
    reports?: StringNullableFilter | undefined;
    reward_points?: StringNullableFilter | undefined;
    special_discounts?: StringNullableFilter | undefined;
    statistics?: StringNullableFilter | undefined;
    stocks?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    physical_store?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
    workspaces?: StringNullableFilter | undefined;
}
