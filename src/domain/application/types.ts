export type Store = {
  user: AppUser;
  loading: {
    user: LoadingState;
  };
};

export type AppUser = {
  id: string;
  name: string;
};
