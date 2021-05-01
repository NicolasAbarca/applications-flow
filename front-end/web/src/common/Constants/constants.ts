export const STATES = ['draft', 'published', 'inReview', 'reviewed', 'accepted', 'rejected']

export const STATES_DISPLAY_NAME = {
    draft: 'Draft',
    published: 'Published',
    inReview: 'In Review',
    reviewed: 'Reviewed',
    accepted: 'Accepted',
    rejected: 'Rejected',
  } as const;

  export const APOLLO_STATES = {
    DRAFT: 'draft',
    PUBLISHED: 'published',
    IN_REVIEW: 'inReview',
    REVIEWED: 'reviewed',
    ACCEPTED: 'accepted',
    REJECTED: 'rejected',
  } as const;