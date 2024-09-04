import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComputPipe } from './pipes/compu.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComputPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  persons = signal<string[]>([]);

  constructor(){
    this.persons.set(['Goku','Vegeta']);
  }

  heavyComputation(name: string, index: number) {
    console.log("heavyComputation");
    // very heavy computation
    return `${name} - ${index}`;
  }
}
