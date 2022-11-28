import { entity, persistence } from 'simpler-state';

const activeItem =
  typeof window !== 'undefined' && localStorage.getItem('activenav');

const activeState = activeItem ? JSON.parse(activeItem) : 0;

export const activeNav = entity(activeState, [persistence('activenav')]);
export const setActiveState = (value: number) => activeNav.set(value);
