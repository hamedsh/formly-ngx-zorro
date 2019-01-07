import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyFieldInputComponent } from './types/input/input-component';
import { FormlyFieldTextareaComponent } from './types/textarea/textarea-component';
import { FormlyFieldWrapperComponent } from './wrappers/formly-field-wrapper/formly-field-wrapper-component';
import { FormlyFieldAutocompleteComponent } from './types/autocomplete/autocomplete-component';
import { FormlyFieldCascaderComponent } from './types/cascader/cascader-component';
import { FormlyFieldCheckboxComponent } from './types/checkbox/checkbox-component';
import { FormlyFieldDatePickerComponent } from './types/date-picker/date-picker-component';
import { FormlyFieldNumberComponent } from './types/number/number-component';
import { FormlyFieldRadioComponent } from './types/radio/radio-component';
import { FormlyFieldRateComponent } from './types/rate/rate-component';
import { FormlyFieldSelectComponent } from './types/select/select-component';
import { FormlyFieldSliderComponent } from './types/slider/slider-component';
import { FormlyFieldSwitchComponent } from './types/switch/switch-component';
import { FormlyFieldTimePickerComponent } from './types/time-picker/time-picker-component';
import { FormlyFieldTreeSelectComponent } from './types/tree-select/tree-select-component';
import { FormlyFieldDateRangePickerComponent } from './types/date-range-picker/date-range-picker-component';

export const ForRootFormlyModule = FormlyModule.forRoot({
    types: [
        {
            name: 'input',
            wrappers: ['field-wrapper'],
            component: FormlyFieldInputComponent
        },
        {
            name: 'textarea',
            wrappers: ['field-wrapper'],
            component: FormlyFieldTextareaComponent
        },
        {
            name: 'autocomplete',
            wrappers: ['field-wrapper'],
            component: FormlyFieldAutocompleteComponent
        },
        {
            name: 'cascader',
            wrappers: ['field-wrapper'],
            component: FormlyFieldCascaderComponent
        },
        {
            name: 'checkbox',
            wrappers: ['field-wrapper'],
            component: FormlyFieldCheckboxComponent
        },
        {
            name: 'date-picker',
            wrappers: ['field-wrapper'],
            component: FormlyFieldDatePickerComponent
        },
        {
            name: 'date-range-picker',
            wrappers: ['field-wrapper'],
            component: FormlyFieldDateRangePickerComponent
        },
        {
            name: 'number',
            wrappers: ['field-wrapper'],
            component: FormlyFieldNumberComponent
        },
        {
            name: 'radio',
            wrappers: ['field-wrapper'],
            component: FormlyFieldRadioComponent
        },
        {
            name: 'rate',
            wrappers: ['field-wrapper'],
            component: FormlyFieldRateComponent
        },
        {
            name: 'select',
            wrappers: ['field-wrapper'],
            component: FormlyFieldSelectComponent
        },
        {
            name: 'slider',
            wrappers: ['field-wrapper'],
            component: FormlyFieldSliderComponent
        },
        {
            name: 'switch',
            wrappers: ['field-wrapper'],
            component: FormlyFieldSwitchComponent
        },
        {
            name: 'time-picker',
            wrappers: ['field-wrapper'],
            component: FormlyFieldTimePickerComponent
        },
        {
            name: 'tree-select',
            wrappers: ['field-wrapper'],
            component: FormlyFieldTreeSelectComponent
        }
    ],
    wrappers: [{name: 'field-wrapper', component: FormlyFieldWrapperComponent}]
});

@NgModule({
    providers: [
        {provide: NZ_I18N, useValue: zh_CN}
    ],
    imports: [NgZorroAntdModule, ReactiveFormsModule, FormsModule, CommonModule, ForRootFormlyModule],
    declarations: [
        FormlyFieldInputComponent,
        FormlyFieldTextareaComponent,
        FormlyFieldAutocompleteComponent,
        FormlyFieldCascaderComponent,
        FormlyFieldCheckboxComponent,
        FormlyFieldDatePickerComponent,
        FormlyFieldDateRangePickerComponent,
        FormlyFieldNumberComponent,
        FormlyFieldRadioComponent,
        FormlyFieldRateComponent,
        FormlyFieldSelectComponent,
        FormlyFieldSliderComponent,
        FormlyFieldSwitchComponent,
        FormlyFieldTimePickerComponent,
        FormlyFieldTreeSelectComponent,
        FormlyFieldWrapperComponent
    ],
    exports: [
        NgZorroAntdModule,
        ReactiveFormsModule,
        FormlyModule
    ]
})
export class FormlyNgxZorroModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: FormlyNgxZorroModule,
            providers: []
        };
    }
}
