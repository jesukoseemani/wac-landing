import { Metadata } from "next";

import DashboardLayout from "@/components/DashboardLayout";

interface WacLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Wac",
  description: "This is wac admin",
};

export default function ProductsLayout({ children }: WacLayoutProps) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
