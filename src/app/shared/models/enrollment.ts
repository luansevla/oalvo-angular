/**
 * Alvo ID API
 * API desenvolvida para realizar as validações, autenticações e gerenciamento de usuários, células e eventos O Alvo Church.
 *
 * OpenAPI spec version: 0.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Event } from './event';
import { PaymentArray } from './paymentArray';

export interface Enrollment { 
    name: string;
    email?: string;
    phoneNumber: string;
    document: string;
    birthday: string;
    area?: string;
    cell?: string;
    event: Event;
    payment?: Array<PaymentArray>;
    type: string;
    status: string;
    creatAt?: Date;
    update?: Date;
}