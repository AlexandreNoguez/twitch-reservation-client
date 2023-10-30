import { jwtVerify } from "jose";

export function getJwtKey() {
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY

    if (!secret) {
        throw new Error("Erro na autenticação")
    }

    return new TextEncoder().encode(secret);
}

export async function verifyToken(token: string) {
    try {

        const { payload } = await jwtVerify(token, getJwtKey());

        return payload;

    } catch (error) {
        return console.error(error);

    }

}