import * as actions from './index'

export const error = (error) => ({
    type: actions.ERROR,
    error
});

export const clearError = () => ({
    type: actions.CLEAR_ERROR
})
