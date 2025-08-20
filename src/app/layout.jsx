import "./globals.css";

import { Navbar } from '@app/components/shared/Navbar';
import { outerSans } from "./layoutUtils";

export const metadata = {
  title: "Bryan Garcia | Full stack developer",
  description: "Bryan Garcia Portfolio. Full stack ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outerSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
