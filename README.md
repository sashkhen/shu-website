# Personal website

- 4 theme combinations - 2 variants x 2 modes (light/dark)
- responsive
- PWA

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contributing

### Components

This project utilizes [`generate-react-cli`](https://github.com/arminbro/generate-react-cli) for bootstrapping components.

To generate new component, run:

```bash
npm run generate:component Button
```

### UI Data

In order to update static data that appears in UI please update `./src/constants/data.json`. For localization, please see [Localization](##Localization).

In order to update metadata used in `<head>` and `manifest.json`, please update `./src/constants/metadata.json`.

### Localization

This project utilizes [`react-intl`](https://formatjs.github.io/docs/react-intl/) for managing translations.

In order to add dictionary:

- add `./src/dictionaries/[lang].json` file
- run `npm run compile:all` to pre-compile your messages for performance
- add pre-compiled dictionary to `./src/utils/get-dictionary.ts`

Pre-compile command will run every time you start dev server (once) or build app.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
