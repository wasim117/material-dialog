import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'dialog-content-example',
  templateUrl: 'dialog-content-example.html',
})
export class DialogContentExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      panelClass: 'mytheme-dialog',
      backdropClass: ['black-60', 'white-60'],
      //   minHeight: '100px',
      //   height: '80vh',
      //   maxHeight: '600px',
      //   width: '90%',
      //   minWidth: '100px',
      //   maxWidth: '1200px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDarkDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      panelClass: 'dark-dialog',
      backdropClass: ['black-60'],
      //   minHeight: '100px',
      //   height: '80vh',
      //   maxHeight: '600px',
      //   width: '90%',
      //   minWidth: '100px',
      //   maxWidth: '1200px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
