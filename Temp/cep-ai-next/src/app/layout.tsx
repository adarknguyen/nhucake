import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "CEP-AI - Tự động hóa đăng bài bằng trí tuệ nhân tạo",
    template: "%s | CEP-AI",
  },
  description: "CEP-AI - Giải pháp marketing tự động bằng trí tuệ nhân tạo. Hỗ trợ AI tạo nội dung, auto đăng Facebook, tải video, chỉnh sửa video nhanh.",
  keywords: ["CEP-AI", "marketing", "AI", "tự động hóa", "Facebook", "content marketing", "auto post", "AI content", "video editing"],
  authors: [{ name: "CEP-AI" }],
  creator: "CEP-AI",
  publisher: "CEP-AI",
  metadataBase: new URL("https://cep-ai.com"),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://cep-ai.com",
    siteName: "CEP-AI",
    title: "CEP-AI - Tự động hóa đăng bài bằng trí tuệ nhân tạo",
    description: "Giải pháp marketing tự động bằng trí tuệ nhân tạo. Tiết kiệm 80% thời gian cho công việc marketing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CEP-AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CEP-AI - Tự động hóa đăng bài bằng trí tuệ nhân tạo",
    description: "Giải pháp marketing tự động bằng trí tuệ nhân tạo",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
