
import "./globals.css";


export const metadata = {
  title: "Aarti Ghorpade Portfolio",
  description: "Aarti Ghorpade Software Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
