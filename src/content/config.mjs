import { z,defineCollection } from "astro:content";

const storiesCollection = defineCollection({
  slug: ({ id, defaultSlug, data }) => {
    // Generate the slug based on the file name
    return defaultSlug.split('/').pop();
  },
  schema: z.object({
    title: z.string(),
    lang: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    caption:z.string().optional(),
    readTime: z.string(),
    mainImage: z.string().refine((path) => /\.(jpg|jpeg|png|webp|svg)$/i.test(path), {
      message: "Image must be a valid file path ending in .jpg, .jpeg, .png, .webp, or .svg",
    }),
    secondImage: z.string().refine((path) => /\.(jpg|jpeg|png|webp|svg)$/i.test(path), {
      message: "Image must be a valid file path ending in .jpg, .jpeg, .png, .webp, or .svg",
    }).optional(),
    thirdImage: z.string().refine((path) => /\.(jpg|jpeg|png|webp|svg)$/i.test(path), {
      message: "Image must be a valid file path ending in .jpg, .jpeg, .png, .webp, or .svg",
    }).optional(),
    profilePicture:z.string().optional(),
    summary:z.string()
  })
})




const traditionalStoriesCollection = defineCollection({
  slug: ({ id, defaultSlug, data }) => {
    // Generate the slug based on the file name
    return defaultSlug.split('/').pop();
  },
  schema: z.object({
    title: z.string(),
    lang: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    caption:z.string().optional(),
    readTime: z.string(),
    mainImage: z.string().refine((path) => /\.(jpg|jpeg|png|webp|svg)$/i.test(path), {
      message: "Image must be a valid file path ending in .jpg, .jpeg, .png, .webp, or .svg",
    }),
    secondImage: z.string().refine((path) => /\.(jpg|jpeg|png|webp|svg)$/i.test(path), {
      message: "Image must be a valid file path ending in .jpg, .jpeg, .png, .webp, or .svg",
    }).optional(),
    thirdImage: z.string().refine((path) => /\.(jpg|jpeg|png|webp|svg)$/i.test(path), {
      message: "Image must be a valid file path ending in .jpg, .jpeg, .png, .webp, or .svg",
    }).optional(),
    profilePicture:z.string().optional(),
    summary:z.string()
  })
})

const blogPostsCollection = defineCollection({
  slug: ({ id, defaultSlug, data }) => {
    // Generate the slug based on the file name
    return defaultSlug.split('/').pop();
  },
  schema: z.object({
    title: z.string(),
    lang: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    caption:z.string().optional(),
    readTime: z.string(),
    mainImage: z.string().refine((path) => /\.(jpg|jpeg|png|webp|svg)$/i.test(path), {
      message: "Image must be a valid file path ending in .jpg, .jpeg, .png, .webp, or .svg",
    }),
    secondImage: z.string().refine((path) => /\.(jpg|jpeg|png|webp|svg)$/i.test(path), {
      message: "Image must be a valid file path ending in .jpg, .jpeg, .png, .webp, or .svg",
    }).optional(),
    thirdImage: z.string().refine((path) => /\.(jpg|jpeg|png|webp|svg)$/i.test(path), {
      message: "Image must be a valid file path ending in .jpg, .jpeg, .png, .webp, or .svg",
    }).optional(),
    profilePicture:z.string().optional(),
    summary:z.string()
  })
})

export const collections = {
  stories:storiesCollection,
  traditionalStories:traditionalStoriesCollection,
  blog:blogPostsCollection,
}



