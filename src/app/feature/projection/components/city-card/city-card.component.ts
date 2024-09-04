import { Component, effect, inject, signal } from '@angular/core';
import { CityStore } from '../../data-access/city.store';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { CardType } from '../../model/card.model';
import { City } from '../../model/city.model';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-city-card',
  standalone: true,
  imports: [CardComponent],
  template: `

<app-card
      [list]="cities()"
      [type]="cardType"
      customClass="bg-light-green"></app-card>
  `
})
export class CityCardComponent {
  private store: CityStore = inject(CityStore);
  private http: FakeHttpService = inject(FakeHttpService);

  cities = signal<City[]>([]);
  cardType = CardType.CITY;
  
  constructor(){
    effect(() => {
      console.log("cities",this.cities())
    })
  }

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((s) => this.store.addAll(s));
    this.store.cities$.subscribe((s) => (this.cities.set(s)));
  }
}
