export interface SignedRenewalInfo {
  originalTransactionId: string;
  autoRenewProductId: string;
  autoRenewStatus: number | null;
  recentSubscriptionStartDate: number | null;
}
