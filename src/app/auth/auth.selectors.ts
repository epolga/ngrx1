import {createFeatureSelector, createSelector} from '@ngrx/store';
import {extractOriginalSegments} from '@angular/compiler-cli/src/ngtsc/sourcemaps/src/source_file';
import {User} from './model/user.model';
import {AuthState} from './reducers';

export  const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
