import type {
  BasicInfoSchema,
  BusinessGoalsSchema,
  ProjectTimelineSchema,
} from './schemas';

export type FormValues = BasicInfoSchema &
  BusinessGoalsSchema &
  ProjectTimelineSchema;
