import {defineField, defineType} from 'sanity'

export const venueType = defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
        name: 'slug',
        type: 'slug'
      }),
      defineField({
        name: 'eventType',
        type: 'string'
      }),
      defineField({
        name: 'date',
        type: 'datetime'
      }),
      defineField({
        name: 'doorsopen',
        type: 'number'
      }),
      defineField({
        name: 'venue',
        type: 'reference',
        to: { type: 'venue' }
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