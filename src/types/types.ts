import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface TableRow {
  name: string;
  price: number;
  quantity: number;
}

export type IInvoice = {
  invoiceId: string;
  dueDate: string;
  issueDate: string;
  status: boolean;
  paymentMethod: string;
  items: TableRow[];
  subTotal:number;
  discount:number;
  tax:number;
};

export type IUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  invoices: IInvoice[];
  currentInvoice?: IInvoice | null;
};

export type Action =
  | { type: "STORE_LOCAL_STORAGE"; payload: IUser[] }
  | { type: "ADD_USER"; payload: IUser }
  | { type: "LOGIN"; payload: IUser }
  | { type: "LOGOUT" }
  | { type: "ADD_INVOICE"; payload: IInvoice }
  | { type: "SET_CURRENT_INVOICE"; payload: IInvoice | null };

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

export type ButtonProps = {
  to: string;
  name: string;
  icon?: React.ElementType;
  isActive: boolean;
  onClick: (item: string) => void;
};

export interface IClient {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface IOrderTable {
  items: TableRow[];
  onItemChange: (
    index: number,
    field: keyof TableRow,
    value: string | number
  ) => void;
  onRemoveItem: (index: number) => void;
  onAddItem: () => void;
}

export interface IState {
  users: IUser[];
  loggedInUser: IUser | null;
}

export interface IPreview {
  user: IUser;
  client: IClient;
  invoice: IInvoice;
  pageType: string;
  list: TableRow[];
}

export interface IButton {
  icon: string;
  text: string;
  onClick: () => void;
  className?: string;
}
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
export interface DeleteConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export interface FilterModalProps {
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
  filterStatus: { paid: boolean; unpaid: boolean };
  setFilterStatus: React.Dispatch<
    React.SetStateAction<{ paid: boolean; unpaid: boolean }>
  >;
  applyFilter: () => void;
  closeFilter: () => void;
}
