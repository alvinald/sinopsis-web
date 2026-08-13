import { Navigate, Outlet, useLocation } from 'react-router-dom'

/**
 * AdminGuard — Middleware untuk melindungi semua route /admin/*
 *
 * Saat ini menggunakan mock auth (isAuthenticated = true).
 * Ketika integrasi backend, ganti `isAuthenticated` dengan nilai dari
 * AuthContext atau state management (Zustand, dll).
 */

// TODO: Ganti dengan AuthContext / Zustand store saat backend siap
const isAuthenticated = true

export function AdminGuard() {
  const location = useLocation()

  if (!isAuthenticated) {
    // Redirect ke login, simpan halaman asal agar bisa redirect balik setelah login
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <Outlet />
}
