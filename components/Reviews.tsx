
import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import ReviewGrid from './ReviewGrid'



export function Reviews() {
  return (
    <MaxWidthWrapper className='relative max-w-5xl'>
      <Image
        width={193}
        height={143}
        aria-hidden='true'
        src='/what-people-are-buying.png'
        className='absolute select-none hidden xl:block -left-32 top-1/3'
        alt='Arrow'
      />

      <ReviewGrid />
    </MaxWidthWrapper>
  )
}
