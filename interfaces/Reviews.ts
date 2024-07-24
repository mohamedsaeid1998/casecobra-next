import { HTMLAttributes } from "react"

export interface IReviewColumn {
    reviews: string[]
    className?: string
    reviewClassName?: (reviewIndex: number) => string
    msPerPixel?: number
}

export interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
}