import "./globals.css";

export const metadata = {
  title: "Moise App",
  description: "Your Next.js application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
