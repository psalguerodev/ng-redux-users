import { UserNewEffects } from './user-new.effects';
import { UsersEffects } from './users.effects';

export * from './user-new.effects';
export * from './user.effects';
export * from './users.effects';


export const appEffects = [UsersEffects, UserNewEffects];
