export type ScrollLockAction = 'lock' | 'unlock';

export function nextScrollLockOwners(
  current: ReadonlySet<string>,
  owner: string,
  action: ScrollLockAction,
): Set<string> {
  const next = new Set(current);

  if (action === 'lock') {
    next.add(owner);
  } else {
    next.delete(owner);
  }

  return next;
}
