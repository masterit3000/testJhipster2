import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { VayLaiComponent } from './vay-lai.component';
import { VayLaiDetailComponent } from './vay-lai-detail.component';
import { VayLaiPopupComponent } from './vay-lai-dialog.component';
import { VayLaiDeletePopupComponent } from './vay-lai-delete-dialog.component';

export const vayLaiRoute: Routes = [
    {
        path: 'vay-lai',
        component: VayLaiComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'VayLais'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'vay-lai/:id',
        component: VayLaiDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'VayLais'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const vayLaiPopupRoute: Routes = [
    {
        path: 'vay-lai-new',
        component: VayLaiPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'VayLais'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'vay-lai/:id/edit',
        component: VayLaiPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'VayLais'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'vay-lai/:id/delete',
        component: VayLaiDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'VayLais'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
