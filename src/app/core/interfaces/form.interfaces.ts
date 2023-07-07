import {FormControl} from '@angular/forms';

export interface IBasicForm {
  name: FormControl<string | null>;
  lastname: FormControl<string | null>;
}
