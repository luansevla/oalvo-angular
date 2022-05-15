import { AuthService } from './../../../services/api/auth.service';
import { Login } from './../../../shared/models/login';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLogin, {
      width: '300px',
      minWidth: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: '100%',
      minHeight: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-login',
  templateUrl: './dialog/dialog-login.component.html',
  styleUrls: ['./dialog/dialog-login.component.scss']
})
export class DialogLogin {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<DialogLogin>,
    private authService: AuthService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: Login) {}

    onSubmit() {
      this.authService.login(this.loginForm.value).subscribe(
        data => {
          console.warn(data);
          localStorage.setItem('token', data.token);
          localStorage.setItem('userName', data.user.name);
          localStorage.setItem('id', data.user._id);
          this.dialogRef.close();
          this.router.navigateByUrl('/home');
        },
        err => {

        }
    );

    }

}
