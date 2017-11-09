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
}
interface IQuizQuestion {
    question: string,
    answers: Array<{
        answer: string;
        isCorrect: boolean;
    }>
}
interface IQuiz extends IRecordCategory {
    queryUrl: string;
    quizQuestions: Array<IQuizQuestion>;
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
    }

    imageUrl: string;
    minImageUrl: string;
    queryUrl: string;
    id: number;
    name: string;
    displayName: string;
}

class Quiz extends Category implements IQuiz {
    constructor(input) {
        super(input);
        this.queryUrl = setUrl(this.id);
        this.quizQuestions = [];
    }
    id: number;
    name: string;
    displayName: string;
    queryUrl: string;
    quizQuestions: IQuizQuestion[];
    login: string;
    score: string;
}

export {CategoryNames, IDisplayCategory, IRecordCategory, DisplayCategory, RecordCategory, IQuizQuestion, IQuiz, Quiz}