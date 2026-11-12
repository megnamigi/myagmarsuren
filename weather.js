/* Fixed Ulaanbaatar city weather; no device location is requested. */
(() => {
  const box = document.querySelector('.city-weather');
  const main = box.querySelector('.weather-main');
  const heading = document.getElementById('weather-heading');
  const time = document.getElementById('weather-time');
  const temperature = document.getElementById('weather-temperature');
  const condition = document.getElementById('weather-condition');
  const icon = document.getElementById('weather-icon');
  const range = document.getElementById('weather-range');
  const status = document.getElementById('weather-status');
  const retry = document.getElementById('weather-retry');
  const timezone = 'Asia/Ulaanbaatar';
  const cacheKey = 'myagmarsuren-ub-weather-v1';
  const interval = 15 * 60 * 1000;
  const maxAge = 2 * 60 * 60 * 1000;
  const endpoint = 'https://api.open-meteo.com/v1/forecast?latitude=47.9184&longitude=106.9177&elevation=1350&current=temperature_2m,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FUlaanbaatar&forecast_days=1';
  const text = {
    en:{today:'TODAY',loading:'Loading weather…',unavailable:'Weather unavailable',cached:'Last available update',retry:'Retry',updated:'Updated',clear:'Clear sky',mostlyClear:'Mainly clear',partlyCloudy:'Partly cloudy',cloudy:'Overcast',fog:'Fog',drizzle:'Drizzle',freezingRain:'Freezing rain',rain:'Rain',snow:'Snow',storm:'Thunderstorm',unknown:'Current weather'},
    mn:{today:'ӨНӨӨДӨР',loading:'Цаг агаар татаж байна…',unavailable:'Цаг агаар татагдсангүй',cached:'Сүүлийн мэдээ',retry:'Дахин татах',updated:'Шинэчлэгдсэн',clear:'Цэлмэг',mostlyClear:'Багавтар үүлтэй',partlyCloudy:'Багавтар үүлтэй',cloudy:'Үүлэрхэг',fog:'Манантай',drizzle:'Шиврээ бороотой',freezingRain:'Мөстөх бороотой',rain:'Бороотой',snow:'Цастай',storm:'Аянга цахилгаантай',unknown:'Одоогийн цаг агаар'}
  };
  let data = null, fetchedAt = 0, busy = false, failed = false, nextRefresh = 0;
  const clockFormats = {
    en: new Intl.DateTimeFormat('en-GB',{timeZone:timezone,month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}),
    mn: new Intl.DateTimeFormat('mn-MN',{timeZone:timezone,month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'})
  };
  function renderClock() {
    const lang = document.documentElement.lang === 'mn' ? 'mn' : 'en';
    const now = new Date();
    const value = clockFormats[lang].format(now);
    time.hidden = false;
    if (time.textContent !== value) time.textContent = value;
    time.dateTime = now.toISOString();
    time.title = `${lang === 'mn' ? 'Одоогийн цаг' : 'Current time'} · Ulaanbaatar (UTC+8)`;
  }
  function cityDate() {
    const parts = new Intl.DateTimeFormat('en-US',{timeZone:timezone,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
    const part = name => parts.find(p => p.type === name).value;
    return `${part('year')}-${part('month')}-${part('day')}`;
  }
  function valid(value) {
    if (!value || value.date !== cityDate() || !Number.isFinite(value.observedAt)) return false;
    const age = Date.now() - value.observedAt;
    return age >= -5*60*1000 && age <= maxAge && [value.temperature,value.high,value.low].every(Number.isFinite) && value.low <= value.high && Number.isInteger(value.code);
  }
  function describe(code, day) {
    if (code===0) return ['clear',day ? '☀' : '☾'];
    if (code===1) return ['mostlyClear',day ? '☀' : '☾'];
    if (code===2) return ['partlyCloudy','☁'];
    if (code===3) return ['cloudy','☁'];
    if (code===45 || code===48) return ['fog','≋'];
    if ([51,53,55].includes(code)) return ['drizzle','☂'];
    if ([56,57,66,67].includes(code)) return ['freezingRain','☂'];
    if ([61,63,65,80,81,82].includes(code)) return ['rain','☂'];
    if ([71,73,75,77,85,86].includes(code)) return ['snow','❄'];
    if ([95,96,97,99].includes(code)) return ['storm','ϟ'];
    return ['unknown','○'];
  }
  function render() {
    renderClock();
    const lang = document.documentElement.lang === 'mn' ? 'mn' : 'en';
    const t = text[lang];
    const available = valid(data);
    box.setAttribute('aria-label',lang === 'mn' ? 'Улаанбаатарын цаг агаар' : 'Ulaanbaatar weather');
    box.setAttribute('aria-busy',String(busy));
    heading.textContent = t.today;
    retry.textContent = t.retry;
    retry.hidden = !failed;
    main.hidden = range.hidden = !available;
    if (available) {
      const [key,symbol] = describe(data.code,data.isDay);
      temperature.textContent = `${Math.round(data.temperature)}°C`;
      condition.textContent = t[key];
      icon.textContent = symbol;
      range.textContent = `↑ ${Math.round(data.high)}°  /  ↓ ${Math.round(data.low)}°`;
      main.title = `${t.updated}: ${clockFormats[lang].format(data.observedAt)} · Ulaanbaatar (UTC+8)`;
      status.textContent = failed ? t.cached : '';
      status.hidden = !failed;
    } else {
      temperature.textContent = '';
      condition.textContent = '';
      range.textContent = '';
      main.removeAttribute('title');
      status.hidden = false;
      status.textContent = busy ? t.loading : t.unavailable;
    }
  }
  function parse(payload) {
    const current = payload.current, daily = payload.daily;
    if (!current || !daily || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(current.time) || !Number.isFinite(payload.utc_offset_seconds)) throw new Error('Invalid weather response');
    const observedAt = Date.parse(current.time+':00Z') - payload.utc_offset_seconds*1000;
    const value = {date:daily.time?.[0],observedAt,temperature:current.temperature_2m,code:current.weather_code,isDay:current.is_day===1,high:daily.temperature_2m_max?.[0],low:daily.temperature_2m_min?.[0]};
    if (!valid(value)) throw new Error('Weather is not current for Ulaanbaatar');
    return value;
  }
  async function refresh(force = false) {
    if (busy || document.hidden || (!force && Date.now() < nextRefresh)) return;
    busy = true; render();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(),10000);
    try {
      const response = await fetch(endpoint,{signal:controller.signal,credentials:'omit',referrerPolicy:'no-referrer'});
      if (!response.ok) throw new Error('Weather service unavailable');
      data = parse(await response.json()); fetchedAt = Date.now(); failed = false;
      nextRefresh = fetchedAt + interval;
      try { localStorage.setItem(cacheKey,JSON.stringify({data,fetchedAt})); } catch {}
    } catch {
      failed = true;
      nextRefresh = Date.now() + 5*60*1000;
      if (!valid(data)) data = null;
    } finally {
      clearTimeout(timeout); busy = false; render();
    }
  }
  try {
    const cached = JSON.parse(localStorage.getItem(cacheKey));
    if (valid(cached?.data) && Number.isFinite(cached.fetchedAt) && cached.fetchedAt <= Date.now()) {
      data = cached.data; fetchedAt = cached.fetchedAt;
      nextRefresh = fetchedAt + interval;
    }
  } catch {}
  retry.addEventListener('click',() => refresh(true));
  window.addEventListener('portfolio:language',render);
  window.addEventListener('online',() => refresh(true));
  document.addEventListener('visibilitychange',() => { render(); refresh(); });
  window.addEventListener('portfolio:experience',() => { if(document.documentElement.dataset.experience==='entry') { render(); refresh(); } });
  // Recheck the Ulaanbaatar date even if the tab stays open across midnight.
  setInterval(() => { if(!document.hidden) { if(data && data.date!==cityDate()) nextRefresh=0; render(); refresh(); } },60000);
  // The city clock follows real time, independently of weather observation times.
  setInterval(() => { if(!document.hidden) renderClock(); },1000);
  render(); refresh();
})();
