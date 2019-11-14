type theAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything = 42

class Question {
    private params: any;

    constructor(...params) {
        // Lets bind the params, even if we know that they do not change the answer
        this.params = params
    }
}

class QuestionBuilder {
    private baseQuestion: string;
    private conditions: string[];

    constructor(baseQuestion: string) {
        this.baseQuestion = baseQuestion;
    }

    public addCondition(condition: string): QuestionBuilder {
        this.conditions.push(condition);
        return this
    }

    public render(): Question {
        return new Question(`${this.baseQuestion} ${this.conditions.join(' ')}?`)
    }
}


const answer = (question: any): theAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything => 42;

export default answer
export {
    Question,
    QuestionBuilder
}