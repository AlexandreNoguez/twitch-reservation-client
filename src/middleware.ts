import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

const AUTH_PAGES = ["/"]

const isAuthPage = (url: string) => AUTH_PAGES.some(page => page.startsWith(url))

// let redirectToLogin = false;
export async function middleware(request: NextRequest) {
    const { url, nextUrl, cookies } = request;
    const token = cookies.get("authToken") ?? { value: null }
    const verifiedToken = token.value && (await verifyToken(token.value));
    const isAuthPageRequested = isAuthPage(nextUrl.pathname);

    // const response = NextResponse.next();

    console.log("url", url); //http://localhost:3000/login
    // console.log("cookies", cookies); // token
    console.log("nextUrl", nextUrl);
    console.log("token", token);
    // console.log("verifiedToken", verifiedToken);
    // console.log("isAuthPageRequested", isAuthPageRequested);

    // if (isAuthPageRequested) {
    //     if (!verifiedToken) {


    //         const response = NextResponse.next();
    //         response.cookies.delete("authToken");
    //         return NextResponse.redirect(new URL("/login", request.url))
    //     }

    //     const response = NextResponse.redirect(new URL(`/`, url))
    //     return response
    // }

    // if (request.nextUrl.pathname.startsWith("/login")
    //     && (!token.value || redirectToLogin)) {
    //     return;
    // }



    // if (!verifiedToken) {
    //     const searchParams = new URLSearchParams(nextUrl.searchParams);
    //     searchParams.set("next", nextUrl.pathname);

    //     const response = NextResponse.redirect(
    //         new URL(`/login?${searchParams}`, url)
    //     );

    //     return response.cookies.delete("authToken");
    // }

    // if (!verifiedToken) {
    //     return NextResponse.redirect(
    //         new URL(
    //             `/login?${new URLSearchParams({
    //                 error: "badauth",
    //                 forceLogin: "true",
    //             })}`,
    //             request.url
    //         )
    //     );
    // // }

    if (request.url.includes("/login") && token.value) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (nextUrl.basePath && !token.value) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();

}

export const config = {
    // Matcher ignoring `/_next/`, `/api/` '/images' and '/public' subpaths
    matcher: [
        '/:path*'
    ],
};