"use client";

import Image from "next/image";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const Login = () => {
    return (
        <div className="xl:h-screen flex flex-col xl:flex-row justify-center items-center gap-2 xl:gap-20">
            <div className="mb-10">
                <div className="flex flex-col justify-center items-center gap-4 xl:mb-4 mt-12 xl:mt-5">
                    <Image
                        src="/assets/logo.svg"
                        alt="Logo"
                        width={84}
                        height={84}
                    />
                    <h1 className="text-3xl xl:text-[40px] font-extrabold">Login</h1>
                </div>
                <div>
                    <Input
                        type="email"
                        placeholder="Digite seu email"
                        label="Email"
                        className="outline-none" />
                    <Input
                        type="password"
                        placeholder="Digite sua senha"
                        label="Senha" 
                        className="outline-none" />
                    <p className="ml-4 mt-2 text-[#999999]">Esqueceu sua Senha?<a className="text-amarelo"> Clique aqui</a></p>
                    <div className="flex justify-center mt-16">
                        <Button>Entrar</Button>
                    </div>
                </div>
            </div>

            <div className="border-2 border-[#D9D9D959] w-[355px] sm:w-[650px] xl:w-0 xl:h-[70%]"></div>

            <div className="flex flex-col gap-4 justify-center items-center sm:mb-4">
                <h2 className="text-sm font-semibold p-2">Ou faça login com:</h2>
                <div className="p-2 w-[342px] sm:w-[500px] xl:w-[575px] xl:p-3 bg-[#D9D9D959] flex justify-center items-center gap-2 rounded-3xl">
                    <Image
                        src="/assets/google.svg"
                        alt="Logo da Google"
                        width={24}
                        height={24}
                    />
                    <h3 className="text-sm font-semibold"><a className="cursor-pointer">Entrar com Google</a></h3>
                </div>
                <div className="p-2 w-[342px] sm:w-[500px] xl:w-[575px] xl:p-3 bg-[#D9D9D959] flex justify-center items-center gap-2 rounded-3xl">
                    <Image
                        src="/assets/apple.svg"
                        alt="Logo da Apple"
                        width={24}
                        height={24}
                    />
                    <h3 className="text-sm font-semibold"><a className="cursor-pointer">Entrar com Apple</a></h3>
                </div>
            </div>
        </div>
    );
}