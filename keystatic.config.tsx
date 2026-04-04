import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'JakubLaskus',
      name: 'mysource-website',
    },
  },
  collections: {
    blog: collection({
      label: 'Insights',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Tytuł' } }),
        excerpt: fields.text({ label: 'Opis (excerpt)', multiline: true }),
        date: fields.date({ label: 'Data publikacji' }),
        author: fields.text({ label: 'Autor' }),
        coverImage: fields.image({
          label: 'Zdjęcie główne',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tagi',
          itemLabel: (props) => props.value,
        }),
        draft: fields.checkbox({ label: 'Szkic (nie publikuj)', defaultValue: false }),
        content: fields.markdoc({ label: 'Treść' }),
      },
    }),
  },
});
