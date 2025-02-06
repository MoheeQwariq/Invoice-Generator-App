declare module "@iconscout/react-unicons" {
    import { FC, SVGProps } from "react";
    
    export interface UniconProps extends SVGProps<SVGSVGElement> {
      size?: string | number;
      color?: string;
    }
    
    export const UilShoppingCart: FC<UniconProps>;
    export const UilBell: FC<UniconProps>;
    export const UilUsersAlt: FC<UniconProps>;
    export const UilBars: FC<UniconProps>;
    export const UilSearch: FC<UniconProps>;
  }
  