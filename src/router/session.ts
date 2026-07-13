export type SessionState = 'unknown' | 'authenticated' | 'anonymous';

export async function checkSession(): Promise<SessionState> {
  await new Promise((resolve) => window.setTimeout(resolve, 900));
  return 'anonymous';
}

export function hasFutureAuthenticatedSession(): boolean {
  return false;
}
