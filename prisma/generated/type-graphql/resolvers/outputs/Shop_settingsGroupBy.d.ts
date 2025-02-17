import { Shop_settingsAvgAggregate } from "../outputs/Shop_settingsAvgAggregate";
import { Shop_settingsCountAggregate } from "../outputs/Shop_settingsCountAggregate";
import { Shop_settingsMaxAggregate } from "../outputs/Shop_settingsMaxAggregate";
import { Shop_settingsMinAggregate } from "../outputs/Shop_settingsMinAggregate";
import { Shop_settingsSumAggregate } from "../outputs/Shop_settingsSumAggregate";
export declare class Shop_settingsGroupBy {
    id: bigint;
    created_at: Date | null;
    store_name: string | null;
    store_phone: string | null;
    store_hours: string | null;
    country: string | null;
    region: string | null;
    zipcode: string | null;
    city: string | null;
    address: string | null;
    address_two: string | null;
    vat_number: string | null;
    allow_state: string | null;
    state_required_for: string | null;
    allow_countries: string | null;
    default_country: string | null;
    optional_zip: string | null;
    european_union_countries: string | null;
    top_destinations: string | null;
    base_currency: string | null;
    default_currency: string | null;
    allowed_currency: string | null;
    _count: Shop_settingsCountAggregate | null;
    _avg: Shop_settingsAvgAggregate | null;
    _sum: Shop_settingsSumAggregate | null;
    _min: Shop_settingsMinAggregate | null;
    _max: Shop_settingsMaxAggregate | null;
}
