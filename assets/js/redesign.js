/* Local prototype interactions. No personal information is stored or sent. */
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-new-quiz]').forEach(form=>{
    const panels=[...form.querySelectorAll('[data-quiz-panel]')];
    const back=form.querySelector('[data-quiz-back]'), next=form.querySelector('[data-quiz-next]'), submit=form.querySelector('[data-quiz-submit]');
    let current=0;
    function show(index,focus=false){
      current=index;panels.forEach((panel,i)=>{panel.hidden=i!==index;panel.disabled=i!==index;});
      form.querySelector('[data-step-label]').textContent=`Шаг ${index+1} из ${panels.length}`;
      form.querySelector('.quiz-progress i').style.width=`${(index+1)/panels.length*100}%`;
      back.disabled=index===0;next.hidden=index===panels.length-1;submit.hidden=index!==panels.length-1;
      form.querySelector('.quiz-error').textContent='';
      next.disabled=!panels[index].querySelector('input[type=radio]:checked');
      if(index===panels.length-1){
        form.querySelector('[data-quiz-summary]').textContent=panels.slice(0,-1).map(p=>p.querySelector('input:checked')?.value).filter(Boolean).join(' · ');
      }
      if(focus){const legend=panels[index].querySelector('legend');legend.tabIndex=-1;legend.focus({preventScroll:true});}
    }
    form.addEventListener('change',()=>{next.disabled=!panels[current].querySelector('input[type=radio]:checked');});
    next.addEventListener('click',()=>{if(panels[current].querySelector('input[type=radio]:checked'))show(current+1,true);});
    back.addEventListener('click',()=>show(current-1,true));
    form.addEventListener('submit',event=>{event.preventDefault();form.querySelector('.quiz-error').textContent='Отправка заявок пока не подключена. Ваши ответы остались на этой странице. Позвоните нам: +7 (495) 822-77-11.';});
    show(0);
  });
  const tabs=[...document.querySelectorAll('[data-level]')];
  const levels=['Пальцы','Кисть','Предплечье','Плечо'];
  const options=[['Косметические'],['Косметические','Рабочие','Активные','Бионические'],['Косметические','Рабочие','Активные','Бионические'],['Косметические','Рабочие','Активные','Бионические']];
  function select(index,focus=false){
    tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;});
    document.querySelector('[data-level-title]').textContent=levels[index];
    const photo=document.querySelector('#level-panel .type-photo');
    if(photo){
      photo.classList.toggle('type-photo--fingers',index===0);
      const img=photo.querySelector('img');
      img.src=index===0?'assets/cosmetic-finger-fitting.png':'assets/hero-hands.png';
      img.alt=index===0?'Специалист проводит примерку косметического протеза пальца':'Современный протез руки крупным планом';
    }
    const description=document.querySelector('#level-panel > p');
    if(description)description.textContent=index===0?'Индивидуальные косметические протезы пальцев. Подбираем форму, оттенок кожи и детализацию с учётом ваших пожеланий.':'Подберём решение с учётом уровня ампутации, повседневных задач и ваших пожеланий.';
    document.querySelector('[data-type-options]').classList.toggle('type-options--fingers',index===0);
    document.getElementById('level-panel').setAttribute('aria-labelledby',`level-tab-${index}`);
    document.querySelector('[data-type-options]').innerHTML=options[index].map(name=>name==='Косметические'?`<div class="cosmetic-type"><a href="cosmetics.html"><img src="assets/cosmetic-finger.png" alt="Косметический протез пальца" width="220" height="100"><b>${name} ↗</b><span>Индивидуальные протезы пальцев</span></a></div>`:`<div><b>${name}</b>Индивидуальный подбор на консультации</div>`).join('');
    if(focus)tabs[index].focus();
  }
  tabs.forEach((tab,i)=>{
    tab.addEventListener('click',()=>select(i));
    tab.addEventListener('keydown',event=>{let n=i;if(event.key==='ArrowDown'||event.key==='ArrowRight')n=(i+1)%tabs.length;else if(event.key==='ArrowUp'||event.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;else if(event.key==='Home')n=0;else if(event.key==='End')n=tabs.length-1;else return;event.preventDefault();select(n,true);});
  });
  if(tabs.length)select(0);
  // Preserve the original text, while leaving unfilled media areas empty.
  document.querySelectorAll('.case').forEach(card=>{
    if(card.textContent.includes('[уровень ампутации')){card.innerHTML='<div class="case__media" aria-label="Место для будущей истории пациента"></div><div class="case__body" style="min-height:90px"></div>';}
  });
  // The original inline demo forms also have no delivery endpoint.
  document.querySelectorAll('form[data-inline-form],form.js-inline-form').forEach(form=>{
    const replacement=form.cloneNode(true);form.replaceWith(replacement);
    const note=document.createElement('p');note.className='prototype-note';note.textContent='Демонстрационная форма. Отправка заявок пока не подключена.';replacement.prepend(note);
    replacement.addEventListener('submit',event=>{event.preventDefault();note.textContent='Заявка не отправлена. Позвоните для консультации: +7 (495) 822-77-11.';note.setAttribute('role','status');});
  });
  // Complete keyboard support for existing shared components.
  const modal=document.getElementById('leadModal');let previousFocus=null;
  const close=()=>{modal?.classList.remove('open');document.body.style.overflow='';previousFocus?.focus();};
  document.addEventListener('click',event=>{
    if(event.target.closest('[data-cta]')){previousFocus=event.target.closest('[data-cta]');setTimeout(()=>modal?.querySelector('input')?.focus(),0);}
    if(event.target.closest('[data-close]'))previousFocus?.focus();
    const toggle=event.target.closest('.nav-toggle');if(toggle)setTimeout(()=>toggle.setAttribute('aria-expanded',String(toggle.closest('.nav-item').classList.contains('open'))),0);
    if(event.target.closest('#burger'))setTimeout(()=>document.getElementById('burger')?.setAttribute('aria-expanded',String(document.getElementById('nav').classList.contains('nav--open'))),0);
    if(event.target.closest('#branchBtn'))setTimeout(()=>document.getElementById('branchBtn')?.setAttribute('aria-expanded',String(document.getElementById('branch').classList.contains('open'))),0);
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'){close();document.querySelectorAll('.nav-item.open,.branch.open').forEach(el=>el.classList.remove('open'));document.getElementById('nav')?.classList.remove('nav--open');document.querySelectorAll('[aria-expanded]').forEach(el=>el.setAttribute('aria-expanded','false'));}
    if(event.key==='Tab'&&modal?.classList.contains('open')){
      const focusable=[...modal.querySelectorAll('button,input,a[href]')].filter(el=>el.getClientRects().length&&!el.disabled);const first=focusable[0],last=focusable.at(-1);
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
    }
  });
  document.querySelectorAll('.nav-toggle,#burger,#branchBtn').forEach(el=>el.setAttribute('aria-expanded','false'));
  document.querySelectorAll('.branch__item').forEach(el=>{el.tabIndex=0;el.setAttribute('role','button');el.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();el.click();}});});
});
