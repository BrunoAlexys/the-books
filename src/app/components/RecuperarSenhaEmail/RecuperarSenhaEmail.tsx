"use client";

import Image from "next/image";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const RecuperarSenhaEmail = () => {
    return (
        <div className="w-full justify-center items-center">
            <div className="flex flex-col justify-center items-center mt-8">
                <Image
                    src="/assets/logo.svg"
                    alt="Logo"
                    width={82}
                    height={82}
                    className="m-7 sm:w-20 sm:h-20 sm:mt-10 xl:mt-0"
                />
                <h1 className="text-2xl font-extrabold">Recuperar Senha</h1>
            </div>
            <div className="flex flex-col items-center text-center mt-10">
                <h2 className="font-bold text-base md:text-[26px]">
                    Insira seu e-mail para <br />
                    receber o código de recuperação de senha.
                </h2>
                <Input
                className="md:w-[682px] md:p-3 md:mt-3"
                    placeholder="Digite seu e-mail"
                    type="email"
                />
            </div>
            <div className="flex gap-4 mt-14  items-center justify-center">
                <Button className="md:w-[256px] md:p-3" color="#e7e7e7" colorText="#9E9E9E">Voltar</Button>
                <Button className="md:w-[256px] md:p-3">Enviar</Button>
            </div>
        </div>
    );
}