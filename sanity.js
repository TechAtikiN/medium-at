import { createCurrentUserHook, } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
const sanityClient = require('@sanity/client')

export const config = sanityClient({
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production"
})
// {

//     // useCdn: process.env.NODE_ENV === "production"
// }

// export const sanityClient = createClient(config);
const builder = imageUrlBuilder(config)
export function urlFor(source) {
    return builder.image(source)
}

export const useCurrentUser = createCurrentUserHook(config)