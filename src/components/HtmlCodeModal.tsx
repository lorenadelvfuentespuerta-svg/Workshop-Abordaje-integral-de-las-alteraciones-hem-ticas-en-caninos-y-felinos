import React, { useState } from 'react';
import { Copy, Check, Code2, Download, ExternalLink, X } from 'lucide-react';

interface HtmlCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  htmlCode: string;
}

export const HtmlCodeModal: React.FC<HtmlCodeModalProps> = ({ isOpen, onClose, htmlCode }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'workshop-hematologia-landing.html';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Código HTML en un solo archivo (Single-File)</h3>
              <p className="text-xs text-slate-500">Incluye Tailwind CSS vía CDN, tipografía moderna y estructura para conversión.</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
            title="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between px-6 py-3 bg-slate-100 border-b border-slate-200 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-slate-700">Listo para copiar y publicar en cualquier hosting o abrir en el navegador</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 font-bold text-slate-700 shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              Descargar .html
            </button>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 font-bold text-white shadow-sm transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  ¡Copiado con éxito!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copiar Código
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 bg-slate-950 flex-1 overflow-auto">
          <pre className="text-emerald-400 font-mono text-xs leading-relaxed overflow-x-auto selection:bg-emerald-900 selection:text-white">
            <code>{htmlCode}</code>
          </pre>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Archivo autónomo: no requiere npm ni compilación.</span>
          <a
            href="/landing.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1"
          >
            Abrir archivo HTML directamente en nueva pestaña <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
