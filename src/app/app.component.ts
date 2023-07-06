import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public title = 'education-session-husky-u-tests';
  public isHello: boolean = false;

  click(): void {
    // console.log(this.isHello);
  }
}
