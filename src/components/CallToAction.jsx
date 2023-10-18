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
            Get Started Today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Start connecting with the right partners .
          </p>
          <div className="mt-8 flex flex-col flex-wrap justify-center gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/register" color="white" className="grow sm:grow-0">
              Register
            </Button>
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
              Optimise your pitch deck
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
