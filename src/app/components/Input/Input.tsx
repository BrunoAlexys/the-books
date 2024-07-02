import { InputProps } from "@/app/Types/InputProps";

export const Input = ({ label, placeholder, type, value, className, onChange}: InputProps) => {
    return (
        <div className="flex flex-col">
            <label className="p-2 text-xl font-medium ml-2" htmlFor={type}>{label}</label>
            <input 
                type={type} 
                value={value} 
                placeholder={placeholder}
                onChange={onChange}
                className={`${className} bg-gray-200/50 rounded-2xl p-2 w-80 sm:w-[390px] md:w-[600px] xl:w-[583px] placeholder:p-2`} />
        </div>
    );
}