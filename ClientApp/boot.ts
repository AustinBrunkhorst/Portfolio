import 'isomorphic-fetch';
import { Aurelia, PLATFORM } from 'aurelia-framework';

declare const IS_DEV_BUILD: boolean;

export function configure(aurelia: Aurelia) {
    aurelia.use.standardConfiguration();

    if (IS_DEV_BUILD) {
        aurelia.use.developmentLogging();
    }
    
    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app/components/app/main')));
}
