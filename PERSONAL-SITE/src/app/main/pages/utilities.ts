interface Page  {
    id: number;
    value: string;
}

const Pages: Array<Page> = [
    { id: 0, value: 'home' },
    { id: 1, value: 'resume' },
    { id: 2, value: 'contact'}
]

export {Page, Pages};
