// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'pjadhav5510', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    external: {
      display: true,
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Covid Data Analysis with ArcGIS Insights',
          description:
            'The first workbook depicts the case rate per 100k for each state in US along with the death rate and total cases. The second workbook shows us the trends over 5 states in the form of boxplot, linegraph and bar graph. ',
          imageUrl:
            'https://www.esri.com/content/dam/esrisites/en-us/common/icons/product-logos/Insights.png',
          link: 'https://insights.arcgis.com/#/view/95e848acda2246fcb4d7b5635c416eef',
        },
        {
          title: 'Analysis of Twitter Data in ArcGIS',
          description:
            'This map is based out of London where we can see different tweets made in different regions where we pin point the location with the help of latitude and longitude. The timeline is from June 27 2016 to July 03 2016',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/7/7e/ArcGIS_logo_%28cropped%29.png?20210321190132',
          link: 'https://sdsugeo.maps.arcgis.com/apps/mapviewer/index.html?layers=22f665bf2db94b75aa5c1c2953099c2c',
        },
        {
          title: 'US Homelessness Predictive Factors using Machine Learning',
          description:
            'In this project we define what are the different factors that results in the homelessness in the US. For more information please visit our website.',
          imageUrl:
            'https://cdn-icons-png.flaticon.com/512/4605/4605598.png',
          link: 'https://sites.google.com/sdsu.edu/sdsu-dataholics-homelessness/',
        },
        {
          title: 'Published Paper on Automatic Text Summarization',
          description:
            'This paper gives you a review on automatic text summarization. In this paper we have discussed about various automatic text summarizers and their algorithms. For more information visit the website.',
          imageUrl:
            'https://www.svgrepo.com/show/427119/journal.svg',
          link: 'http://sersc.org/journals/index.php/IJGDC/article/view/30498',
        },
      ],
    },
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['pjadhav5510/Fashion-Recommendation-using-images-as-features', 'pjadhav5510/Electric-vehicle-market-size','pjadhav5510/Leetcode-Solutions','pjadhav5510/Health-Data-Analysis','pjadhav5510/Finance-Data-Analysis','pjadhav5510/Sentimental-Analysis','pjadhav5510/Text-Summarizer'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },    
  },
  seo: {
    title: 'Portfolio of Piyush Jadhav',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'piyushjadhav04',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'pjadhav5510@sdsu.edu',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'R',
    'Java',
    'HTML5',
    'CSS',
    'JavaScript',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'PyTorch',
    'TensorFlow',
    'Keras',
    'PySpark',
    'LLM',
    'Natural Language Processing',
    'PowerBI',
    'Tableau',
    'ArcGIS',
    'AWS',
    'GCP',
  ],
  experiences: [
    {
      company: 'San Diego State University',
      position: 'Graduate Research Assistant',
      from: 'May 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'FIS',
      position: 'Machine Learning Engineer',
      from: 'March 2021',
      to: 'August 2022',
      companyLink: '',
    },
    {
      company: 'Analytics Quotient',
      position: 'Machine Learning Engineer intern',
      from: 'June 2020',
      to: 'November 2020',
      companyLink: '',
    },
  ],
  // certifications: [
  //   {
  //     name: '',
  //     body: '',
  //     year: '',
  //     link: '',
  //   },
  // ],
  educations: [
    {
      institution: 'San Diego State University',
      degree: 'Masters in Big Data Analytics',
      from: 'Aug 2022',
      to: 'May 2024',
    },
    {
      institution: 'University of Pune',
      degree: 'Bachelors in Computer Science',
      from: 'Aug 2016',
      to: 'May 2020',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/pjadhav5510"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
