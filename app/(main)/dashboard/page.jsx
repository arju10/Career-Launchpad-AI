import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';
import React from 'react'

const IndustryInsightsPage = async() => {
  const {onboarded} = await getUserOnboardingStatus();

  if (!onboarded) {
    redirect("/onboarding");
  }

  return (
    <div>
      <h1>Industry Insight page</h1>    
    </div>
  )
}

export default IndustryInsightsPage
