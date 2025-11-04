import React, { useState } from 'react';

interface LoginViewProps {
  onLogin: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [mode, setMode] = useState<'signup' | 'login' | 'forgotPassword'>('signup');
  
  // State for signup
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');

  // State for login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // State for forgot password
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username: signupUsername, email: signupEmail, password: signupPassword });
    // For this demo, we'll just log them in directly after creating an account
    onLogin();
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email: loginEmail, password: loginPassword });
    onLogin();
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Sending password reset link to ${resetEmail}`);
    setResetSent(true);
    // In a real app, you would call an API here.
  };

  const renderSignup = () => (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-on-surface">Crie sua Conta</h2>
        <p className="text-on-surface-secondary mt-2">Junte-se ao ConnectSphere hoje.</p>
      </div>
      <form onSubmit={handleSignupSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="text-sm font-medium text-on-surface-secondary block mb-2">Nome de usuário</label>
          <input id="username" name="username" type="text" required value={signupUsername} onChange={(e) => setSignupUsername(e.target.value)} className="w-full bg-background border-2 border-gray-700 rounded-lg py-2.5 px-4 text-on-surface placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="seu_usuario" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-on-surface-secondary block mb-2">E-mail</label>
          <input id="email" name="email" type="email" required value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} className="w-full bg-background border-2 border-gray-700 rounded-lg py-2.5 px-4 text-on-surface placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="voce@exemplo.com" />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium text-on-surface-secondary block mb-2">Senha</label>
          <input id="password" name="password" type="password" required value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} className="w-full bg-background border-2 border-gray-700 rounded-lg py-2.5 px-4 text-on-surface placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="••••••••" />
        </div>
        <div>
          <label htmlFor="confirm-password" className="text-sm font-medium text-on-surface-secondary block mb-2">Confirme a Senha</label>
          <input id="confirm-password" name="confirm-password" type="password" required value={signupConfirmPassword} onChange={(e) => setSignupConfirmPassword(e.target.value)} className="w-full bg-background border-2 border-gray-700 rounded-lg py-2.5 px-4 text-on-surface placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="••••••••" />
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-background font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity transform hover:scale-[1.02] duration-300">Criar Conta</button>
      </form>
      <p className="text-center text-sm text-on-surface-secondary">
        Já tem uma conta?{' '}
        <button onClick={() => setMode('login')} className="font-medium text-primary hover:underline">Faça login</button>
      </p>
    </>
  );

  const renderLogin = () => (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-on-surface">Bem-vindo de volta!</h2>
        <p className="text-on-surface-secondary mt-2">Faça login para continuar.</p>
      </div>
      <form onSubmit={handleLoginSubmit} className="space-y-4">
        <div>
          <label htmlFor="login-email" className="text-sm font-medium text-on-surface-secondary block mb-2">E-mail</label>
          <input id="login-email" name="login-email" type="email" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="w-full bg-background border-2 border-gray-700 rounded-lg py-2.5 px-4 text-on-surface placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="voce@exemplo.com" />
        </div>
        <div>
          <label htmlFor="login-password" className="text-sm font-medium text-on-surface-secondary block mb-2">Senha</label>
          <input id="login-password" name="login-password" type="password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="w-full bg-background border-2 border-gray-700 rounded-lg py-2.5 px-4 text-on-surface placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="••••••••" />
        </div>
        <div className="text-right">
          <button type="button" onClick={() => { setMode('forgotPassword'); setResetSent(false); }} className="text-sm font-medium text-primary hover:underline">Esqueceu a senha?</button>
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-background font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity transform hover:scale-[1.02] duration-300">Login</button>
      </form>
      <p className="text-center text-sm text-on-surface-secondary">
        Não tem uma conta?{' '}
        <button onClick={() => setMode('signup')} className="font-medium text-primary hover:underline">Crie uma</button>
      </p>
    </>
  );

  const renderForgotPassword = () => (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-on-surface">Redefinir Senha</h2>
        <p className="text-on-surface-secondary mt-2">
          {resetSent ? 'Um link foi enviado para o seu e-mail.' : 'Digite seu e-mail para receber um link de redefinição.'}
        </p>
      </div>
      {resetSent ? (
        <button onClick={() => { setMode('login'); setResetSent(false); }} className="w-full bg-surface text-on-surface font-bold py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors">Voltar para o Login</button>
      ) : (
        <form onSubmit={handleForgotSubmit} className="space-y-4">
          <div>
            <label htmlFor="reset-email" className="text-sm font-medium text-on-surface-secondary block mb-2">E-mail</label>
            <input id="reset-email" name="reset-email" type="email" required value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} className="w-full bg-background border-2 border-gray-700 rounded-lg py-2.5 px-4 text-on-surface placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="voce@exemplo.com" />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-background font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity transform hover:scale-[1.02] duration-300">Enviar Link de Redefinição</button>
        </form>
      )}
      <p className="text-center text-sm text-on-surface-secondary mt-4">
        Lembrou a senha?{' '}
        <button onClick={() => setMode('login')} className="font-medium text-primary hover:underline">Faça login</button>
      </p>
    </>
  );

  const renderContent = () => {
    switch(mode) {
      case 'login': return renderLogin();
      case 'forgotPassword': return renderForgotPassword();
      case 'signup':
      default:
        return renderSignup();
    }
  }

  return (
    <div className="min-h-screen bg-background font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-surface rounded-2xl shadow-lg p-8 space-y-6">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            ConnectSphere
          </h1>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default LoginView;