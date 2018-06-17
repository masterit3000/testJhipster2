import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestJhipster2SharedModule } from '../../shared';
import {
    KhachHangService,
    KhachHangPopupService,
    KhachHangComponent,
    KhachHangDetailComponent,
    KhachHangDialogComponent,
    KhachHangPopupComponent,
    KhachHangDeletePopupComponent,
    KhachHangDeleteDialogComponent,
    khachHangRoute,
    khachHangPopupRoute,
    KhachHangResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...khachHangRoute,
    ...khachHangPopupRoute,
];

@NgModule({
    imports: [
        TestJhipster2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        KhachHangComponent,
        KhachHangDetailComponent,
        KhachHangDialogComponent,
        KhachHangDeleteDialogComponent,
        KhachHangPopupComponent,
        KhachHangDeletePopupComponent,
    ],
    entryComponents: [
        KhachHangComponent,
        KhachHangDialogComponent,
        KhachHangPopupComponent,
        KhachHangDeleteDialogComponent,
        KhachHangDeletePopupComponent,
    ],
    providers: [
        KhachHangService,
        KhachHangPopupService,
        KhachHangResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestJhipster2KhachHangModule {}
