import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    // :( não obtive exito em implementar a função de editar por conta das inumeras
    // falhas nas quesições de autenticação para identificação do usuário
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/users`);
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}