import { ReviewProps } from "@/interfaces/Reviews"
import Phone from "./Phone"
import { cn } from "@/lib/utils"


const SingleReview = ({ imgSrc, className, ...props }: ReviewProps) => {
  const POSSIBLE_ANIMATION_DELAYS = [
    '0s',
    '0.1s',
    '0.2s',
    '0.3s',
    '0.4s',
    '0.5s',
  ]

  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
    Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ]
  return <>
    <div
      className={cn(
        'animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}>
      <Phone imgSrc={imgSrc} />
    </div>
  </>
}

export default SingleReview
