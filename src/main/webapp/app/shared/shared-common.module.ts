import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    TestJhipster2SharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        TestJhipster2SharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        TestJhipster2SharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class TestJhipster2SharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
