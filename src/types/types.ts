import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type FormData = {
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
};

export type InputFieldProps = {
    type: string;
    id: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    icon?: IconDefinition;
};

export type Errors = {
    [key: string]: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
};

export interface IUser {
    email: string;
    password: string;
}

export interface TableRow {
    name: string;
    price: number;
    quantity: number;
}

export interface IlogIn {
    onLogin: () => void;
}
export type ButtonProps = {
    to: string;
    name: string;
    icon?: React.ElementType;
    isActive: boolean;
    onClick: (item: string) => void;
};

export interface InvoiceCardProps {
    clientName: string;
    clientEmail: string;
    invoiceNumber: string;
    date: string;
    totalAmount: number;
    status: string;
    profileImage?: string;
    onDelete: () => void;
    onEdit: () => void;
}