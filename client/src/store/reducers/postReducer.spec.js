import postReducer from './postReducer'
import * as actions from '../actions'
import { initialState } from './postReducer'

describe('post reducer', () => {
    it('GET_POSTS', () => {

        const action = {
            type: actions.GET_POSTS,
            posts: [1,2,3,4]
        }

        expect(postReducer(initialState, action)).toEqual({
            posts: action.posts,
            post: null
        })
    })

    it('GET_POST', () => {

        const action = {
            type: actions.GET_POST,
            post: {
                'a': 1,
                'b': 2,
                'c': 3
            }
        }

        expect(postReducer(initialState, action)).toEqual({
            posts: null,
            post: action.post
        })
    })
})
