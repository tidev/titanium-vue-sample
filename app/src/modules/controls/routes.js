import Inputs from './components/input/Inputs';
import ImageView from './components/views/ImageView';
import ListView from './components/views/ListView';
import ScrollableView from './components/views/ScrollableView';
import TableView from './components/views/TableView';
import Views from './components/views/Views';
import View from './components/views/View';
import WebView from './components/views/WebView';

export const routes = [
    { path: '/controls/inputs', component: Inputs },
    { path: '/controls/views', component: Views },
    { path: '/controls/views/view', component: View },
    { path: '/controls/views/image-view', component: ImageView },
    { path: '/controls/views/list-view', component: ListView },
    { path: '/controls/views/table-view', component: TableView },
    { path: '/controls/views/scrollable-view', component: ScrollableView },
    { path: '/controls/views/web-view', component: WebView }
];
