import Link from 'next/link'

import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export const metadata = {
  title: 'Terms & Conditions',
}

export default function TermsConditions() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mb-4 mt-20 text-lg font-semibold text-gray-900">
        Terms & Conditions
      </h2>
      <h3 className="text-md mb-3 font-semibold">Acceptance of Terms</h3>
      <p className="text-md mb-6 mt-2 text-slate-500">
        By accessing or using our services, you agree to be bound by these
        Terms. If you disagree with any part, you may not access the service.
      </p>

      <h3 className="text-md mb-3 font-semibold">Service Provision</h3>
      <p className="text-md mb-6 text-slate-500">
        We reserve the right to withdraw or amend our service without notice. We
        will not be liable if, for any reason, our service is unavailable at any
        time.
      </p>

      <h3 className="text-md mb-3 font-semibold">User Responsibilities</h3>
      <p className="text-md mb-6 text-slate-500">
        Users are responsible for safeguarding their own account information and
        for any activities or actions under their account. Misuse or
        unauthorized use must be reported to us immediately.
      </p>

      <h3 className="text-md mb-3 font-semibold">Intellectual Property</h3>
      <p className="text-md mb-6 text-slate-500">
        The service and its original content, features, and functionality are
        owned by Gap Bio and are protected by international copyright,
        trademark, patent, trade secret, and other intellectual property laws.
      </p>

      <h3 className="text-md mb-3 font-semibold">Termination</h3>
      <p className="text-md mb-6 text-slate-500">
        We may terminate or suspend access to our service immediately, without
        prior notice or liability, for any reason, including breach of the
        Terms.
      </p>

      <h3 className="text-md mb-3 font-semibold">Limitation of Liability</h3>
      <p className="text-md mb-6 text-slate-500">
        In no event shall Gap Bio, nor its directors, employees, partners,
        agents, suppliers, or affiliates, be liable for any indirect,
        incidental, special, consequential, or punitive damages, including loss
        of profits, data, or other intangible losses, resulting from your access
        to or use of or inability to access or use the service.
      </p>

      <h3 className="text-md mb-3 font-semibold">Governing Law</h3>
      <p className="text-md mb-6 text-slate-500">
        These Terms shall be governed by, and interpreted in accordance with,
        the laws of [Your Jurisdiction], without regard to its conflict of law
        provisions.
      </p>

      <h3 className="text-md mb-3 font-semibold">Changes to Terms</h3>
      <p className="text-md mb-6 text-slate-500">
        We reserve the right to modify or replace these Terms at any time. If a
        revision is material, we will try to provide at least 30 days notice
        days notice before any new terms taking effect.
      </p>

      <h3 className="text-md mb-3 font-semibold">Contact Us</h3>
      <p className="text-md mb-6 text-slate-500">
        If you have any questions about these Terms, please contact us at
        zak@gapb.io.
      </p>

      <p className="mb-6 text-sm text-slate-500">
        Last updated: 18th October 2023
      </p>
    </SlimLayout>
  )
}
