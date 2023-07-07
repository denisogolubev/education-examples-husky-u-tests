import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicButtonComponent {
  @Input({required: true}) public text: string = '';
  @Output() public clickTrigger: EventEmitter<void> = new EventEmitter<void>();

  public onClick(): void {
    this.clickTrigger.emit();
  }
}
