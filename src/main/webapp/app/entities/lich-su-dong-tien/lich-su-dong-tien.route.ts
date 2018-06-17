import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from '../../shared';
import { LichSuDongTienComponent } from './lich-su-dong-tien.component';
import { LichSuDongTienDetailComponent } from './lich-su-dong-tien-detail.component';
import { LichSuDongTienPopupComponent } from './lich-su-dong-tien-dialog.component';
import { LichSuDongTienDeletePopupComponent } from './lich-su-dong-tien-delete-dialog.component';

@Injectable()
export class LichSuDongTienResolvePagingParams implements Resolve<any> {

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

export const lichSuDongTienRoute: Routes = [
    {
        path: 'lich-su-dong-tien',
        component: LichSuDongTienComponent,
        resolve: {
            'pagingParams': LichSuDongTienResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'LichSuDongTiens'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'lich-su-dong-tien/:id',
        component: LichSuDongTienDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'LichSuDongTiens'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const lichSuDongTienPopupRoute: Routes = [
    {
        path: 'lich-su-dong-tien-new',
        component: LichSuDongTienPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'LichSuDongTiens'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'lich-su-dong-tien/:id/edit',
        component: LichSuDongTienPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'LichSuDongTiens'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'lich-su-dong-tien/:id/delete',
        component: LichSuDongTienDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'LichSuDongTiens'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
