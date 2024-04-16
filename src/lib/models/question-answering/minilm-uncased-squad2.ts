import {QuestionAnsweringBaseModel} from '@/lib/models/base';
import {IClientConfig} from '@/lib/types/common/client-config';


export class MiniLmUncasedSquad2 extends QuestionAnsweringBaseModel {
  public static readonly endpoint : string =  'https://api.deepinfra.com/v1/inference/deepset/minilm-uncased-squad2';
  constructor(authToken: string, config?: Partial<IClientConfig>) {
    super(MiniLmUncasedSquad2.endpoint, authToken, config);
  }
}
