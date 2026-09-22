// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Published papers, listed in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum vitae of Tianhao Huang.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-our-paper-jigsaw-taming-bev-centric-perception-on-dual-soc-for-autonomous-driving-has-been-accepted-to-rtss-2024-second-student-author",
          title: 'Our paper “Jigsaw: Taming bev-centric perception on dual-soc for autonomous driving” has been...',
          description: "",
          section: "News",},{id: "news-my-first-author-paper-repurpose-accel-sim-for-next-generation-nvidia-jetson-gpu-architectural-design-has-been-accepted-to-islped-2025",
          title: 'My first author paper “Repurpose Accel-Sim for Next Generation NVIDIA Jetson GPU Architectural...',
          description: "",
          section: "News",},{id: "news-attend-islped-2025-in-iceland-to-present-our-paper-as-a-poster-presentation",
          title: 'Attend ISLPED 2025 in Iceland to present our paper as a poster presentation!...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_TianhaoHuang.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%74%68_%32%30%30%33@%73%6A%74%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/phoenix-ZY", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=za6ZO9QAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
