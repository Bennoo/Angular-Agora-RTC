import { NgModule, ModuleWithProviders } from '@angular/core';
import { AgoraLocalComponent } from './agora-local.component';
import { AgoraConfig } from './AgoraConfig';
import { AngularAgoraRtcService } from './angular-agora-rtc.service';

@NgModule({
  imports: [
  ],
  declarations: [AgoraLocalComponent],
  exports: [AgoraLocalComponent]
})
export class AngularAgoraRtcModule {
  static forRoot(config: AgoraConfig): ModuleWithProviders{
    return {
      ngModule: AngularAgoraRtcModule,
      providers: [AngularAgoraRtcService, {provide: 'config', useValue: config}]
    };
  }
 }
