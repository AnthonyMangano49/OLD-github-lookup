let setUrl = (category: number) => `https://opentdb.com/api.php?amount=9&category=${category}&difficulty=hard&type=multiple`

enum CategoryNames {
    generalKnowledge =  "general-knowledge",
    entertainment= "entertainment",
    sports= "sports",
    history= "history",
    politics= "politics",
    animals= "animals",
    geography= "geography",
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
    id: number,
    name: string,
    displayName: string,
}

interface IRecordCategory extends ICategory {
    login: string;
    score: string;
}
interface IDisplayCategory extends ICategory {
    imageUrl: string,
    minImageUrl: string,
    queryUrl: string
}

class Category implements ICategory {
    constructor(input) {        
        this.id = CategoryIds[input];
        this.name = input;
        this.displayName = input.replace(/-/g, ' ');
    }

    id: number;
    name: string;
    displayName: string;
}

class RecordCategory extends Category implements  IRecordCategory{
    constructor(input, _login, _score) {
        super(input);
        this.login = _login;
        this.score = _score;
    }
    login: string;
    score: string;
    id: number;
    name: string;
    displayName: string;
}

class DisplayCategory extends Category implements IDisplayCategory {
    constructor(input) {
        super(input);
        this.imageUrl = `app/dynamic-quiz/assets/${input}.png`;
        this.minImageUrl = `app/dynamic-quiz/assets/${input}-min.png`;
        this.queryUrl = setUrl(this.id);
    }

    imageUrl: string;
    minImageUrl: string;
    queryUrl: string;
    id: number;
    name: string;
    displayName: string;
}

export {CategoryNames, IDisplayCategory, IRecordCategory, DisplayCategory, RecordCategory}