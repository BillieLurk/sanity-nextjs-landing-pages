export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63612e99a824d048d276409b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2xdtmmni',
                  apiId: '3ad1fa78-d3aa-4144-8dc8-de103d42f75d'
                },
                {
                  buildHookId: '63612e9a8438bf460bd425ed',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tzae2met',
                  apiId: 'eeaa2c35-4e3d-40a5-8705-50a8f20357e8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BillieLurk/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tzae2met.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
