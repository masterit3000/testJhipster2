import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { XaMySuffixComponent } from './xa-my-suffix.component';
import { XaMySuffixDetailComponent } from './xa-my-suffix-detail.component';
import { XaMySuffixPopupComponent } from './xa-my-suffix-dialog.component';
import { XaMySuffixDeletePopupComponent } from './xa-my-suffix-delete-dialog.component';

export const xaRoute: Routes = [
    {
        path: 'xa-my-suffix',
        component: XaMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Xas'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'xa-my-suffix/:id',
        component: XaMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Xas'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const xaPopupRoute: Routes = [
    {
        path: 'xa-my-suffix-new',
        component: XaMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Xas'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'xa-my-suffix/:id/edit',
        component: XaMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Xas'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'xa-my-suffix/:id/delete',
        component: XaMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Xas'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
