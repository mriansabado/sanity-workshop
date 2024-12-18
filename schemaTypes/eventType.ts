import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (rule) => rule
        .required()
        .error('Required to generate a page on the website'),
        hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'eventType',
      type: 'string',
      options: {
        list: ['in-person', 'virtual'],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'date',
      type: 'datetime'
    }),
    defineField({
      name: 'doorsopen',
      description: 'Number of minutes before start time for admission',
      type: 'number',
      initialValue: 60
    }),
    defineField({
      name: 'venue',
      type: 'reference',
      to: [{ type: 'venue' }],
      readOnly: ({value, document}) => !value && document?.eventType === 'virtual',
      validation: (rule) =>
        rule.custom((value, context) => {
          if (value && context?.document?.eventType == 'virtual') {
            return 'Only in-person events can have a venue'
          }
          return true
        }),
    }),
    defineField({
      name: 'headline',
      type: 'reference',
      to: [{ type: 'artist' }]
    }),
    defineField({
      name: 'details',
      type: 'array',
      of:[{ type: 'block'}]
    }),
    defineField({
      name: 'tickets',
      type: 'url'
    })
  ],
})