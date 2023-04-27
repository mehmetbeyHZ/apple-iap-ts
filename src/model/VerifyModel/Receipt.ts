import { InApp } from './InApp';

export interface Receipt {
  adam_id: number;
  application_version: string;
  app_item_id: number;
  bundle_id: string;
  download_id: number;
  in_app: InApp[];
  original_application_version: string;
  original_purchase_date: string;
  original_purchase_date_ms: string;
  original_purchase_date_pst: string;
  receipt_creation_date: string;
  receipt_creation_date_ms: string;
  receipt_creation_date_pst: string;
  receipt_type: string;
  request_date: string;
  request_date_ms: string;
  request_date_pst: string;
  version_external_identifier: number;
}
