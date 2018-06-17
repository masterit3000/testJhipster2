import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { HuyenMySuffix } from './huyen-my-suffix.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<HuyenMySuffix>;

@Injectable()
export class HuyenMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'api/huyens';

    constructor(private http: HttpClient) { }

    create(huyen: HuyenMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(huyen);
        return this.http.post<HuyenMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(huyen: HuyenMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(huyen);
        return this.http.put<HuyenMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<HuyenMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<HuyenMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<HuyenMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<HuyenMySuffix[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: HuyenMySuffix = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<HuyenMySuffix[]>): HttpResponse<HuyenMySuffix[]> {
        const jsonResponse: HuyenMySuffix[] = res.body;
        const body: HuyenMySuffix[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to HuyenMySuffix.
     */
    private convertItemFromServer(huyen: HuyenMySuffix): HuyenMySuffix {
        const copy: HuyenMySuffix = Object.assign({}, huyen);
        return copy;
    }

    /**
     * Convert a HuyenMySuffix to a JSON which can be sent to the server.
     */
    private convert(huyen: HuyenMySuffix): HuyenMySuffix {
        const copy: HuyenMySuffix = Object.assign({}, huyen);
        return copy;
    }
}
