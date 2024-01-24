import { Component } from '@angular/core';
import { MParticleService } from './mparticle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mparticle-test';

  constructor(private mParticleService: MParticleService) {}
}
