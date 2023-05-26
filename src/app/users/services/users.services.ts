import { Injectable } from "@angular/core";
import { UserDetails } from "../models/user.model";
import { USER_MOCK_DATA } from "src/app/login/constants/user.mock";
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UsersServices {
    users: UserDetails[] = []

    constructor() {
    }

    onInit() { }

    getUsers(): Observable<UserDetails[]> {
        this.users = USER_MOCK_DATA;
        return of(this.users);
    }
}