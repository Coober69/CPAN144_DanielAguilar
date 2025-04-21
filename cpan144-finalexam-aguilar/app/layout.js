//CPAN 144 - FINAL EXAM - Daniel Aguilar
//Layout.js

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {/* All page content will be injected as children */}
          {children}
        </body>
      </html>
    );
  }