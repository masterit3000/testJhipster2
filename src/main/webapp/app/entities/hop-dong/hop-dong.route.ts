import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from '../../shared';
import { HopDongComponent } from './hop-dong.component';
import { HopDongDetailComponent } from './hop-dong-detail.component';
import { HopDongPopupComponent } from './hop-dong-dialog.component';
import { HopDongDeletePopupComponent } from './hop-dong-delete-dialog.component';

@Injectable()
export class HopDongResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const hopDongRoute: Routes = [
    {
        path: 'hop-dong',
        component: HopDongComponent,
        resolve: {
            'pagingParams': HopDongResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'HopDongs'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'hop-dong/:id',
        component: HopDongDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'HopDongs'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const hopDongPopupRoute: Routes = [
    {
        path: 'hop-dong-new',
        component: HopDongPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'HopDongs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'hop-dong/:id/edit',
        component: HopDongPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'HopDongs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'hop-dong/:id/delete',
        component: HopDongDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'HopDongs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
