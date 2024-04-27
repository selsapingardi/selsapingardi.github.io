import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBar,
  MatSnackBarModule,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule, MatSnackBarModule],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
      },
    },
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  navigator = window.navigator;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(text: string) {
    this.navigator.clipboard.writeText(text);
    this._snackBar.open('Contact copied.', undefined, {
      duration: 1500,
    });
  }
}
