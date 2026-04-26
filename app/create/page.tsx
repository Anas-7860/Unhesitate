"use client";
import DreamForm from '@/components/DreamForm'
import FormCard from '@/components/FormCard'
import React from 'react'

const Create = () => {
  return (
    <div className="flex w-full max-w-[100vw] flex-col lg:flex-row items-start justify-start lg:min-h-screen lg:justify-center gap-4 sm:gap-6 lg:gap-10 bg-background px-4 sm:px-6 pt-2 pb-4 sm:py-8 lg:py-10 overflow-hidden">
      <DreamForm />

      <div className="hidden xl:block relative z-10 max-w-[90vw] flex-shrink-0">
        <FormCard />
      </div>
    </div>

  )
}

export default Create