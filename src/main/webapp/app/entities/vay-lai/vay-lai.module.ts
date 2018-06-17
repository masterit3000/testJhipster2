import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestJhipster2SharedModule } from '../../shared';
import {
    VayLaiService,
    VayLaiPopupService,
    VayLaiComponent,
    VayLaiDetailComponent,
    VayLaiDialogComponent,
    VayLaiPopupComponent,
    VayLaiDeletePopupComponent,
    VayLaiDeleteDialogComponent,
    vayLaiRoute,
    vayLaiPopupRoute,
} from './';

const ENTITY_STATES = [
    ...vayLaiRoute,
    ...vayLaiPopupRoute,
];

@NgModule({
    imports: [
        TestJhipster2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        VayLaiComponent,
        VayLaiDetailComponent,
        VayLaiDialogComponent,
        VayLaiDeleteDialogComponent,
        VayLaiPopupComponent,
        VayLaiDeletePopupComponent,
    ],
    entryComponents: [
        VayLaiComponent,
        VayLaiDialogComponent,
        VayLaiPopupComponent,
        VayLaiDeleteDialogComponent,
        VayLaiDeletePopupComponent,
    ],
    providers: [
        VayLaiService,
        VayLaiPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestJhipster2VayLaiModule {}
