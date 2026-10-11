// Amazon affiliate URL builders. Used at build time (books.astro) and on the
// client (scripts/amazon.ts swaps hrefs to amazon.ae for UAE visitors, since
// Amazon OneLink geo-redirects most countries but not the UAE).
import { AMAZON_TAG_COM, AMAZON_TAG_AE } from '../data/site';

export type AmazonMarket = 'com' | 'ae';

const TAGS: Record<AmazonMarket, string> = { com: AMAZON_TAG_COM, ae: AMAZON_TAG_AE };

/** Product detail page (24-hour attribution cookie). */
export function productUrl(asin: string, market: AmazonMarket = 'com'): string {
  return `https://www.amazon.${market}/dp/${asin}?tag=${TAGS[market]}`;
}

/** Add-to-cart: lands on the cart page with the item added (90-day attribution on it). */
export function cartUrl(asin: string, market: AmazonMarket = 'com'): string {
  return `https://www.amazon.${market}/gp/aws/cart/add.html?AssociateTag=${TAGS[market]}&ASIN.1=${asin}&Quantity.1=1`;
}
