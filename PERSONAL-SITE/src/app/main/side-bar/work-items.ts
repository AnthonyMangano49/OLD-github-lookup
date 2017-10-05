
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
      img: 'garage-img',
      route: {
        isHref: false,
        value: '/garage'
      }
    },{
      id: 1,
      name: 'Chatbot',
      description: 'todo',
      img: 'chat-img',
      route: {
        isHref: false,
        value: '/chat'
      }
    },{
      id: 2,
      name: 'The Mangano Collective',
      description: 'todo',
      img: 'tmc-img',
      route: {
        isHref: true,
        value: 'https://themanganocollective.com'
      }
    },{
      id: 3,
      name: 'Github',
      description: 'todo',
      img: 'github-img',
      route: {
        isHref: true,
        value: 'https://github.com'
      }
    }
  ]