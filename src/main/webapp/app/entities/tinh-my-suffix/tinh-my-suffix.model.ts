import { BaseEntity } from './../../shared';

export class TinhMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public ten?: string,
        public huyens?: BaseEntity[],
    ) {
    }
}
