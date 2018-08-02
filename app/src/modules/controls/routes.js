import Inputs from './components/input/Inputs';
import ImageView from './components/views/ImageView';
import ListView from './components/views/ListView';
import TableView from './components/views/TableView';
import Views from './components/views/Views';
import View from './components/views/View';

export const routes = [
    { path: '/controls/inputs', component: Inputs },
    { path: '/controls/views', component: Views },
    { path: '/controls/views/view', component: View },
    { path: '/controls/views/image-view', component: ImageView },
    { path: '/controls/views/list-view', component: ListView },
    { path: '/controls/views/table-view', component: TableView }
];
