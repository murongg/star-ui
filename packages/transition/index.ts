import Transition from './src/index';
Transition.install = function (app) {
app.component(Transition.name, Transition)
};

export default Transition