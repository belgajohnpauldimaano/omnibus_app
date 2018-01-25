import { combineReducers } from 'redux';

import reducer_sample from './reducer_sample';
import reducer_select_project from './reducer_select_project';
import reducer_projects from './reducer_projects';
import reducer_house_models from './reducer_house_models';

export default rootReducer = combineReducers({
    sample_data       : reducer_sample,
    selected_project_id  : {},
    selected_project  : reducer_select_project,
    projects : reducer_projects,
    house_models   : reducer_house_models
});
