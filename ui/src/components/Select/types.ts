import { BoxProps } from "../Box/types";

export interface SelectOption {
    label: string;
    value: any;
};

export interface SelectProps extends BoxProps {
    value: any;
    onChange: any;
    options:SelectOption[];
    placeholder?: string;
    isMulti?: boolean;
}
