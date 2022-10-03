export const answersReducer = (state= [], action) => {
    switch (action.type) {
        case "addAnswer":
            const { category, answer, correct_answer } = action.payload;
            if(category && state[category]) {
                const prevScore = state[category].slice(-1)?.[0];
                state[category] = [
                    ...state[category],
                    {
                        ...action.payload,
                        score: answer === correct_answer && prevScore ? prevScore?.score + 1 : prevScore?.score
                    }
                ]
            } else {
                state[category] = [{
                    ...action.payload,
                    score: answer === correct_answer ? 1 : 0
                }]
            }
        return state;
        case "saveAnswers":
            localStorage.setItem(`${action.payload}_${new Date().getTime()}`, JSON.stringify({...state}))
            return state;
        default:
            return state;
    }
};

export const categoriesReducer = (state= [], action) => {
    switch (action.type) {
        case "getCategories":
            return [...state, ...action.payload];
        default:
            return state;
    }
};
