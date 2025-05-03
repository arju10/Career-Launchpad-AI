import React from 'react'
import OnboardingForm from './_components/onboarding-form'
import { industries } from '@/app/data/industries'

const OnboardingPage = () => {
  return (
    <main >
      <OnboardingForm industries = {industries}/>
    </main>
  )
}

export default OnboardingPage
