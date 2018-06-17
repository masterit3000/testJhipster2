import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestJhipster2SharedModule } from '../../shared';
import {
    AnhTaiSanService,
    AnhTaiSanPopupService,
    AnhTaiSanComponent,
    AnhTaiSanDetailComponent,
    AnhTaiSanDialogComponent,
    AnhTaiSanPopupComponent,
    AnhTaiSanDeletePopupComponent,
    AnhTaiSanDeleteDialogComponent,
    anhTaiSanRoute,
    anhTaiSanPopupRoute,
} from './';

const ENTITY_STATES = [
    ...anhTaiSanRoute,
    ...anhTaiSanPopupRoute,
];

@NgModule({
    imports: [
        TestJhipster2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        AnhTaiSanComponent,
        AnhTaiSanDetailComponent,
        AnhTaiSanDialogComponent,
        AnhTaiSanDeleteDialogComponent,
        AnhTaiSanPopupComponent,
        AnhTaiSanDeletePopupComponent,
    ],
    entryComponents: [
        AnhTaiSanComponent,
        AnhTaiSanDialogComponent,
        AnhTaiSanPopupComponent,
        AnhTaiSanDeleteDialogComponent,
        AnhTaiSanDeletePopupComponent,
    ],
    providers: [
        AnhTaiSanService,
        AnhTaiSanPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestJhipster2AnhTaiSanModule {}
