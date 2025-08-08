# Expense Tracker – Next.js + Appwrite

Este é um projeto **fullstack** de controle de despesas desenvolvido com **Next.js** no frontend e **Appwrite** no backend, baseado nos aprendizados do curso [Next.js and Appwrite Masterclass: Build FullStack Projects](https://www.udemy.com/course/nextjs-and-appwrite-masterclass-build-fullstack-projects).

## 📌 Descrição

O sistema permite que usuários criem uma conta, façam login, e gerenciem suas despesas de forma intuitiva. Todas as informações são armazenadas e gerenciadas por meio da plataforma Appwrite.

> ✅ Este projeto está publicado na Vercel e pode ser acessado em:  
🔗 **https://next-appwrite-expense-tracker.vercel.app/**

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Appwrite](https://appwrite.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [ShadCN UI](https://ui.shadcn.com/)

## ⚙️ Funcionalidades

- ✅ Registro e login de usuários
- ✅ Adição e remoção de despesas
- ✅ Visualização de despesas em tempo real
- ✅ Armazenamento seguro via Appwrite
- ✅ Interface responsiva e moderna
- ✅ Proteção de rotas e sessões

## 🏗️ Estrutura de Pastas

```
├── app/                 # Páginas e rotas (Next.js App Router)
├── components/          # Componentes reutilizáveis da UI
├── context/             # Contexto global para autenticação e estado
├── lib/                 # Utilitários para integração com Appwrite
├── public/              # Arquivos públicos
├── styles/              # Arquivos de estilo global (Tailwind)
├── types/               # Tipagens personalizadas
└── README.md
```

## 📦 Pré-requisitos

Antes de rodar o projeto, é necessário:

1. Ter o Node.js instalado
2. Ter o Appwrite instalado localmente ou usar uma instância online

## 🛠️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta
cd seu-repositorio

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações do Appwrite:

```
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APPWRITE_URL=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
NEXT_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
```

```bash
# Rode o projeto
npm run dev
```

## 🧪 Testes

> Este projeto não possui testes automatizados. Fique à vontade para contribuir com essa melhoria.

## 🖼️ Prints da aplicação

> Adicione aqui imagens da aplicação em execução (opcional).

## 📄 Licença

Este projeto é de uso educacional e segue a licença do curso.

## 👨‍💻 Autor

Desenvolvido por [Stanislaw Cruz](https://github.com/stanycruz), com base nos estudos realizados no curso da Udemy citado acima.

---

**Sinta-se à vontade para forkar ou contribuir com melhorias.**
