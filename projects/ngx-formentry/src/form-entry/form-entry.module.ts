import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { DebugModeService } from '../form-entry/services/debug-mode.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormErrorsService } from './services/form-errors.service';
import { HammerConfig } from './helpers/hammer-config';
import { FormControlService } from './form-factory/form-control.service';
import { ValidationFactory } from './form-factory/validation.factory';
import { FormRendererComponent } from './form-renderer/form-renderer.component';
import { ErrorRendererComponent } from './error-renderer/error-renderer.component';
import { HistoricalValueDirective } from './directives/historical-value-directive';
import { HistoricalFieldHelperService } from './helpers/historical-field-helper-service';
import { SelectModule } from '../components/select/select.module';
import { RemoteFileUploadModule } from '../components/file-upload/file-upload.module';
import { DateTimePickerModule } from '../components/date-time-picker/date-time-picker.module';
import { AfeNgSelectComponent } from '../components/afe-ng-select.component';
import { HidersDisablersFactory } from './form-factory/hiders-disablers.factory';
import { AlertsFactory } from './form-factory/show-messages.factory';
import { ExpressionRunner } from './expression-runner/expression-runner';
import { JsExpressionHelper } from './helpers/js-expression-helper';
import { FormSchemaCompiler } from './services/form-schema-compiler.service';
import { FormFactory } from './form-factory/form.factory';
import { QuestionFactory } from './form-factory/question.factory';
import { ControlRelationsFactory } from './form-factory/control-relations.factory';
import { EncounterAdapter } from './value-adapters/encounter.adapter';
import { PersonAttribuAdapter } from './value-adapters/person-attribute.adapter';
import { OrderValueAdapter } from './value-adapters/order.adapter';
import { ObsAdapterHelper } from './value-adapters/obs-adapter-helper';
import { ObsValueAdapter } from './value-adapters/obs.adapter';
import { RemoteSelectModule } from '../components/remote-select/remote-select.module';
import { DataSources } from './data-sources/data-sources';
import {
    AppointmentsOverviewComponent
} from '../components/appointments-overview/appointments-overview.component';
import { EncounterViewerModule } from '../encounter-viewer/encounter-viewer.module';
import { CheckboxModule } from '../components/check-box/checkbox.module';
@NgModule({
    imports: [CommonModule,
        ReactiveFormsModule,
        CollapseModule,
        SelectModule,
        DateTimePickerModule,
        RemoteSelectModule,
        RemoteFileUploadModule,
        EncounterViewerModule,
        CheckboxModule,
        MatTabsModule
    ],
    declarations: [
        FormRendererComponent,
        AfeNgSelectComponent,
        AppointmentsOverviewComponent,
        HistoricalValueDirective,
        ErrorRendererComponent
    ],
    providers: [
        FormBuilder,
        FormControlService,
        FormErrorsService,
        ValidationFactory,
        HidersDisablersFactory,
        AlertsFactory,
        ExpressionRunner,
        JsExpressionHelper,
        HistoricalFieldHelperService,
        FormSchemaCompiler,
        FormFactory,
        QuestionFactory,
        ValidationFactory,
        ControlRelationsFactory,
        ObsAdapterHelper,
        ObsValueAdapter,
        EncounterAdapter,
        PersonAttribuAdapter,
        OrderValueAdapter,
        DebugModeService,
        DataSources
    ],
    exports: [FormRendererComponent, AfeNgSelectComponent,
        ErrorRendererComponent, DateTimePickerModule, EncounterViewerModule]
})
export class FormEntryModule {

}
