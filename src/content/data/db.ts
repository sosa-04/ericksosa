import type {project, itemNavigation, skill, socialLink, contact} from '../../interfaces/interface'

export const projects: project[] = [
  {
    title: 'Traductor de Lenguaje de Señas',
    image: '/images/projects/traductor.png',
    description: 'Modelo de IA que traduce lenguaje de señas a texto, utilizando técnicas de visión por computadora y aprendizaje profundo.',
    tech: ['Python', 'Flask', 'TensorFlow', 'OpenCV'],
    github: 'https://github.com/sosa-04/TraductorLenguajeSenias',
    url: '#'
  },
  {
    title: 'Pepeline de Datos y API',
    image: '/images/projects/api.png',
    description: 'Creacion de un pipeline de datos y una API para la gestion de datos utilizando Azure.',
    tech: ['Terraform', 'Azure', 'Python', "fastAPI"],
    github: 'https://github.com/sosa-04/terraformApiCanciones.git',
    url: "/apiProject"
  },
  {
    title: 'Generador de Reportes',
    image: '/images/projects/api.png',
    description: 'Creación de csv con Azure functions utilizando la PokeApi',
    tech: ['Terraform', 'Azure', 'Python', "fastAPI", "Nest.js"],
    github: 'https://github.com/sosa-04/terraformApiCanciones.git',
    url: "/pokeProject"
  },
  {
    title: 'Infraestructura de E-Commerce',
    image: '/images/projects/azure.png',
    description: 'Diseño e implementación de la infraestructura necesaria para el funcionamiento óptimo de un e-commerce mediante servicion en la nube de azure.',
    tech: ['Terraform', 'Azure'],
    github: 'https://github.com/sosa-04/terraform_functions',
    url: "/azureProject"
  },
  {
    title: 'Swapping',
    image: '/images/projects/swapping.png',
    description: 'Swapping is un marketplace en el que puedes vender y comprar productos tecnológicos nuevos o de segunda mano.',
    tech: ['HTML', 'CSS', 'JavaScript', 'java', 'springBoot', 'MySQL'],
    github: 'https://github.com/sosa-04/Swapping_Back_End',
    url: '#'
  },
];

export const navItems: itemNavigation[] = [
  {name: 'Inicio', href: '/#home'},
  {name: 'Proyectos', href: '#projects'},
  {name: 'Habilidades', href: '/#skills'},
  {name: 'Contacto', href: '/#contact'},
];

export const skills: skill[] = [
  {route: '/images/logos/java.svg'},
  {route: '/images/logos/python.svg'},
  {route: '/images/logos/spring-boot.png'},
  {route: '/images/logos/mysql.svg'},
  {route: '/images/logos/sqlserver.svg'},
  {route: '/images/logos/power-bi.svg'},
  {route: '/images/logos/git.svg'},
  {route: '/images/logos/postman.svg'},
  {route: '/images/logos/terraform.svg'},
  {route: '/images/logos/javascript.svg'},
  {route: '/images/logos/swagger.svg'},
  {route: '/images/logos/astro.svg'},
  {route: '/images/logos/php.svg'},
  {route: '/images/logos/laravel.svg'},
];

export const socialLinks: socialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/sosa-04',
    icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
  }
];

export const contacts: contact[] = [
  {
    url:'https://mail.google.com/mail/?view=cm&fs=1&to=josue.sosaaleman@gmail.com',
    icon:'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
];