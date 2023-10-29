import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AdminService} from "../../services/admin/admin.service";

@Component({
  selector: 'app-admin-log-in',
  templateUrl: './admin-log-in.component.html',
  styleUrls: ['./admin-log-in.component.css']
})
export class AdminLogInComponent {
  private loginAdmin: HTMLElement | null = null;

  constructor(private router: Router, private adminService: AdminService) {}

  onSubmit(): void {
    const idCardAdmin = (<HTMLInputElement>document.getElementById('idCardAdmin')).value;
    const passwordAdmin = (<HTMLInputElement>document.getElementById('passwordAdmin')).value;

    if (idCardAdmin === '' || passwordAdmin === '') {
      alert('Por favor llena todos los campos.');
      return;
    }

    this.adminService.login(parseInt(idCardAdmin), passwordAdmin).subscribe(
      (response) => {
        if (response) {
          this.router.navigate(['/admin/dashboard']);
        } else {
          alert('Credenciales incorrectas.');
        }
      },
      (error) => {
        alert('Error en el servidor.');
      }
    );

  }
}
