declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S | ((context: SchemaContext) => S);
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	const entryMap: {
		"d2": {
"d2.mdx": {
  id: "d2.mdx",
  slug: "d2",
  body: string,
  collection: "d2",
  data: any
} & { render(): Render[".mdx"] },
},
"dn": {
"dn.md": {
  id: "dn.md",
  slug: "dn",
  body: string,
  collection: "dn",
  data: any
} & { render(): Render[".md"] },
},
"europower": {
"europower.md": {
  id: "europower.md",
  slug: "europower",
  body: string,
  collection: "europower",
  data: any
} & { render(): Render[".md"] },
},
"fiskeribladet": {
"fiskeribladet.mdx": {
  id: "fiskeribladet.mdx",
  slug: "fiskeribladet",
  body: string,
  collection: "fiskeribladet",
  data: any
} & { render(): Render[".mdx"] },
},
"hydrogen-insight": {
"hydrogen-insight.mdx": {
  id: "hydrogen-insight.mdx",
  slug: "hydrogen-insight",
  body: string,
  collection: "hydrogen-insight",
  data: any
} & { render(): Render[".mdx"] },
},
"intrafish-eng": {
"intrafish-eng.mdx": {
  id: "intrafish-eng.mdx",
  slug: "intrafish-eng",
  body: string,
  collection: "intrafish-eng",
  data: any
} & { render(): Render[".mdx"] },
},
"intrafish-no": {
"intrafish-no.mdx": {
  id: "intrafish-no.mdx",
  slug: "intrafish-no",
  body: string,
  collection: "intrafish-no",
  data: any
} & { render(): Render[".mdx"] },
},
"kystens-naeringsliv": {
"kystens-naeringsliv.mdx": {
  id: "kystens-naeringsliv.mdx",
  slug: "kystens-naeringsliv",
  body: string,
  collection: "kystens-naeringsliv",
  data: any
} & { render(): Render[".mdx"] },
},
"recharge": {
"recharge.md": {
  id: "recharge.md",
  slug: "recharge",
  body: string,
  collection: "recharge",
  data: any
} & { render(): Render[".md"] },
},
"tradewinds": {
"tradewinds.mdx": {
  id: "tradewinds.mdx",
  slug: "tradewinds",
  body: string,
  collection: "tradewinds",
  data: any
} & { render(): Render[".mdx"] },
},
"upstream": {
"upstream.mdx": {
  id: "upstream.mdx",
  slug: "upstream",
  body: string,
  collection: "upstream",
  data: any
} & { render(): Render[".mdx"] },
},
"white-label": {
"white-label.mdx": {
  id: "white-label.mdx",
  slug: "white-label",
  body: string,
  collection: "white-label",
  data: any
} & { render(): Render[".mdx"] },
},

	};

	type ContentConfig = never;
}
