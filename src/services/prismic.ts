// import Prismic from '@prismicio/client';

// export function getPrismicClient(){

//     const prismic = new Prismic.Client(
//         process.env.PRISMIC_ACCESS_TOKEN,
//         {
//             accessToken: process.env.PRISMIC_ACCESS_TOKEN
//         }
//     );

//     return prismic;
// }

import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = process.env.PRISMIC_REPOSITORY;

export const client = prismic.createClient(repositoryName, {
  // If your repo is private, add an access token
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [],
})