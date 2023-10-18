import {
  SparklesIcon,
  GlobeAsiaAustraliaIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-out-licensing.png'
import Image from 'next/image'
import clsx from 'clsx'

const features = [
  {
    name: 'Strategic opportunities.',
    description:
      'Foster connections with qualified partners specifically seeking innovations in your disease area.',
    icon: GlobeAsiaAustraliaIcon,
  },
  {
    name: 'Pitch optimisation.',
    description:
      'Optimise your pitch with our AI-powered deck optimizer, ensuring clarity, impact, and memorability.',
    icon: SparklesIcon,
    url: '/deck-optimizer',
  },
  {
    name: 'Bespoke events.',
    description:
      'Attend bespoke events to showcase your asset to a curated audience of potential partners.',
    icon: UserGroupIcon,
  },
]

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

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
        fill
        unoptimized
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
              meaningful interactions.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-6 gap-y-10 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  className="group transition-all delay-150 ease-in-out"
                  key={feature.name}
                >
                  <ConditionalWrapper
                    condition={feature.url}
                    wrapper={(children) => <a href={feature.url}>{children}</a>}
                  >
                    <div className="flex flex-col rounded-md px-5 py-5 group-hover:bg-gray-200 group-hover:bg-opacity-10">
                      <dt className="text-base font-semibold leading-7 text-gray-200">
                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 bg-opacity-10 group-hover:bg-transparent">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <div
                          className={clsx({
                            'cursor-pointer transition-all group-hover:underline':
                              feature.url,
                          })}
                        >
                          {feature.name}
                        </div>
                      </dt>
                      <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                        <p className="flex-auto">{feature.description}</p>
                        {feature.url && (
                          <span className="mt-4 text-sm font-medium text-blue-100 hover:text-blue-200">
                            try it out
                            <span
                              aria-hidden="true"
                              className="transition-all group-hover:ml-2"
                            >
                              {' '}
                              &rarr;
                            </span>
                          </span>
                        )}
                      </dd>
                    </div>
                  </ConditionalWrapper>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  )
}
