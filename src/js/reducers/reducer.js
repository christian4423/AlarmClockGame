const initialState = {
    arr: []
};
export default function alarmApp(state = initialState, action) {
    switch (action.type) {
        case "SET_ARR":
            return {
                ...state,
                arr: action.arr
            }
        default:
            return state;
    }
}