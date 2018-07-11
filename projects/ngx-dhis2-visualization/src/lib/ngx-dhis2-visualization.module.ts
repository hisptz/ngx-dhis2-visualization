import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { containers } from './containers';
import { pipes } from './pipes';
import { components } from './components';
import { effects, reducers } from './store';
import { services } from './services';
import { DictionaryModule } from './modules';
import { ChartModule } from './modules/chart/chart.module';
import { TableModule } from './modules/table/table.module';

@NgModule({
  imports: [
    CommonModule,
    DictionaryModule.forChild(),
    TranslateModule.forChild(),
    ChartModule,
    TableModule,
    StoreModule.forFeature('visualization', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [...containers, ...components, ...pipes],
  exports: [...containers]
})
export class NgxDhis2VisualizationModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxDhis2VisualizationModule,
      providers: [...services]
    };
  }

  public static forChild(): ModuleWithProviders {
    return {
      ngModule: NgxDhis2VisualizationModule,
      providers: [...services]
    };
  }
}
