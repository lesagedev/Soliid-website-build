import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  try {
    // Protect admin routes (except login)
    if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
      const token = request.cookies.get("admin-token")?.value

      if (!token) {
        return NextResponse.redirect(new URL("/admin/login", request.url))
      }

      // Basic token validation without database calls
      try {
        const JWT_SECRET = process.env.JWT_SECRET || "soliid-admin-secret-2025"
        const jwt = await import("jsonwebtoken")
        jwt.verify(token, JWT_SECRET)
      } catch {
        return NextResponse.redirect(new URL("/admin/login", request.url))
      }
    }

    // Protect admin API routes
    if (pathname.startsWith("/api/admin") && !pathname.startsWith("/api/admin/auth")) {
      const token = request.cookies.get("admin-token")?.value

      if (!token) {
        return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
      }

      // Basic token validation without database calls
      try {
        const JWT_SECRET = process.env.JWT_SECRET || "soliid-admin-secret-2025"
        const jwt = await import("jsonwebtoken")
        jwt.verify(token, JWT_SECRET)
      } catch {
        return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
      }
    }

    // Redirect admin login if already authenticated
    if (pathname === "/admin/login") {
      const token = request.cookies.get("admin-token")?.value

      if (token) {
        try {
          const JWT_SECRET = process.env.JWT_SECRET || "soliid-admin-secret-2025"
          const jwt = await import("jsonwebtoken")
          jwt.verify(token, JWT_SECRET)
          return NextResponse.redirect(new URL("/admin", request.url))
        } catch {
          // Invalid token, continue to login page
        }
      }
    }

    return NextResponse.next()
  } catch (error) {
    console.error("Middleware error:", error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
}
