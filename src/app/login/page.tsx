'use client'
import { FormEvent, FormEventHandler, useState } from "react";
// import { redirect } from 'next/navigation'
import { useRouter } from "next/navigation"

import cookie from 'cookiejs';

import useStore from "@/store";


export default function Login() {
    const [userLogin, setUserLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { login } = useStore();

    const router = useRouter();

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();

        const loginDTO = {
            user_login: userLogin,
            user_password: password
        }

        const token = await login(loginDTO);

        cookie.set("authToken", token);
        console.log(token);

        if (token) {
            router.push("/")
        }

        // redirect("/login")

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="login" className="block text-gray-600 text-sm font-medium">Login</label>
                        <input
                            type="text"
                            id="login"
                            className="w-full border border-gray-300 p-2 rounded"
                            value={userLogin}
                            onChange={(e) => setUserLogin(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 text-sm font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full border border-gray-300 p-2 rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    // onClick={handleLogin}
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}
