import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicInputComponent {
  @Input({required: true}) public control!: FormControl<string | null>;
  @Input({required: true}) public label!: string;
}
