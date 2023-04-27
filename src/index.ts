import { AppleIAP } from './apple_iap';

export { AppleIAP } from './apple_iap';

const app = new AppleIAP();
app.getNotificationDetails('{}')?.data?.decryptedSignedTransactionInfo
  .appAccountToken;
