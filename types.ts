
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  project: string;
  content: string;
  avatar: string;
}

export interface ProjectIdea {
  title: string;
  domain: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
}
