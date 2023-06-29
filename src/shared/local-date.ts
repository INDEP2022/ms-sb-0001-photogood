import  *  as moment from "moment-timezone";

export class LocalDate {
    static getNow(format?: string){
        return moment().format(format)
    }
}