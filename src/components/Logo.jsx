import gapBioLogo from '@/images/logos/gapbio.png'
import Image from 'next/image'

export function Logo(props) {
  return <Image src={gapBioLogo} alt="GapBio Logo" {...props} />
}
