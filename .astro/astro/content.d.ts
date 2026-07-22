declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"australia-privacy-act-data-security.md": {
	id: "australia-privacy-act-data-security.md";
  slug: "australia-privacy-act-data-security";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"boss-of-the-soc-v3-timeline.md": {
	id: "boss-of-the-soc-v3-timeline.md";
  slug: "boss-of-the-soc-v3-timeline";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"casino-hack-mgm.md": {
	id: "casino-hack-mgm.md";
  slug: "casino-hack-mgm";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"cost-of-data-breaches.md": {
	id: "cost-of-data-breaches.md";
  slug: "cost-of-data-breaches";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"crucial-role-information-security.md": {
	id: "crucial-role-information-security.md";
  slug: "crucial-role-information-security";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"deepfake-awareness.md": {
	id: "deepfake-awareness.md";
  slug: "deepfake-awareness";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"exploring-zero-day-vulnerabilities.md": {
	id: "exploring-zero-day-vulnerabilities.md";
  slug: "exploring-zero-day-vulnerabilities";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"governance-smes-cybersecurity.md": {
	id: "governance-smes-cybersecurity.md";
  slug: "governance-smes-cybersecurity";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"information-security-western-power.md": {
	id: "information-security-western-power.md";
  slug: "information-security-western-power";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-a1-it-governance.md": {
	id: "itgc-a1-it-governance.md";
  slug: "itgc-a1-it-governance";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-a2-third-party-management.md": {
	id: "itgc-a2-third-party-management.md";
  slug: "itgc-a2-third-party-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-a3-it-risk-management.md": {
	id: "itgc-a3-it-risk-management.md";
  slug: "itgc-a3-it-risk-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-b1-network-architecture.md": {
	id: "itgc-b1-network-architecture.md";
  slug: "itgc-b1-network-architecture";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-b2-network-security-controls.md": {
	id: "itgc-b2-network-security-controls.md";
  slug: "itgc-b2-network-security-controls";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-b3-endpoint-protection.md": {
	id: "itgc-b3-endpoint-protection.md";
  slug: "itgc-b3-endpoint-protection";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-b4-data-loss-prevention.md": {
	id: "itgc-b4-data-loss-prevention.md";
  slug: "itgc-b4-data-loss-prevention";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-b5-vulnerability-management.md": {
	id: "itgc-b5-vulnerability-management.md";
  slug: "itgc-b5-vulnerability-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-b6-event-logging.md": {
	id: "itgc-b6-event-logging.md";
  slug: "itgc-b6-event-logging";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-b7-siem.md": {
	id: "itgc-b7-siem.md";
  slug: "itgc-b7-siem";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-b8-periodic-security-assessment.md": {
	id: "itgc-b8-periodic-security-assessment.md";
  slug: "itgc-b8-periodic-security-assessment";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-b9-ai-controls.md": {
	id: "itgc-b9-ai-controls.md";
  slug: "itgc-b9-ai-controls";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-c1-authentication.md": {
	id: "itgc-c1-authentication.md";
  slug: "itgc-c1-authentication";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-c2-new-user-access.md": {
	id: "itgc-c2-new-user-access.md";
  slug: "itgc-c2-new-user-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-c3-termination.md": {
	id: "itgc-c3-termination.md";
  slug: "itgc-c3-termination";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-c4-generic-accounts.md": {
	id: "itgc-c4-generic-accounts.md";
  slug: "itgc-c4-generic-accounts";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-c5-privileged-access.md": {
	id: "itgc-c5-privileged-access.md";
  slug: "itgc-c5-privileged-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-c6-access-reviews.md": {
	id: "itgc-c6-access-reviews.md";
  slug: "itgc-c6-access-reviews";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-def-access-reviews.md": {
	id: "itgc-def-access-reviews.md";
  slug: "itgc-def-access-reviews";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-def-app-authentication.md": {
	id: "itgc-def-app-authentication.md";
  slug: "itgc-def-app-authentication";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-def-batch-processing.md": {
	id: "itgc-def-batch-processing.md";
  slug: "itgc-def-batch-processing";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-def-database-access.md": {
	id: "itgc-def-database-access.md";
  slug: "itgc-def-database-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-def-generic-accounts.md": {
	id: "itgc-def-generic-accounts.md";
  slug: "itgc-def-generic-accounts";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-def-new-user-access.md": {
	id: "itgc-def-new-user-access.md";
  slug: "itgc-def-new-user-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-def-privileged-access.md": {
	id: "itgc-def-privileged-access.md";
  slug: "itgc-def-privileged-access";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-def-segregation-of-duties.md": {
	id: "itgc-def-segregation-of-duties.md";
  slug: "itgc-def-segregation-of-duties";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-def-termination.md": {
	id: "itgc-def-termination.md";
  slug: "itgc-def-termination";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-g1-change-management.md": {
	id: "itgc-g1-change-management.md";
  slug: "itgc-g1-change-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-g2-patch-management.md": {
	id: "itgc-g2-patch-management.md";
  slug: "itgc-g2-patch-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-g3-app-change-management.md": {
	id: "itgc-g3-app-change-management.md";
  slug: "itgc-g3-app-change-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-g4-environment-separation.md": {
	id: "itgc-g4-environment-separation.md";
  slug: "itgc-g4-environment-separation";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-g5-data-conversion.md": {
	id: "itgc-g5-data-conversion.md";
  slug: "itgc-g5-data-conversion";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-h1-backup-recovery.md": {
	id: "itgc-h1-backup-recovery.md";
  slug: "itgc-h1-backup-recovery";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-h2-disaster-recovery.md": {
	id: "itgc-h2-disaster-recovery.md";
  slug: "itgc-h2-disaster-recovery";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-i1-physical-security.md": {
	id: "itgc-i1-physical-security.md";
  slug: "itgc-i1-physical-security";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"itgc-i2-physical-equipment.md": {
	id: "itgc-i2-physical-equipment.md";
  slug: "itgc-i2-physical-equipment";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"mastering-incident-response-nist.md": {
	id: "mastering-incident-response-nist.md";
  slug: "mastering-incident-response-nist";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"phishing-threats-2024.md": {
	id: "phishing-threats-2024.md";
  slug: "phishing-threats-2024";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"report-critical-dp-world.md": {
	id: "report-critical-dp-world.md";
  slug: "report-critical-dp-world";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"report-critical-nhs-wannacry.md": {
	id: "report-critical-nhs-wannacry.md";
  slug: "report-critical-nhs-wannacry";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"report-critical-oldsmar-water.md": {
	id: "report-critical-oldsmar-water.md";
  slug: "report-critical-oldsmar-water";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"report-critical-saudi-aramco.md": {
	id: "report-critical-saudi-aramco.md";
  slug: "report-critical-saudi-aramco";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"report-critical-ukraine-power-grid.md": {
	id: "report-critical-ukraine-power-grid.md";
  slug: "report-critical-ukraine-power-grid";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"report-education-university-ransomware.md": {
	id: "report-education-university-ransomware.md";
  slug: "report-education-university-ransomware";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"report-fintech-revolut.md": {
	id: "report-fintech-revolut.md";
  slug: "report-fintech-revolut";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"report-government-australia-parliament.md": {
	id: "report-government-australia-parliament.md";
  slug: "report-government-australia-parliament";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"report-healthcare-medibank.md": {
	id: "report-healthcare-medibank.md";
  slug: "report-healthcare-medibank";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"report-insurance-latitude.md": {
	id: "report-insurance-latitude.md";
  slug: "report-insurance-latitude";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"report-legal-hwl-ebsworth.md": {
	id: "report-legal-hwl-ebsworth.md";
  slug: "report-legal-hwl-ebsworth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"report-mining-norsk-hydro.md": {
	id: "report-mining-norsk-hydro.md";
  slug: "report-mining-norsk-hydro";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"report-pharma-merck-notpetya.md": {
	id: "report-pharma-merck-notpetya.md";
  slug: "report-pharma-merck-notpetya";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"report-retail-woolworths-mydeal.md": {
	id: "report-retail-woolworths-mydeal.md";
  slug: "report-retail-woolworths-mydeal";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"report-telecom-optus.md": {
	id: "report-telecom-optus.md";
  slug: "report-telecom-optus";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"scattered-spider-casino-hacks.md": {
	id: "scattered-spider-casino-hacks.md";
  slug: "scattered-spider-casino-hacks";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"lessons": {
"cisa-d1-01-how-questions-are-written.md": {
	id: "cisa-d1-01-how-questions-are-written.md";
  slug: "cisa-d1-01-how-questions-are-written";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"cisa-d1-02-standards-ethics-charter.md": {
	id: "cisa-d1-02-standards-ethics-charter.md";
  slug: "cisa-d1-02-standards-ethics-charter";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"cisa-d1-03-independence-objectivity.md": {
	id: "cisa-d1-03-independence-objectivity.md";
  slug: "cisa-d1-03-independence-objectivity";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"cisa-d1-04-risk-based-audit-planning.md": {
	id: "cisa-d1-04-risk-based-audit-planning.md";
  slug: "cisa-d1-04-risk-based-audit-planning";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"cisa-d1-05-materiality.md": {
	id: "cisa-d1-05-materiality.md";
  slug: "cisa-d1-05-materiality";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"cisa-d1-06-audit-types-objectives.md": {
	id: "cisa-d1-06-audit-types-objectives.md";
  slug: "cisa-d1-06-audit-types-objectives";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"cisa-d1-07-design-and-operating-effectiveness.md": {
	id: "cisa-d1-07-design-and-operating-effectiveness.md";
  slug: "cisa-d1-07-design-and-operating-effectiveness";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"cisa-d1-08-sampling-approaches.md": {
	id: "cisa-d1-08-sampling-approaches.md";
  slug: "cisa-d1-08-sampling-approaches";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"cisa-d1-09-sample-size-and-exceptions.md": {
	id: "cisa-d1-09-sample-size-and-exceptions.md";
  slug: "cisa-d1-09-sample-size-and-exceptions";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"cisa-d1-10-evidence.md": {
	id: "cisa-d1-10-evidence.md";
  slug: "cisa-d1-10-evidence";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"cisa-d1-11-test-methods-and-caats.md": {
	id: "cisa-d1-11-test-methods-and-caats.md";
  slug: "cisa-d1-11-test-methods-and-caats";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"cisa-d1-12-findings-reporting-follow-up.md": {
	id: "cisa-d1-12-findings-reporting-follow-up.md";
  slug: "cisa-d1-12-findings-reporting-follow-up";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"itgc-foundations-design-vs-operating.md": {
	id: "itgc-foundations-design-vs-operating.md";
  slug: "itgc-foundations-design-vs-operating";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"itgc-foundations-evidence-that-holds-up.md": {
	id: "itgc-foundations-evidence-that-holds-up.md";
  slug: "itgc-foundations-evidence-that-holds-up";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
"itgc-foundations-what-itgc-are.md": {
	id: "itgc-foundations-what-itgc-are.md";
  slug: "itgc-foundations-what-itgc-are";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
