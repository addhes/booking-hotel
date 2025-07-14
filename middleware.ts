import { NextRequest, NextResponse } from 'next/server'
import {auth} from '@/auth'

// membuat list 
const ProtectedRoutes = ["/myreservation", "/checkout", "/admin"];

export async function middleware(request: NextRequest) {
    const session = await auth();
    const isLoggedIn = !!session?.user;
    const role = session?.user.role;
    const {pathname} = request.nextUrl;

    // jika user belum login dan berusaha mengakses route yang diprotect maka kembalikan ke halaman signin
    if (!isLoggedIn && ProtectedRoutes.some((route) => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL("/signin", request.url))
    }

    // jika user login tapi bukan role admin dan berusaha masuk ke halaman /admin makan kembalikan ke halaman home
    if (isLoggedIn && role !== "admin" && pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    // jika user sudah login dan berusaha mengakses halaman login kembalikan ke halaman home
    if (isLoggedIn && pathname.startsWith("/signin")) {
        return NextResponse.redirect(new URL("/", request.url))
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}