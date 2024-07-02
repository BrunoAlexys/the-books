import { ButtonProps } from "@/app/Types/ButtonProps";

export const Button = ({ children, color, colorText, className }: ButtonProps) => {

    const getColorClass = () => {
        return color ? color : 'bg-amarelo'; // Usa a cor passada ou define amarelo como padrão
    }

    const getColorTextClass = () => {
        return colorText ? colorText : '#FFFFFF'; // Usa a cor do texto passada ou define branco como padrão
    }

    return (
        <button
            style={{ backgroundColor: getColorClass(), color: getColorTextClass() }}
            className={`${className} w-36 sm:w-44 bg-amarelo rounded-3xl p-2 font-extrabold`}>{children}</button>
    );
}