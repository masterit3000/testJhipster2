import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { TinhMySuffix } from './tinh-my-suffix.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<TinhMySuffix>;

@Injectable()
export class TinhMySuffixService {

    private resourceUrl =  SERVER_API_URL + 'api/tinhs';

    constructor(private http: HttpClient) { }

    create(tinh: TinhMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(tinh);
        return this.http.post<TinhMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(tinh: TinhMySuffix): Observable<EntityResponseType> {
        const copy = this.convert(tinh);
        return this.http.put<TinhMySuffix>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<TinhMySuffix>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<TinhMySuffix[]>> {
        const options = createRequestOption(req);
        return this.http.get<TinhMySuffix[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<TinhMySuffix[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: TinhMySuffix = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<TinhMySuffix[]>): HttpResponse<TinhMySuffix[]> {
        const jsonResponse: TinhMySuffix[] = res.body;
        const body: TinhMySuffix[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to TinhMySuffix.
     */
    private convertItemFromServer(tinh: TinhMySuffix): TinhMySuffix {
        const copy: TinhMySuffix = Object.assign({}, tinh);
        return copy;
    }

    /**
     * Convert a TinhMySuffix to a JSON which can be sent to the server.
     */
    private convert(tinh: TinhMySuffix): TinhMySuffix {
        const copy: TinhMySuffix = Object.assign({}, tinh);
        return copy;
    }
}
