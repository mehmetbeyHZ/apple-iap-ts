import { InApp } from '../VerifyModel/InApp';
import { PendingRenewalInfo } from '../VerifyModel/PendingRenewalInfo';
import { Receipt } from '../VerifyModel/Receipt';

export interface VerifyPurchase {
  environment: string;
  receipt: Receipt;
  latest_receipt_info: InApp[];
  pending_renewal_info: PendingRenewalInfo;
  status: number;
}
