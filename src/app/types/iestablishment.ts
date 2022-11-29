import { IContactDetails } from './icontact-details';

export interface IEstablishment {
  id?: number;
  name: string;
  contactDetails: IContactDetails;
  description: string;
}
