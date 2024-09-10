import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating-control',
  standalone: true,
  imports: [],
  template: `
          <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
            <symbol id="star" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M31.77 11.857H19.74L15.99.5l-3.782 11.357H0l9.885 6.903-3.692 11.21 9.736-7.05 9.796 6.962-3.722-11.18 9.766-6.845z" />
            </symbol>
          </svg>
          <div class="rating" [class.disabled]="isDisabled">
            @for (item of [].constructor(5); track $index) {
              <svg
                class="star"
                [class.star-active]="isStarActive($index, value)"
                (click)="setRating($index)">
                <use xlink:href="#star"></use>
              </svg>
            }
          </div>
  `,
  styles: `
$default-color: #d8d8d8;
$active-color: #ffd055;


.rating {
  display: flex;
  justify-content: center;
  padding: 0 10px;

  &:hover {
    .star {
      fill: $active-color;
    }
  }

  &.disabled {
    .star {
      cursor: not-allowed;
    }
    &:hover {
      .star {
        fill: $default-color;
      }
    }
  }
}

.star {
  width: 50px;
  height: 50px;
  fill: $default-color;
  cursor: pointer;

  &:hover ~ .star {
    fill: $default-color;
  }
}

.star-active {
  fill: $active-color !important;
}
  
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingControlComponent),
      multi: true
    }
  ]
})
export class RatingControlComponent implements ControlValueAccessor {

  protected value: number | null = null;

  protected isDisabled: boolean = false;

  private _onChange: (value: string) => void = (): void => { };

  private _onTouch: () => void = () => { };

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  setRating(index: number): void {
    if (this.isDisabled) {
      return;
    }

    this.value = index + 1;
    this._onTouch();
    this._onChange(`${this.value}`);
  }

  isStarActive(index: number, value: number | null): boolean {
    return value ? index < value : false;
  }

}
