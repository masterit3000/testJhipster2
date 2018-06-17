import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestJhipster2SharedModule } from '../../shared';
import {
    XaService,
    XaPopupService,
    XaComponent,
    XaDetailComponent,
    XaDialogComponent,
    XaPopupComponent,
    XaDeletePopupComponent,
    XaDeleteDialogComponent,
    xaRoute,
    xaPopupRoute,
} from './';

const ENTITY_STATES = [
    ...xaRoute,
    ...xaPopupRoute,
];

@NgModule({
    imports: [
        TestJhipster2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        XaComponent,
        XaDetailComponent,
        XaDialogComponent,
        XaDeleteDialogComponent,
        XaPopupComponent,
        XaDeletePopupComponent,
    ],
    entryComponents: [
        XaComponent,
        XaDialogComponent,
        XaPopupComponent,
        XaDeleteDialogComponent,
        XaDeletePopupComponent,
    ],
    providers: [
        XaService,
        XaPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestJhipster2XaModule {}
