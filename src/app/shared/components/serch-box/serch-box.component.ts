import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-serch-box',
  templateUrl: './serch-box.component.html',
  styles: [],
})
export class SerchBoxComponent implements OnInit, OnDestroy {
  private debounced: Subject<string> = new Subject<string>();
  private debouncerSuscriiption?: Subscription;
  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue:string='';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebauce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscriiption = this.debounced
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.onDebauce.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSuscriiption?.unsubscribe();
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }
  onKeyPress(searchTerm: string) {
    this.debounced.next(searchTerm);
  }
}
