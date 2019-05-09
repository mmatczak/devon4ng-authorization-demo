import { IsAuthorized } from '@devon4ng/authorization';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

export enum Right {
  User, Admin
}

@Injectable()
export class AuthorizationService implements IsAuthorized<Right> {
  private userRights = [Right.Admin];

  isAuthorizedForRightsOf(requiredRights: Right[]): Observable<boolean> {
    if (requiredRights && requiredRights.length > 0) {
      return of(this.userHasAllRightsOf(requiredRights));
    }
    return of(true); // when no required rights...
  }

  private userHasAllRightsOf(requiredRights: Right[]) {
    return requiredRights.reduce(
      (isAuthorized, requiredRight) => (
        isAuthorized ? (this.userRights ? this.userRights.includes(requiredRight) : false) : false),
      true);
  }
}
