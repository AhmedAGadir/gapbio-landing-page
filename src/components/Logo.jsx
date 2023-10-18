// import gapBioLogo from '@/images/logos/gapbio.png'
import gapBioLogo from '@/images/logos/gapbio-black.svg'
import Image from 'next/image'

export function Logo(props) {
  return <Image src={gapBioLogo} alt="Gap Bio Logo" {...props} />
}
