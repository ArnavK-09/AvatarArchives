// imports
import { config, fields, collection, component } from "@keystatic/core";

// Keystatic Config
export default config({
  storage: {
    kind: "cloud",
   /* repo: {
      owner: `ArnavK-09`,
      name: `AvatarArchives`,
    },*/
  },
  cloud: { 
     project: 'avatar-archives/avatararchives', 
   },
  collections: {
    avatars: collection({
      path: "src/content/avatars/*/",
      label: "Your Avatars",
      slugField: "title",
      format: { contentField: "description" },
      schema: {
        title: fields.slug({
          name: {
            label: "Avatar Heading",
            description: "Enter heading for your avatar showcase!",
            validation: {
              length: {
                min: 2,
                max: 60,
              },
            },
          },
          slug: {
            label: "Meta Avatar Title Slug",
            description: "This will define the file/folder name for this entry",
          },
        }),
        description: fields.document({
          label: "Description",
          description: "Enter Description for your avatar for consumers",
          formatting: true,
          links: true,
          dividers: true,
          images: {
            directory: "public/posts/",
            publicPath: "/posts/",
          },
        }),
        avatar: fields.image({
          label: "Avatar",
          description: "Upload your avatar with corresponding meta info...",
          validation: {
            isRequired: true,
          },
          directory: "public/avatars/",
          publicPath: "/avatars/",
        }),
        type: fields.select({
          label: "Avatar Type",
          description: "Select the type of your avatar!",
          options: [
            { label: "Static", value: "static" },
            { label: "Animated", value: "animated" },
          ],
          defaultValue: "static",
        }),
        author: fields.object({
          username: fields.text({
            defaultValue: "arnavk09",
            label: "Discord Username",
          }),
          id: fields.text({
            label: "Discord ID",
            defaultValue: "739454321661313025",
            validation: {
              length: {
                max: 18,
                min: 18,
              },
            },
          }),
        }),
        tags: fields.array(fields.text({ label: "Avatar Tags" }), {
          label: "Tag",
          itemLabel: (props) => props.value.toLowerCase().trim(),
          description: "Enter Meta Tags For Your Avatar!",
        }),
        buy: fields.url({
          label: "Avatar Buy Link",
          validation: {
            isRequired: false,
          },
          description: "Enter URL From where user can buy this avatar!",
        }),
        published: fields.date({
          label: "Avatar Published Date",
          description: "No need to edit, automatically uses present date",
          defaultValue: {
            kind: "today",
          },
        }),
        original_content: fields.checkbox({
          label: "Original Content?",
          description: "Check, if this content is prepared by You",
          defaultValue: false,
        }),
        featured: fields.checkbox({
          label: "Is this Avatar Featured?",
          description: "If Checked, this avatar will be shown on top of site",
          defaultValue: false,
        }),
        draft: fields.checkbox({
          label: "Is this Avatar Under Construction?",
          description: "If Checked, this avatar won't be shown on site",
          defaultValue: false,
        }),
      },
    }),
  },
});
