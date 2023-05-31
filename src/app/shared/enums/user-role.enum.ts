import { Pipe, PipeTransform } from "@angular/core";

export enum USER_ROLE {
    SALER,
    ADMIN,
    MANAGEMENT
}

@Pipe({
    name: 'enumToDescription',
})
export class EnumToDescriptionPipe implements PipeTransform {
    transform(value: USER_ROLE,): any{
        return USER_ROLE[value];
    }
}