import { cn } from "@/lib/utils"
import { ReactNode } from "react"


interface IProps {
  className?: string
  children: ReactNode
}

const MaxWidthWrapper = ({ className, children }: IProps) => {
  return <>
    <div className={cn(`mx-auto size-full max-w-screen-xl px-2.5 md:px-20`, className)}>
      {children}
    </div>
  </>
}

export default MaxWidthWrapper