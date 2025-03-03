import type { Metadata } from 'next';
import { Jost, Noto_Sans, Poppins } from 'next/font/google';
import './globals.css';

const jost = Jost({
  variable: '--font-jost',
  weight: ['200', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const noto = Noto_Sans({
  variable: '--font-noto',
  weight: ['400', '700'],
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['500', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Digital Pixel',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${noto.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
