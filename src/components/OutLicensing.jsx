import {
  SparklesIcon,
  GlobeAsiaAustraliaIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-out-licensing.png'
import Image from 'next/image'

const features = [
  {
    name: 'Strategic opportunities.',
    description:
      'Foster connections with qualified partners specifically seeking innovations in your disease area.',
    icon: GlobeAsiaAustraliaIcon,
  },
  {
    name: 'Pitch optimization.',
    description:
      'Optimize your pitch with our AI-powered deck optimizer, ensuring clarity, impact, and memorability.',
    icon: SparklesIcon,
  },
  {
    name: 'Bespoke events.',
    description:
      'Host bespoke events to showcase your assets to a curated audience of potential partners.',
    icon: UserGroupIcon,
  },
]

export function OutLicensing() {
  return (
    <section
      id="out-licensing"
      aria-label="Features for out-licensing companies"
      className="relative overflow-hidden"
    >
      <Image
        className="absolute inset-0 max-w-none"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
      />
      <Container className="relative pb-28 pt-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="my-1 inline-block rounded border border-blue-100 px-2.5 pb-0.5 font-medium text-blue-100">
              Out-Licensing
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Find the right partner for your assets
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Stand out to interested audiences, creating opportunities for
              meaningful interactions
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-6 gap-y-10 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  className="group transition-all delay-150 ease-in-out"
                  key={feature.name}
                >
                  <div className="flex flex-col rounded-md px-5 py-5 group-hover:bg-gray-200 group-hover:bg-opacity-10">
                    <dt className="text-base font-semibold leading-7 text-gray-200">
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 bg-opacity-10 group-hover:bg-transparent">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
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
