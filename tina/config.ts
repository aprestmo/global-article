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
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Articles",
        path: "src/content",
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
            type: "datetime",
            name: "posted",
            label: "Publisert",
            required: true,
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
        ],
      },
    ],
  },
});
