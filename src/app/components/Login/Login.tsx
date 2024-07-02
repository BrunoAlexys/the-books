"use client";

import Image from "next/image";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { FormEvent, useState } from "react";
import { LoginType } from "@/app/Types/LoginType";


export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, setLogin] = useState<LoginType>({ email: '', password: '' });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className="h-screen flex flex-col justify-around items-center">
            <div className="flex flex-col flex-1 justify-center items-center gap-2">
                <Image
                    src="/assets/logo.svg"
                    alt="Logo"
                    width={82}
                    height={82}
                />
                <h1 className="text-2xl font-extrabold">Login</h1>
            </div>
            <div className="flex flex-col flex-1">
                <form onClick={handleSubmit} className="flex flex-col items-center">
                    <Input
                        label="E-mail"
                        placeholder="Digite seu e-mail"
                        type="email"
                        value={email}
                        onChange={e => setLogin({...login, email: e.target.value})} />
                    <Input
                        label="Senha"
                        placeholder="Digite sua senha"
                        type="password"
                        value={password}
                        onChange={e => ({...login, password: e.target.value})} />
                </form>
                <p className="ml-4 mt-1 text-sm text-cinza">Esqueceu sua Senha? <a href="/" className="text-amarelo">Clique aqui</a></p>
                <div className="flex flex-col flex-1 items-center mt-10">
                    <div className="mb-7"><Button>Login</Button></div>
                    <div className="border-b-2 border-gray-200/50 w-[355px] sm:w-[440px] md:w-[600px]"></div>
                </div>
            </div>
            <div className="flex flex-col flex-1 items-center gap-3">
                <p className="p-2 text-black text-sm font-semibold">Ou faça login com:</p>
                <div className="bg-gray-200/50 w-80 sm:w-[360px] md:w-[500px] rounded-3xl p-2">
                    <a href="/" className="flex justify-center items-center gap-2">
                        <Image
                            src="/assets/google.svg"
                            alt="Logo do Google"
                            width={24}
                            height={24}
                        />
                        <p className="font-semibold text-black text-base">Entrar com Google</p>
                    </a>
                </div>
                <div className="bg-gray-200/50 w-80 sm:w-[360px] md:w-[500px] rounded-3xl p-2">
                    <a href="/" className="flex justify-center items-center gap-2">
                        <Image
                            src="/assets/apple.svg"
                            alt="Logo da Apple"
                            width={24}
                            height={24}
                        />
                        <p className="font-semibold text-black text-base">Entrar com Apple</p>
                    </a>
                </div>
            </div>
        </div>
    );
}