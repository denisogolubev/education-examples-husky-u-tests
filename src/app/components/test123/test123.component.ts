import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonFunctions} from '../../core/services/common/common-functions.service';

@Component({
  selector: 'app-test123',
  templateUrl: './test123.component.html',
  styleUrls: ['./test123.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test123Component {

  constructor() {
    // console.log('Result: ', this.test());
  }

  public test(): number {
    return CommonFunctions.callFunctionByName<string, number>('sum', '1', '3');
  }
}
