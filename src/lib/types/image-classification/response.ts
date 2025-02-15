import { Status } from '@/lib/types/common/status';
import { ImageItem } from '@/lib/types/common/image-item';

export interface ImageClassificationResponse {
  results: ImageItem[];
  request_id?: string;
  inference_status: Status;
}
