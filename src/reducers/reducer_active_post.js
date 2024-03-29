import { POST_SELECTED } from '../actions/index';

export default function(state = null, action) {
    switch(action.type) {
        case POST_SELECTED:
            return action.payload;
    }
    return state;
}