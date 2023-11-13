import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AdminService} from "../../services/admin/admin.service";
import {UserEntity} from "../../model/user/user";

@Component({
  selector: 'app-admin-log-in',
  templateUrl: './admin-log-in.component.html',
  styleUrls: ['./admin-log-in.component.css']
})
export class AdminLogInComponent {
  private loginAdmin: HTMLElement | null = null;

  constructor(private router: Router, private adminService: AdminService) {}

  onSubmit(): void {
    const idCardAdmin = +(<HTMLInputElement>document.getElementById('idCardAdmin')).value;
    const passwordAdmin = (<HTMLInputElement>document.getElementById('passwordAdmin')).value;

    if (!idCardAdmin  || passwordAdmin === '') {
      alert('Por favor llena todos los campos.');
      return;
    }

    let user = {username: idCardAdmin, password: passwordAdmin} as UserEntity;

    this.adminService.login(user).subscribe(
        (data) => {
          localStorage.setItem('token', String(data));
          this.router.navigate(['/admin/dashboard']);

        },
        (error) => {
          // Handle errors here
          if (error.status === 401 || error.status === 400) {
            // Handle incorrect credentials
            alert("La cédula o la contraseña son incorrectas");
          } else {
            // Handle other types of errors (like network issues, server errors, etc.)
            alert("Error al intentar iniciar sesión");
          }
        }
    );
  }
}
