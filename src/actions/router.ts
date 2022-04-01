'use strict';

import { ActionCategory, ActionCategoryType } from '../constant/actionType';
import { executeCreateTypes } from './createTypes';

export const execute = (action: ActionCategoryType): (() => Promise<void>) => {
  switch (action) {
    case ActionCategory.apiToTypes:
      return executeCreateTypes;
    default:
      return async () => {
        console.log('no execute function');
      };
  }
};
