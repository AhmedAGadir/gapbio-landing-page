import {
  MagnifyingGlassIcon,
  ClockIcon,
  UsersIcon,
} from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-in-licensing.png'
import Image from 'next/image'

const features = [
  {
    name: 'Targeted search.',
    description:
      'Ensure strategic alignment by meticulously matching your goals with relevant oncology products.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'AI precision.',
    description:
      'Connect with ideal opportunities, eliminating the hassle of navigating through irrelevant and ambiguous pitches.',
    icon: ClockIcon,
  },
  {
    name: 'Bespoke events.',
    description:
      'We host bespoke events on your behalf and curate an audience of potential partners that could be a strategic fit',
    icon: UsersIcon,
  },
]

export function InLicensing() {
  return (
    <section
      id="in-licensing"
      aria-label="Features for in-licensing companies"
      className="relative overflow-hidden pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute inset-0 max-w-none"
        src={backgroundImage}
        alt=""
        fill
      />
      <Container className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="my-1 inline-block rounded border border-indigo-700 px-2.5 pb-0.5 font-medium text-indigo-700">
              In-Licensing
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl">
              Search and screen made simple
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-500">
              Forge partnerships where your expertise is valued.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-6 gap-y-10 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  className="group transition-all delay-150 ease-in-out"
                  key={feature.name}
                >
                  <div className="flex flex-col rounded-md px-5 py-5 group-hover:bg-indigo-400 group-hover:bg-opacity-5">
                    <dt className="text-base font-semibold leading-7 text-slate-700">
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-400 bg-opacity-5 group-hover:bg-transparent">
                        <feature.icon
                          className="h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-500">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  )
}
