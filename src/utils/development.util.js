export default class Development {
  static addWindowStatsElement = () => {
    const style = {
      "background-color": "rgba(0,0,0,0.6)",
      "color": "#ffffff",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "font-size": "12px",
      "font-family": "monospace",
      "padding": "0 8px",
      "z-index": "1000000",
      "line-height": "1",
    };
    const windowStatsElement = document.createElement("div");
    for (let key in style) {windowStatsElement.style[key] = style[key];}
    document.body.insertBefore(windowStatsElement, document.body.firstChild);
    
    let browserName = null;
    const userAgent = navigator.userAgent.toLowerCase();
    if (/opera/.test(userAgent) || /opr/.test(userAgent)) {
      browserName = 'Opera';
    }
    else if (/edge/.test(userAgent)) {
      browserName ='Edge';
    }
    else if (/safari/.test(userAgent)) {
      browserName ='Safari';
    }
    else if (/firefox/.test(userAgent)) {
      browserName ='Firefox';
    }
    else if (/trident/.test(userAgent)) {
      browserName ='MsIE';
    } 
    else if (/chrome/.test(userAgent)) {
      browserName ='Chrome';
    } else {
      browserName ='Unknown';
    }
    const refreshWindowStats = function(){
      const viewPortWidth = document.documentElement.clientWidth;
      const viewPortHeight = document.documentElement.clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const template = `<div>V: ${viewPortWidth}x${viewPortHeight} | W: ${windowWidth}x${windowHeight} | S: ${screenWidth}x${screenHeight} | B: ${browserName}</div>`;
      windowStatsElement.innerHTML = template;
    };
    refreshWindowStats();
    window.addEventListener("resize", refreshWindowStats);
  }
}