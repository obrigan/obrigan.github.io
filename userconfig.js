const CONFIG = new Config({
  crypto: {
    coin: 'BTC',
    currency: 'USD',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Shushary',
    scale: 'C'
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ya.ru/search/?text=', 'ya.ru'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: [],
  
  openLastVisitedTab: false,
  
  tabs: [
    {
      name: 'social',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'social',
        links: [
          {
            name: '/twitch/',
            url: 'https://twitch.com',
            icon: 'ti ti-brand-twitch',
            icon_color: '#9146FF'
          },
          {
            name: '/trovo/',
            url: 'https://trovo.live/games/LineageII',
            icon: 'ti ti-brand-trovo',
            icon_color: '#9146FF'
          },
          {
            name: '/youtube/',
            url: 'https://youtube.com',
            icon: 'ti ti-brand-youtube',
            icon_color: '#DB4437'
          },
          {
            name: '/pikabu/',
            url: 'http://pikabu.ru/',
            icon: 'book'
          },
          {
            name: '/vk/',
            url: 'https://vk.com',
            icon: 'ti ti-brand-vk',
            icon_color: '#17A9FD'
          },
          
        ]
      },
      {
        name: 'google',
        links: [
          
          {
            name: '/google/',
            url: 'http://google.com',
            icon: 'ti ti-brand-google',
            icon_color: '#4285F4'
          },
          {
            name: '/gmail/',
            url: 'https://mail.google.com/mail/u/0/',
            icon: 'ti ti-brand-gmail',
            icon_color: '#ff4554'
          },
          {
            name: '/keep/',
            url: 'https://keep.google.com/',
            icon: 'ti ti-notes',
            icon_color: '#fbbc05'
          },
          {
            name: '/photos/',
            url: 'https://photos.google.com/?pli=1/',
            icon: 'ti ti-brand-google-photos',
            icon_color: '#0F9D58'
          },
          {
            name: '/maps/',
            url: 'https://www.google.com/maps',
            icon: 'ti ti-brand-google-maps',
            icon_color: '#ea4335'
          },
        ]
      },
      {
        name: 'forums',
        links: [
          {
            name: '/darkside/',
            url: 'https://www.darkside.ru/news/',
            icon: 'ti ti-music-check',
            icon_color: '#F4B400b'
            
          },
          {
            name: '/drive2/',
            url: 'https://www.drive2.ru/',
            icon: 'ti ti-car',
            icon_color: '#F4B400b'
          },
          {
            name: '/4pda/',
            url: 'https://4pda.to/forum/index.php?showtopic=1045442',
            icon: 'ti ti-device-mobile-code',
            icon_color: '#F4B400b'
          },
          {
            name: '/govorim.us/',
            url: 'https://forum.govorimpro.us/',
            icon: 'ti ti-notes',
            icon_color: '#F4B400b'
          },
          {
            name: '/pb/',
            url: 'https://pb.wtf/',
            icon: 'ti ti-world-download',
            icon_color: '#F4B400b'
          },
          {
            name: '/trntgms/',
            url: 'https://torrent-games.net/',
            icon: 'ti ti-world-download',
            icon_color: '#F4B400b'
          },
          {
            name: '/defo/',
            url: 'https://danieldefo.ru/',
            icon: 'ti ti-device-gamepad',
            icon_color: '#F4B400b'
          }
        ]
      }
      ]
    },
    {
      name: 'bkmrks',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'rndm',
          links: [
            {
              name: "yamusic",
              url: 'https://music.yandex.ru/home',
              icon: 'ti ti-brand-yandex',
              icon_color: '#ffba00'
            },
            {
              name: "psdly",
              url: "https://www.psdly.com/",
              icon: "ti ti-brand-producthunt",
              icon_color: "#a59b66",
            },
            {
              name: "2ch",
              url: "https://2ch.hk/",
              icon: "ti ti-brand-4chan",
              icon_color: "#f4a460",
            },
          ]
        },
        {
          name: 'other',
          links: [
            {
              name: '/ixbt/',
              url: 'https://www.ixbt.com/',
              icon: 'ti ti-devices-pc'
            },
            {
              name: '/overclockers/',
              url: 'https://forums.overclockers.ru/viewforum.php?f=54&sid=0ec54cd9dfa8519b7f5702a39ba8f2cc',
              icon: 'ti ti-devices-pc'
            },
            {
              name: "mmo-dev",
              url: "https://mmo-dev.info/threads/%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82-%D0%9C%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8.22785/unread",
              icon: "ti ti-brand-producthunt",
              icon_color: "#a9b665",
            },
            {
              name: "mmo-dev",
              url: "https://mmo-dev.info/threads/%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82-%D0%9C%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8.22785/unread",
              icon: "ti ti-brand-producthunt",
              icon_color: "#a9b665",
            },
            {
              name: "cybersport",
              url: "https://www.cybersport.ru/tags/dota-2",
              icon: "ti ti-brand-producthunt",
              icon_color: "#a9b665",
            },
            {
              name: "mmo-dev",
              url: "https://mmo-dev.info/threads/%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82-%D0%9C%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8.22785/unread",
              icon: "ti ti-brand-producthunt",
              icon_color: "#a9b665",
            },
          ]
        }
      ]
    },
    {
      name: 'tech',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'subs',
          links: [
            {
              name: 'goha',
              url: 'https://forums.goha.ru/forumdisplay_0_0_129'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },
        {
          name: 'blogs',
          links: [
            {
              name: 'fasterthanli',
              url: 'https://fasterthanli.me/articles',
              icon: 'anchor'
            },
            {
              name: 'dev.to',
              url: 'https://dev.to'
            },
            {
              name: 'mataroa.blog',
              url: 'https://collection.mataroa.blog',
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox'
            },
            {
              name: ' docs',
              url: 'https://doc.rust-lang.org/book/',
              icon: 'notebook',
              icon_color: '#977a3a'
            }
          ]
        }
      ]
    }]
});

