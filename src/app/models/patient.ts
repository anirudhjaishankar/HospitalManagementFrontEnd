import { Address } from './address';

export class Patient {
    id: number;
    role: number;
    name: string;
    username: string;
    password: string;
    age: number;
    gender: string;
    phone: number;
    bloodGroup: string;
    address: Address;
}