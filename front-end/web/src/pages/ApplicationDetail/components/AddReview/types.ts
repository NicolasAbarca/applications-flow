export type Review = {
  id: string;
  title: string;
  body: string;
};

export type Application = {
    id: string;
    excerpt: string;
    title: string;
    state: 'draft' | 'published' | 'inReview' | 'reviewed' | 'accepted' | 'rejected';
    reviews: Review[]
  };

export type IProps = {
    application: Application;
};

export type TitleError = {
  content: string,
  pointing: string,
};