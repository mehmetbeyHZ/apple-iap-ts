import Decrypt from '../jws/decrypt';
import { SignedRenewalInfo } from './SignedRenewalInfo';
import { SignedTransactionInfo } from './SignedTransactionInfo';

interface INotificationV2Data {
  bundleId: string;
  bundleVersion: string;
  signedTransactionInfo: string;
  signedRenewalInfo: string;
}

export class NotificationV2Data implements INotificationV2Data {
  signedTransactionInfo: string;
  signedRenewalInfo: string;
  bundleId: string;
  bundleVersion: string;

  public get decryptedSignedTransactionInfo(): SignedTransactionInfo {
    const decrypt = Decrypt.decrypt(this.signedTransactionInfo);
    const toJSON = JSON.parse(decrypt);
    return toJSON as SignedTransactionInfo;
  }

  public get decryptedSignedRenewalInfo(): SignedRenewalInfo {
    const decrypt = Decrypt.decrypt(this.signedRenewalInfo);
    const toJSON = JSON.parse(decrypt);
    return toJSON as SignedRenewalInfo;
  }
}
