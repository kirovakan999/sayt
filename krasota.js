const youtubeUrls = [
    "https://www.youtube.com/embed/UYg-O0PThRQ?si=Oq0I0u2euGIQ0UFG",
    "https://www.youtube.com/embed/V6UnhbS-bOE?si=w-ETao0qe4b-u1_J",
    "https://www.youtube.com/embed/hRFY_Fesa9Q?si=p85GBBbCtpTEDTqt",
    "https://www.youtube.com/embed/_inKs4eeHiI?si=ypJo7_VyzCTQSbmp",
    "https://www.youtube.com/embed/6SN1zjz_OGo?si=NJd83-d5FHPK84lp",
  ];
  
  const videoContainer = document.querySelectorAll('.video-container'); // Получаем все контейнеры
  videoContainer.forEach(container => {
    youtubeUrls.forEach(url => {
      const iframe = document.createElement('iframe');
      iframe.width = '200';
      iframe.height = '115';
      iframe.src = url;
      iframe.title = 'YouTube video player';
      iframe.frameborder = '0';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowfullscreen = true;
      container.appendChild(iframe);
    });
  });
  
  