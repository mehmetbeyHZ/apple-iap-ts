/**
 * https://developer.apple.com/documentation/appstoreservernotifications/notificationtype
 */
export enum NotificationType {
  CONSUMPTION_REQUEST = 'CONSUMPTION_REQUEST',
  DID_CHANGE_RENEWAL_PREF = 'DID_CHANGE_RENEWAL_PREF',
  DID_CHANGE_RENEWAL_STATUS = 'DID_CHANGE_RENEWAL_STATUS',
  DID_FAIL_TO_RENEW = 'DID_FAIL_TO_RENEW',
  DID_RENEW = 'DID_RENEW',
  EXPIRED = 'EXPIRED',
  GRACE_PERIOD_EXPIRED = 'GRACE_PERIOD_EXPIRED',
  OFFER_REDEEMED = 'OFFER_REDEEMED',
  PRICE_INCREASE = 'PRICE_INCREASE',
  REFUND = 'REFUND',
  REFUND_DECLINED = 'REFUND_DECLINED',
  RENEWAL_EXTENDED = 'RENEWAL_EXTENDED',
  RENEWAL_EXTENSION = 'RENEWAL_EXTENSION',
  REVOKE = 'REVOKE',
  SUBSCRIBED = 'SUBSCRIBED',
  TEST = 'TEST',
}
