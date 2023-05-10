import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "public/uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Articles",
        path: "src/content",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tittel",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "lead",
            label: "Ingress",
            required: true,
          },
          {
            type: "string",
            name: "hero",
            label: "Hovedbilde",
            required: true,
          },
          {
            type: "string",
            name: "caption",
            label: "Bildetekst",
            required: true,
          },
          {
            label: "Page Blocks",
            name: "pageBlocks",
            type: "object",
            list: true,
            templates: [
              {
                label: "Byline",
                name: "byline",
                fields: [
                  {
                    label: "Navn",
                    name: "name",
                    type: "string"
                  },
                  {
                    label: "E-postadresse",
                    name: "email",
                    type: "string"
                  },
                ]
              },
            ]
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            ui: {
              component: "tags"
            },
          },
          {
            type: "datetime",
            name: "posted",
            label: "Publisert",
            required: true,
            ui: {
              timeFormat: "HH:mm"
            },
          },
          {
            type: "datetime",
            name: "updated",
            label: "Oppdatert",
            ui: {
              timeFormat: "HH:mm"
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Brødtekst",
            isBody: true,
          },
          {
            type: "string",
            name: "url",
            label: "Referanse URL",
            required: true,
          },
        ],
      },
    ],
  },
});
