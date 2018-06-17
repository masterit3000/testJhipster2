import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestJhipster2SharedModule } from '../../shared';
import {
    XaMySuffixService,
    XaMySuffixPopupService,
    XaMySuffixComponent,
    XaMySuffixDetailComponent,
    XaMySuffixDialogComponent,
    XaMySuffixPopupComponent,
    XaMySuffixDeletePopupComponent,
    XaMySuffixDeleteDialogComponent,
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
        XaMySuffixComponent,
        XaMySuffixDetailComponent,
        XaMySuffixDialogComponent,
        XaMySuffixDeleteDialogComponent,
        XaMySuffixPopupComponent,
        XaMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        XaMySuffixComponent,
        XaMySuffixDialogComponent,
        XaMySuffixPopupComponent,
        XaMySuffixDeleteDialogComponent,
        XaMySuffixDeletePopupComponent,
    ],
    providers: [
        XaMySuffixService,
        XaMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestJhipster2XaMySuffixModule {}
