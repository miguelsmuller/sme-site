export interface Noticia {
  date: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  categories: [];
  tags: [];
}
