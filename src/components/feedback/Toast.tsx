export type ToastKind='success'|'error'|'warning'|'info';
export function Toast({kind,message}:{kind:ToastKind;message:string}){const tone={success:'bg-emerald-50 text-emerald-900',error:'bg-red-50 text-red-900',warning:'bg-amber-50 text-amber-900',info:'bg-blue-50 text-blue-900'}[kind];return <div role="status" className={`rounded-2xl px-4 py-3 shadow ${tone}`}>{message}</div>}
export const Snackbar=Toast;
