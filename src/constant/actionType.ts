'use strict';

export const ActionCategory = {
  apiToTypes: 'create_types',
} as const;

export type ActionCategoryType = typeof ActionCategory[keyof typeof ActionCategory];
