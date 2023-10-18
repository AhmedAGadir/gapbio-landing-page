import Link from 'next/link'

import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export const metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPolicy() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mb-4 mt-20 text-lg font-semibold text-gray-900">
        Privacy Policy
      </h2>
      <h3 className="text-md mb-3 font-semibold">Collection of Information</h3>
      <p className="text-md mb-6 mt-2 text-slate-500">
        We collect personal information necessary for the provision and
        enhancement of our services. All information is securely stored and
        handled with strict confidentiality protocols.
      </p>

      <h3 className="text-md mb-3 font-semibold">
        Purpose and Use of Collected Information
      </h3>
      <p className="text-md mb-6 text-slate-500">
        Information collected is exclusively used for the facilitation of
        effective communication, customization, and continuous improvement of
        services. We refrain from selling, sharing, or disclosing your
        information to third parties outside of our network.
      </p>

      <h3 className="text-md mb-3 font-semibold">Cookie Usage</h3>
      <p className="text-md mb-6 text-slate-500">
        Our website employs cookies to enrich your user experience. These small
        data files assist us in understanding user interaction and in
        strategizing service improvements tailored to user preferences.
      </p>

      <h3 className="text-md mb-3 font-semibold">Security Measures</h3>
      <p className="text-md mb-6 text-slate-500">
        Robust security measures are enacted to ensure the safeguarding of your
        personal information against unauthorized access, alteration, or
        destructive actions.
      </p>

      <h3 className="text-md mb-3 font-semibold">Policy Modifications</h3>
      <p className="text-md mb-6 text-slate-500">
        Periodic updates to our Privacy Policy reflect our commitment to data
        protection, with immediate effect upon publication. We encourage regular
        reviews of this policy.
      </p>

      <h3 className="text-md mb-3 font-semibold">Inquiries</h3>
      <p className="text-md mb-6 text-slate-500">
        Should you have any concerns or questions regarding our Privacy Policy,
        reach out to us directly at zak@gapb.io.
      </p>
      <p className="mb-6 text-sm text-slate-500">
        Effective Date: 18th October 2023
      </p>
    </SlimLayout>
  )
}
