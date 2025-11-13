import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GrowthDrive | Performance Marketing Agency',
  description: 'We drive revenue, not just traffic. ROI-focused performance marketing for e-commerce and SaaS brands.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}