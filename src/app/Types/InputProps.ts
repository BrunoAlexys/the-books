export type InputProps = {
    label?: string;
    placeholder?: string;
    type: string;
    value?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}