import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService, AuthenticationService } from '@/_services';
// a msm coisa que o login.component.ts
@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) {
        // 👇 redireciona para pagina "home" caso o usuário já esteja logado
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }


    // 👇 confirmar autenticidade dos dados de formulário
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

     // 👇 O getter para fácil acesso aos campos de formulário
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

 // 👇 reinicia os alertas e envia
        this.alertService.clear();

        // 👇 é interrompido caso formulario seja invalido
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
