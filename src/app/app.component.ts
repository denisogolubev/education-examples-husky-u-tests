import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IBasicForm} from './core/interfaces/form.interfaces';
import {HttpService} from './core/services/http/http.service';
import {take, timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public title: string = '';
  public nameFormControl: FormControl<string | null> = this.fb.control('');
  public lastnameFormControl: FormControl<string | null> = this.fb.control('');
  public basicForm: FormGroup = this.fb.group<IBasicForm>({
    name: this.nameFormControl,
    lastname: this.lastnameFormControl
  });

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService
  ) {
  }

  ngOnInit(): void {
    this.changeTitle();
    this.observeFormChanges();
  }

  private changeTitle(): void {
    timer(10000)
      .pipe(take(1))
      .subscribe(() => this.title = 'Test title');
  }

  private observeFormChanges(): void {
    // this.basicForm.valueChanges.subscribe((value: IBasicForm) => console.log(value));
  }

  public onSubmit(): void {
    // this.httpService.send('').subscribe((response) => console.log(response));
  }
}
