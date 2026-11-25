import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PropFlow AI | Real Estate Lead Intelligence",
  description: "An explainable lead management CRM for US real estate agents.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
