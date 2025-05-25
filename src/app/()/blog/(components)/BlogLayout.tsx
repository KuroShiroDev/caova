import type React from "react"
import { MaxWidthWrapper } from "@/components/ui/maxWidthWrapper/MaxWidthWrapper"

interface BlogLayoutProps {
  children: React.ReactNode
}

export const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MaxWidthWrapper className="py-8">{children}</MaxWidthWrapper>
    </div>
  )
}
