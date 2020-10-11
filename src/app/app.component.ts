import { importType } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private toastr: ToastrService) {}
  title = 'tic-tac-toe';

  winMessage: string = '';
  isCross: boolean = false;
  itemArray: String[] = new Array(9).fill('empty');

handleClick = (itemNumber:number) => {
  if (this.winMessage) {
    return this.toastr.success(this.winMessage);
  }
  if (this.itemArray[itemNumber] === 'empty') {
    this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle'
    this.isCross = !this.isCross
  } else {
    return this.toastr.warning('already filled.')
  }

  this.winChecker();
}

  winChecker = () => {
    if (
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] !== 'empty'
      ) {
      this.winMessage = `${this.itemArray[0]} win`
    } else if(
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[0] === this.itemArray[6] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} win`
    } else if(
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[0] === this.itemArray[8] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} win`
    } else if(
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[1] === this.itemArray[7] &&
      this.itemArray[1] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[1]} win`
    } else if(
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[2] === this.itemArray[8] &&
      this.itemArray[2] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[2]} win`
    } else if(
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[2] === this.itemArray[6] &&
      this.itemArray[2] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[2]} win`
    } else if(
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[3] === this.itemArray[5] &&
      this.itemArray[3] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[3]} win`
    } else if(
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[6] === this.itemArray[8] &&
      this.itemArray[6] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[6]} won`
    } else if(
      this.itemArray[0] !== 'empty' &&
      this.itemArray[1] !== 'empty' &&
      this.itemArray[2] !== 'empty' &&
      this.itemArray[3] !== 'empty' &&
      this.itemArray[4] !== 'empty' &&
      this.itemArray[5] !== 'empty' &&
      this.itemArray[6] !== 'empty' &&
      this.itemArray[7] !== 'empty' &&
      this.itemArray[8] !== 'empty'
    ) {
      this.winMessage = `Draw`
    }
  }

  reloadGame() {
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty');
  }

}
