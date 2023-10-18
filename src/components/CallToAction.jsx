import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import { SparklesIcon } from '@heroicons/react/20/solid'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Start connecting with the right partners.
          </p>
          <div className="my-8 flex flex-col flex-wrap justify-center gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/register" color="white" className="grow sm:grow-0">
              Register
            </Button>
          </div>
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Upscale your pitch
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Optimise your pitch deck (no registration required).
          </p>
          <div className="mt-8 flex flex-col flex-wrap justify-center gap-x-6 gap-y-4 sm:flex-row">
            <Button
              className="grow whitespace-nowrap px-3 sm:grow-0"
              href="/optimise-deck"
            >
              <div>
                <SparklesIcon
                  className="mr-1 h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              Try it out for free
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
