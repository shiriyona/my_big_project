import { Injectable } from "@angular/core";
import { USER_MOCK_DATA } from "src/app/login/constants/user.mock";
import { Observable, Subject, of } from 'rxjs';
import { User } from "src/app/login/models/login.model";


@Injectable({
    providedIn: 'root'
})
export class UsersServices {
    users: User[] = []
    subject = new Subject()
    editedUser: User

    constructor() {
    }

    onInit() { }

    getUsers(): Observable<User[]> {
        this.users = USER_MOCK_DATA;
        return of(this.users);
    }

    sendNewUser(user: User){
        this.subject.next(user);
    }

    onNewUser() {
        return this.subject.asObservable();
    }

    onEditUser(editUser){
        this.editedUser = editUser
    }

    getEditUser(){
        return this.editedUser;
    }
}