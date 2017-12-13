import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class Main {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Portfolio';
        config.map([]);

        this.router = router;
    }
}
