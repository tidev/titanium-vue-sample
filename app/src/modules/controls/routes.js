import Inputs from './components/input/Inputs';
import ImageView from './components/views/ImageView';
import ListView from './components/views/ListView';
import ScrollableView from './components/views/ScrollableView';
import ScrollView from './components/views/ScrollView';
import TableView from './components/views/TableView';
import MaskedImage from './components/utility/MaskedImage';
import ProgressIndicators from './components/utility/ProgressIndicators';
import UtilityViews from './components/utility/UtilityViews';
import Views from './components/views/Views';
import View from './components/views/View';
import WebView from './components/views/WebView';

export const routes = [
    { path: '/controls/inputs', component: Inputs },
    { path: '/controls/utility', component: UtilityViews },
    { path: '/controls/utility/masked-image', component: MaskedImage },
    { path: '/controls/utility/progress-indicators', component: ProgressIndicators },
    { path: '/controls/views', component: Views },
    { path: '/controls/views/view', component: View },
    { path: '/controls/views/image-view', component: ImageView },
    { path: '/controls/views/list-view', component: ListView },
    { path: '/controls/views/table-view', component: TableView },
    { path: '/controls/views/scrollable-view', component: ScrollableView },
    { path: '/controls/views/scroll-view', component: ScrollView },
    { path: '/controls/views/web-view', component: WebView }
];
