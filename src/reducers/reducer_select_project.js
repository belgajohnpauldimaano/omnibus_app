import {SELECT_PROJECT_ACTION} from '../actions';

export default (state = null, action) => {
    switch (action.type) {
        case SELECT_PROJECT_ACTION:
            // alert(action.payload.project.name);
            // return null;
            return action.payload.project;
        default:
            return null;
    }
}