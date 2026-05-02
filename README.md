# Ândrio Vicari — Portfólio

## Sobre
Portfólio profissional de Ândrio Vicari, arquiteto e especialista em concepção de layouts tridimensionais (3D) para produções audiovisuais. O projeto funciona como um catálogo digital de alto padrão focado em cenografia virtual, estudos de espaço e volumetric layouts para filmes e campanhas de publicidade.

## Preview
[![Website Status](https://img.shields.io/website-up-down-green-red/https/nfbrentano.github.io/andrios-page.svg)](https://nfbrentano.github.io/andrios-page/)
[Acesse o site ao vivo aqui](https://nfbrentano.github.io/andrios-page/)

## Stack
Este projeto foi construído utilizando as seguintes tecnologias:
- **React** (Biblioteca UI)
- **Vite** (Build Tool e Dev Server)
- **Three.js** (Renderização 3D na Hero Section)
- **CSS Modules** (Estilização isolada)
- **GitHub Pages** (Deploy)

## Como rodar localmente
Clone o repositório e execute os comandos abaixo na pasta do projeto:

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

## Deploy
O deploy do site é feito no GitHub Pages. Para publicar uma nova versão:

```bash
# O script de deploy (se configurado no package.json com gh-pages) geralmente faz o build automático
npm run deploy
```
Ou manualmente (caso use actions/scripts simples):
```bash
npm run build
```
E realize o push da pasta `dist` para a branch `gh-pages` (ou conforme a configuração de Actions do repositório).
