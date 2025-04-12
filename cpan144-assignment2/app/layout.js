import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main-container">
          {children}
        </div>
      </body>
    </html>
  )
}