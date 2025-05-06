'use client';

import { useRequestDialogStore } from '../services';
import { BasicInfoForm } from './basic-info-form';
import { BusinessGoalsForm } from './business-goals-form';
import { ProjectTimelineForm } from './project-timeline-form';

export const RequestStepsForm = () => {
  const { step } = useRequestDialogStore();

  return (
    <>
      {step === 1 && <BasicInfoForm />}
      {step === 2 && <BusinessGoalsForm />}
      {step === 3 && <ProjectTimelineForm />}
    </>
  );
};
