import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Does Gap Bio support Medtech products?',
      answer:
        'Currently, we specialise in oncology drugs, with plans to expand into medtech soon.',
    },
    {
      question: 'Does Gap Bio operate in other therapeutic areas?',
      answer:
        'While our primary focus is oncology, we aim to encompass all therapeutic areas in the future.',
    },
  ],
  [
    {
      question: 'How does the Deck Optimiser function?',
      answer:
        'Upload your .pptx file, and our Deck Optimiser will use specialised models to score and, if you choose, enhance your pitch deck on our platform.',
    },
    {
      question: 'How is user data protected and kept confidential?',
      answer:
        'We implement strict, multi-layered security protocols and continuous monitoring to assure robust data protection and confidentiality.',
    },
  ],
  [
    {
      question: 'What future enhancements are planned for Gap Bio?',
      answer:
        'Expect expansions into various therapeutic areas and innovative tech to simplify the licensing process—stay tuned!',
    },
    {
      question: "Who can benefit from Gap Bio's service?",
      answer:
        'Companies actively pursuing in-licensing or out-licensing partnerships for oncology drugs.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
