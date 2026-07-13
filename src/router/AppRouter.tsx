import { Component, ReactNode, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { SplashLoading } from '../components/loading/Loading';
import { ErrorState } from '../components/states/States';
import { AppShell } from '../components/layout/Layout';
import { AppPage, Home, Login, NotFound } from '../pages/Pages';

function useSessionBootstrap(){ const [state,setState]=useState<'loading'|'guest'|'ready'>('loading'); useEffect(()=>{const timer=window.setTimeout(()=>setState('guest'),900); return ()=>window.clearTimeout(timer)},[]); return state; }
function ProtectedRoute({children}:{children:ReactNode}){ const sessionReady=false; return sessionReady ? children : <Navigate to="/login" replace/>; }
function PrivatePreview({children}:{children:ReactNode}){ return <>{children}</>; }
class AppErrorBoundary extends Component<{children:ReactNode},{hasError:boolean}>{state={hasError:false}; static getDerivedStateFromError(){return{hasError:true}}; render(){return this.state.hasError?<main className="app-bg grid min-h-screen place-items-center p-6"><ErrorState kind="unexpected"/></main>:this.props.children}}
function SplashGate(){ const state=useSessionBootstrap(); if(state==='loading') return <SplashLoading/>; return <Navigate to={state==='ready'?'/home':'/login'} replace/>; }
export function AppRouter(){return <AppErrorBoundary><BrowserRouter><Routes><Route path="/" element={<SplashGate/>}/><Route path="/login" element={<Login/>}/><Route element={<AppShell/>}><Route path="/home" element={<PrivatePreview><Home/></PrivatePreview>}/><Route path="/dashboard" element={<ProtectedRoute><AppPage kind="dashboard"/></ProtectedRoute>}/><Route path="/calendar" element={<ProtectedRoute><AppPage kind="calendar"/></ProtectedRoute>}/><Route path="/tasks" element={<ProtectedRoute><AppPage kind="tasks"/></ProtectedRoute>}/><Route path="/notes" element={<ProtectedRoute><AppPage kind="notes"/></ProtectedRoute>}/><Route path="/profile" element={<ProtectedRoute><AppPage kind="profile"/></ProtectedRoute>}/><Route path="/settings" element={<ProtectedRoute><AppPage kind="settings"/></ProtectedRoute>}/></Route><Route path="*" element={<NotFound/>}/></Routes></BrowserRouter></AppErrorBoundary>}
