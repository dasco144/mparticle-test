import { Injectable } from '@angular/core';
import MParticle, { EventType, SDKEventAttrs } from '@mparticle/web-sdk';

@Injectable({
  providedIn: 'root',
})
export class MParticleService {
  constructor() {
    const validAttrs: SDKEventAttrs = {
      foo: 'bar',
    };

    // const invalidAttrs: SDKEventAttrs = {
    //   foo: ['bar'],
    //   bar: {
    //     foo: 'bar',
    //   },
    // };

    MParticle.logEvent('Valid EventType', EventType.Navigation);
    // logEvent('Invalid EventType', EventType.InvalidEnum);

    // MParticle.logEvent('Invalid EventType', EventType.);
  }
}
