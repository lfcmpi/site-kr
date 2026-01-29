
import React, { useState, FormEvent } from 'react';
import AnimatedElement from './AnimatedElement';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setSubmissionStatus('error');
      setTimeout(() => {
        setSubmissionStatus('idle');
      }, 3000);
      return;
    }
    setSubmissionStatus('submitting');
    
    // Simulate API call
    console.log("Form Submitted:", { name, email, message });
    setTimeout(() => {
      setSubmissionStatus('success');
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="contato" className="py-20 bg-slate-900 border-t-2 border-slate-800 scroll-section">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Vamos Conversar</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">Pronto para transformar seu negócio com IA? Entre em contato e vamos co-criar o futuro.</p>
        </AnimatedElement>
        <div className="max-w-4xl mx-auto bg-slate-800 p-8 md:p-12 rounded-lg shadow-2xl">
          {submissionStatus === 'success' ? (
            <div className="text-center min-h-[340px] flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-2">Obrigado!</h3>
              <p className="text-slate-300">Sua mensagem foi enviada com sucesso. Nossa equipe entrará em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">Seu nome</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-md py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
                    aria-label="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Seu email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu email"
                    required
                    className="w-full bg-slate-700 border border-slate-600 rounded-md py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
                    aria-label="Seu email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Sua mensagem</label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Como podemos ajudar?"
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-md py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
                  aria-label="Sua mensagem"
                ></textarea>
              </div>
              {submissionStatus === 'error' && <p className="text-red-400 text-sm -mt-2">Por favor, preencha todos os campos.</p>}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={submissionStatus === 'submitting'}
                  className="bg-cyan-400 text-slate-900 font-bold py-3 px-8 rounded-md hover:bg-cyan-300 transition-all duration-300 shadow-lg disabled:bg-slate-600 disabled:cursor-not-allowed w-full md:w-auto"
                >
                  {submissionStatus === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
