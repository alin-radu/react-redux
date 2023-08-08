export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Post_Draft {
  title: string;
  description: string;
}
