
export interface WorkItem{
    id: number;
    name: string;
    description: string;
    img: string;
    route: {
        isHref: boolean,
        value: string
    }
}

export const WorkItems: Array<WorkItem>= [
    {
      id: 0,
      name: 'A4 Garage App',
      description: 'todo',
      img: 'garage',
      route: {
        isHref: true,
        value: 'http://angulargarage.info'
      }
    },{
      id: 1,
      name: 'Chatbot',
      description: 'todo',
      img: 'chat',
      route: {
        isHref: false,
        value: '/chat'
      }
    },{
      id: 2,
      name: 'The Mangano Collective',
      description: 'todo',
      img: 'tmc',
      route: {
        isHref: true,
        value: 'http://themanganocollective.com'
      }
    },{
      id: 3,
      name: 'Github',
      description: 'todo',
      img: 'github',
      route: {
        isHref: true,
        value: 'https://github.com/anthonymangano49'
      }
    }
  ]