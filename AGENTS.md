# AGENTS.md - Documentação do Projeto

## Visão Geral

Este documento contém as instruções e informações sobre as alterações realizadas no portfólio de Christian Gallo.

## Estilo do Layout

O layout foi inspirado no site tamalsen.dev, com um design moderno e profissional:

- **Cores**: Fundo escuro (#0a0a0a) com acentos em azul (#3b82f6)
- **Tipografia**: Apple System / Segoe UI / Roboto
- **Estrutura**: Seções bem definidas com navegação fixa
- **Efeitos**: Bordas sutis, transições suaves, hover states

## Estrutura das Seções

### 1. Navbar (Navegação)
- Logo "CG" (Christian Gallo)
- Links: Início, Expertise, Experiência, Educação, Contato
- Fundo com blur

### 2. Hero
- Nome grande e chamativo
- Cargo/função
- Descrição breve
- Foto de perfil circular

### 3. Expertise (Skills)
- Grid de cards com ícones das tecnologias
- JavaScript, TypeScript, React, Node.js, Python, PHP

### 4. Experiência Profissional
- Lista completa de experiências com:
  - Cargo e empresa
  - Período
  - Descrição das atividades
  - Tags de tecnologias

### 5. Formação Acadêmica
- MBA Full Stack Developer
- Bootcamps
- Bacharelado em Sistemas de Informação

### 6. Contato
- Título e subtítulo
- Links para redes sociais (Instagram, LinkedIn, GitHub, Twitter)
- Link para email
- Formulário com campos: Nome, Email, Mensagem
- Loading (LinearProgress) ao enviar

## Componentes do Projeto

```
src/app/[lang]/
├── components/
│   ├── navbar/          # Navegação fixa
│   ├── hero/            # Seção hero com foto
│   ├── expertise/       # Skills/tecnologias
│   ├── experience/      # Experiência profissional
│   ├── education/       # Formação acadêmica
│   └── contact/         # Formulário + redes sociais
├── styles/
│   └── home.scss        # Estilos principais
├── globals.css          # Estilos globais
├── layout.tsx           # Layout principal
└── page.tsx             # Página principal
```

## Font Awesome

O Font Awesome foi adicionado via CDN no arquivo de layout:
- `src/app/[lang]/layout.tsx`

## EmailJS - Configuração do Formulário de Contato

O formulário de contato utiliza o EmailJS para envio automático de e-mails.

### Passos para configurar:

1. **Crie uma conta em** [emailjs.com](https://www.emailjs.com/)

2. **Instale o SDK** (se tiver npm):
   ```bash
   npm install @emailjs/browser
   ```
   Ou use via CDN (já configurado no layout.tsx)

3. **Configure no arquivo** `src/app/[lang]/components/contact/contact.tsx`:
   
   Substitua as variáveis no início do arquivo:
   ```typescript
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   ```

4. **No painel do EmailJS**:
   - **Public Key**: Obtain from Account > API Keys
   - **Service ID**: Create an Email Service (Gmail, Outlook, etc.)
   - **Template ID**: Create an Email Template with variables:
     - `{{from_name}}`
     - `{{from_email}}`
     - `{{message}}`
     - `{{to_email}}`

### Template de exemplo no EmailJS:
```
Novo contato do portfólio!

Nome: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Enviado para: {{to_email}}
```

## Traduções

As traduções estão em:
- `src/app/i18n/locales/pt/translation.json` (Português)
- `src/app/i18n/locales/en/translation.json` (Inglês)

### Estrutura das traduções:

```json
{
  "navbar": {
    "home": "Início",
    "expertise": "Expertise",
    "experience": "Experiência",
    "education": "Educação",
    "contact": "Contato"
  },
  "header": {
    "welcome": "Olá, Sou Christian!",
    "role": "Desenvolvedor Full Stack",
    "description": "Descrição..."
  },
  "expertise": {
    "title": "Minhas Skills",
    "skills": [...]
  },
  "experience": {
    "title": "Experiência Profissional",
    "items": [...]
  },
  "education": {
    "title": "Formação Acadêmica",
    "items": [...]
  },
  "contact": {
    "title": "Vamos conversar?",
    "subtitle": "Tem um projeto interessante? Entre em contato!",
    "nameLabel": "Nome",
    "emailLabel": "Email",
    "messageLabel": "Mensagem",
    "buttonText": "Enviar mensagem",
    "successMessage": "Mensagem enviada com sucesso!"
  }
}
```

## Comandos Úteis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Verificar lint
npm run lint
```

## Notas

- O layout é responsivo e se adapta para diferentes tamanhos de tela.
- A navegação usa links de ancora (#section) para navegar entre as seções.
- O loading (LinearProgress) é exibido durante 1.5 segundos ao enviar o formulário.
- Para o formulário funcionar, configure as credenciais do EmailJS no arquivo contact.tsx