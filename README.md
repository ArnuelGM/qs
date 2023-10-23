# qs
Parse literal objects to query string in deep.

```JavaScript
console.log(qs({
  name: 'arnuel gutierrez menco',
  age: -1,
  technology: {
    languages: {
      web: {
        programming: [
          {
            JavaScript: ['Angular', 'Vue.JS']
          }, 
          'TypeScript', 
          {
            PHP: ['Slim MicroFramework', 'Laravel']
          }
        ],
        style: ['CSS', 'TailwindCSS', 'BootstrapCSS'],
        markup:  ['HTML']
      },
      others: ['Java']
    },
    others: [
      'Docker',
      'Docker-compose',
      'Kubernetes',
      'Nginx',
      { 
        nodejs: ['Express', 'NestJS', 'Socket.io'] 
      },
      ['MySql', 'SQL Server', 'Sqlite', 'PostgreSQL'],
      'Linux'
    ]
  }
}))

// name=arnuel gutierrez menco&age=-1&technology[languages][web][programming][0][JavaScript][0]=Angular&technology[languages][web][programming][0][JavaScript][1]=Vue.JS&technology[languages][web][programming][1]=TypeScript&technology[languages][web][programming][2][PHP][0]=Slim MicroFramework&technology[languages][web][programming][2][PHP][1]=Laravel&technology[languages][web][style][0]=CSS&technology[languages][web][style][1]=TailwindCSS&technology[languages][web][style][2]=BootstrapCSS&technology[languages][web][markup][0]=HTML&technology[languages][others][0]=Java&technology[others][0]=Docker&technology[others][1]=Docker-compose&technology[others][2]=Kubernetes&technology[others][3]=Nginx&technology[others][4][nodejs][0]=Express&technology[others][4][nodejs][1]=NestJS&technology[others][4][nodejs][2]=Socket.io&technology[others][5][0]=MySql&technology[others][5][1]=SQL Server&technology[others][5][2]=Sqlite&technology[others][5][3]=PostgreSQL&technology[others][6]=Linux
```
