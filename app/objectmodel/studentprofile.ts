import {School} from "./school";
import {Section} from "./section";
import {User} from "./user";

export class StudentProfile{
    url:string;
    name:string;
    surname:string;
    topic:string;
    user:User;
    section:Section;
    school:School;
}