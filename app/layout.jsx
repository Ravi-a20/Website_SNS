import "./globals.css"
import { Inter } from "next/font/google"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import WelcomeSplash from "@/components/welcome-splash"
import { Toaster } from "@/components/ui/toaster"
import { ToastProvider } from "@/components/ui/use-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SafenSafe Management - Security & Safety",
  icons: {
    icon: "/shield.png",
  },
  description:
    "SNS India is a popular security services provider with a nationwide presence, delivering exceptional security solutions for over two decades.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ToastProvider>
          <WelcomeSplash />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <Toaster />
        </ToastProvider>
      </body>
    </html>
  )
}



import './globals.css'