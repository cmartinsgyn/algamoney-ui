import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  /* constructor(
    @Inject('LogPrefixo') private prefixo: string) { } */

  log(msg: string) {
    console.log(`LOG: ${msg}`);
  }
 }
