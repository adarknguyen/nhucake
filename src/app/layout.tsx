import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

export const metadata: Metadata = {
  title: 'Nhu Cake - Bánh Kem Thủ Công Cao Cấp',
  description: 'Bánh kem thủ công cao cấp cho những khoảnh khắc đặc biệt của bạn. Tươi ngon mỗi ngày từ bàn tay người thợ với nguyên liệu chọn lọc nhất.',
  keywords: 'bánh kem, bánh sinh nhật, bánh cưới, bánh thủ công, Nhu Cake',
  openGraph: {
    title: 'Nhu Cake - Bánh Kem Thủ Công Cao Cấp',
    description: 'Bánh kem thủ công cao cấp cho những khoảnh khắc đặc biệt',
    type: 'website',
    locale: 'vi_VN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
