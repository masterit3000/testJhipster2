import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestJhipster2SharedModule } from '../../shared';
import {
    GhiNoService,
    GhiNoPopupService,
    GhiNoComponent,
    GhiNoDetailComponent,
    GhiNoDialogComponent,
    GhiNoPopupComponent,
    GhiNoDeletePopupComponent,
    GhiNoDeleteDialogComponent,
    ghiNoRoute,
    ghiNoPopupRoute,
} from './';

const ENTITY_STATES = [
    ...ghiNoRoute,
    ...ghiNoPopupRoute,
];

@NgModule({
    imports: [
        TestJhipster2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        GhiNoComponent,
        GhiNoDetailComponent,
        GhiNoDialogComponent,
        GhiNoDeleteDialogComponent,
        GhiNoPopupComponent,
        GhiNoDeletePopupComponent,
    ],
    entryComponents: [
        GhiNoComponent,
        GhiNoDialogComponent,
        GhiNoPopupComponent,
        GhiNoDeleteDialogComponent,
        GhiNoDeletePopupComponent,
    ],
    providers: [
        GhiNoService,
        GhiNoPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestJhipster2GhiNoModule {}
