import './globals.css';

export const metadata = {
  title: 'Berca MP — Heavy Equipment',
  description: 'Katalog alat berat PT Berca Mandiri Perkasa. Temukan excavator, wheel loader, bulldozer, motor grader, dan mesin konstruksi lainnya.',
  keywords: ['heavy equipment', 'alat berat', 'excavator', 'wheel loader', 'Berca MP'],
  openGraph: {
    title: 'Berca MP — Heavy Equipment',
    description: 'Powering progress with dependable heavy equipment.',
    type: 'website',
    locale: 'id_ID'
  }
};

export default function RootLayout({ children }) {
  return <html lang="id"><body>{children}</body></html>;
}
