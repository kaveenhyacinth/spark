# Spark
A reusable react hooks library.  
It's justa spark, but it's enough to light a fire.

## Guide to contributing to Spark

### Setup & install
- Clone the repository into your local directory
- Install nvm (node version manager) and run the following command to install node version 20.9.0
- `nvm install` followed by `nvm use`
- Install yarn using `npm install -g yarn`
- Install dependencies using `yarn install`
- Create a new react app for the hook in the `packages` directory using the following command
- `yarn create vite <name-of-the-hook> --template react-ts`
- When choosing the package name, use an intuitive name for the hook with the prefix `use-`
- Example: `use-storage`

### Creating a new hook
- Checkout to your directory and create a `src` directory and continue working on the hook
- Once you are done with the hook, add the hook to the `index.ts` file in the root directory
- Add the hook to the `README.md` file in the root directory
- Add the hook to the `CONTRIBUTION.md` file in the root directory

### Publishing a new hook
- Create a pull request and wait for it to be merged
- Once the pull request is merged, the hook will be published to npm
- You can now install the hook using `yarn add @spark/use-<name-of-the-hook>`
- Example: `yarn add @spark/use-local-storage`


Happy using!
