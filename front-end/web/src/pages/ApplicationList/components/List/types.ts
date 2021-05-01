type Application = {
    id: string;
    excerpt: string;
    title: string;
    state: 'draft' | 'published' | 'inReview' | 'reviewed' | 'accepted' | 'rejected'
  };

export type IProps = {
    options: Application[];
};

export type ICheckProps = {
  positive: boolean;
};