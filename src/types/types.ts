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