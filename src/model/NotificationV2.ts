import { NotificationV2Data } from './NotificationV2Data';

export interface NotificationV2 {
  notificationType: string | null;
  subtype: string;
  notificationUUID: string | null;
  data: NotificationV2Data | null;
}
