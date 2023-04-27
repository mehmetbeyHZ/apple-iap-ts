export interface SignedTransactionInfo {
  transactionId: string | null;
  originalTransactionId: string | null;
  webOrderLineItemId: string | null;
  bundleId: string | null;
  productId: string | null;
  purchaseDate: number | null;
  originalPurchaseDate: number | null;
  expiresDate: number | null;
  quantity: number | null;
  type: string;
  appAccountToken: any;
  inAppOwnershipType: string | null;
  signedDate: number | null;
}
