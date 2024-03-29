﻿import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';

//👇 classe controladora do componente Home 
@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    //👇 função para identificar e deletar usuaŕio
    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }
 
    //👇 função para mostrar todos os "users"
    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
}