import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-serch-box',
  templateUrl: './serch-box.component.html',
  styles: [],
})
export class SerchBoxComponent implements OnInit {
  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebauce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debounced.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebauce.emit(value);
    });
  }
  private debounced: Subject<string> = new Subject<string>();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }
  onKeyPress(searchTerm: string) {
    this.debounced.next(searchTerm);
  }
}
