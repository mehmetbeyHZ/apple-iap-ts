import VerifyUrls from './constants/VerifyUrls';
import { VerifyPurchase } from './model/Response/VerifyPurchase';
import { NotificationV2 } from './model/notificationv2';

export class AppleIAP {
  protected verifyUrl: string = VerifyUrls.VERIFY_PRODUCTION;

  enableSandboxMode(): this {
    this.verifyUrl = VerifyUrls.VERIFY_SANDBOX;
    return this;
  }

  /**
   *
   * @param notification
   * @returns
   */
  public getNotificationDetails(
    notification: string
  ): NotificationV2 | null {
    try {
      return JSON.parse(notification) as NotificationV2;
    } catch (e) {
      return null;
    }
  }

  /**
   *
   * @param receiptData
   * @param password
   * @returns
   */
  public async verifyReceipt(receiptData: string, password: string) {
    const data = {
      'receipt-data': receiptData,
      password: password,
      'exclude-old-transactions': true,
    };
    const response = await fetch(this.verifyUrl, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const jsonResponse = await response.json();
    return jsonResponse as VerifyPurchase;
  }
}
