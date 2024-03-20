import Link from "next/link"
import BackgroundPage from "./components/Background/Background"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body>
        <BackgroundPage />
        {children}
      </body>
    </html>
  )
}
