'use client'
import cookie from "cookiejs"
import Link from "next/link"
import { useRouter } from "next/navigation"

export const Header = () => {
    const router = useRouter();

    const handleLogout = () => {
        cookie.remove("authToken");
        router.push("/login")
    }

    return (
        <div className="flex justify-between p-2 px-4">
            <h1>Logo</h1>
            <nav>
                <ul>
                    <button type="button" onClick={handleLogout}>
                        <li>
                            Sair
                        </li>
                    </button>
                </ul>
            </nav>
        </div>
    )
}