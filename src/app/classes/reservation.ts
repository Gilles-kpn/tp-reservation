import { Reservable } from './reservable';
import { User } from './user';
export class Reservation {
    id:string = "";
    startDate:Date = new Date();
    endDate:Date = new Date();
    professor:User = new User();
    reservable:Reservable = new Reservable();
}
