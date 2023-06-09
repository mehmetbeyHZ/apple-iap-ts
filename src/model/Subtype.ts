/**
 * https://developer.apple.com/documentation/appstoreservernotifications/subtype
 */
export enum Subtype {
  ACCEPTED = 'ACCEPTED',
  AUTO_RENEW_DISABLED = 'AUTO_RENEW_DISABLED',
  AUTO_RENEW_ENABLED = 'AUTO_RENEW_ENABLED',
  BILLING_RECOVERY = 'BILLING_RECOVERY',
  BILLING_RETRY = 'BILLING_RETRY',
  DOWNGRADE = 'DOWNGRADE',
  FAILURE = 'FAILURE',
  GRACE_PERIOD = 'GRACE_PERIOD',
  INITIAL_BUY = 'INITIAL_BUY',
  PENDING = 'PENDING',
  PRICE_INCREASE = 'PRICE_INCREASE',
  PRODUCT_NOT_FOR_SALE = 'PRODUCT_NOT_FOR_SALE',
  RESUBSCRIBE = 'RESUBSCRIBE',
  SUMMARY = 'SUMMARY',
  UPGRADE = 'UPGRADE',
  VOLUNTARY = 'VOLUNTARY',
}
