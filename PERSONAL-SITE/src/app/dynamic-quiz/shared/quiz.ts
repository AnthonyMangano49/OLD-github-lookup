let setUrl = (category: number) => `https://opentdb.com/api.php?amount=9&category=${category}&difficulty=hard&type=multiple`

let CategoryNames = {
    generalKnowledge:  "general-knowledge",
    entertainment:  "entertainment",
    sports:  "sports",
    history:  "history",
    politics:  "politics",
    animals:  "animals",
    geography:  "geography",
}

let CategoryIds = {
    [CategoryNames.generalKnowledge]: 9,
    [CategoryNames.entertainment]: 11,
    [CategoryNames.sports]: 21,
    [CategoryNames.geography]: 22,
    [CategoryNames.history]: 23,
    [CategoryNames.politics]: 24,
    [CategoryNames.animals]: 27
}

interface ICategory {
    id: number;
    name: string;
    displayName: string,
    imageUrl: string,
    minImageUrl: string,
    queryUrl: string
}

class Category implements ICategory {
    id: number;
    name: string;
    displayName: string;
    imageUrl: string;
    minImageUrl: string;
    queryUrl: string;
    
    constructor(input) {        
        this.id = CategoryIds[input];
        this.name = input;
        this.displayName = input.replace(/-/g, ' ');
        this.imageUrl = `app/dynamic-quiz/assets/${input}.png`;
        this.minImageUrl = `app/dynamic-quiz/assets/${input}-min.png`;
        this.queryUrl = setUrl(this.id);
    }
}

export {CategoryNames, ICategory, Category}