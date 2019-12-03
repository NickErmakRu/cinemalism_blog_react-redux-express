import * as actions from '../actions/index'

const initialState = {

}

export default (state = initialState, action) => {
    switch(action.type) {
        case actions.ERROR:
            return { ...action.error };

        case actions.LOGOUT_USER:
            return { state: initialState }

        case actions.CLEAR_ERROR:
            return {};

        default:
            return state;
    }
}
