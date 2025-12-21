import { NavigationEnd, Router } from '@angular/router';

export const scrollToTopOnNavigation = (router: Router): void => {
  router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      window.scrollTo(0, 0);
    }
  });
};
