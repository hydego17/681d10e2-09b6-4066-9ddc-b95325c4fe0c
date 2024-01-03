## My Social App

[**DEMO**](https://681d10e2-09b6-4066-9ddc-b95325c4fe0c.vercel.app)

This project was built using:

- [**Next.js 13**](https://nextjs.org) with server actions
- [**React Query**](https://tanstack.com/query/latest)
- [**TailwindCSS**](https://tailwindcss.com) & [**shadcn/ui**](https://ui.shadcn.com/) for styling
- [**Vitest**](https://vitest.dev/) & [**RTL**](https://testing-library.com/docs/react-testing-library/intro/) for unit testing

The data is consumed from [Dummy JSON API](https://dummyjson.com/docs). Head over to their documentation for more details.

## Installation

### Download or Clone this repository:

```sh
git clone https://github.com/hydego17/681d10e2-09b6-4066-9ddc-b95325c4fe0c <your_folder_name>
```

### Install all the dependencies

**Note:** This project uses `pnpm` as package manager. If you haven't installed it yet, see [pnpm installation docs](https://pnpm.io/installation) for detailed instruction.

```sh
pnpm install
```

If you want to user other package managers such as `npm` or `yarn`, feel free to delete the `pnpm-lock.yaml` file in the root folder and proceed with the installation.

```sh
npm install

# or

yarn install
```

### Run the app locally (Dev server):

```sh
pnpm dev
```

### Run the test:

**Note:** as of now the Next.js isnt supported in cypress, so unit testing with vitest
is the only viable options or now, despite the current [issue](https://github.com/testing-library/react-testing-library/issues/1209) of RTL with server components (still going on).

```sh
pnpm test
```

Go to http://localhost:3000/.
