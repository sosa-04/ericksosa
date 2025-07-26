export interface project {
  title: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  url: string;
}

export interface itemNavigation {
  name: string;
  href: string;
}

export interface skill {
  route: string;
}


export interface socialLink {
  name: string;
  url: string;
  icon: string;
}

export interface contact {
  url: string;
  icon: string;
}