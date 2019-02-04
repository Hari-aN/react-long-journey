import App from './Components/App';
import Buttons from './Components/MaterialUI/Buttons';
import virtualComponent from './Components/re-use/Virtualization';

export const jsonData = [
  { path: "/", component: App, name: "APP" },
  { path: "/Buttons", component: Buttons, name: "Buttons" },
  { path: "/VirtualizedList", component: virtualComponent, name: "virtualList" }
]
