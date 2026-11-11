document.addEventListener('DOMContentLoaded',()=>{
  const dataElement=document.getElementById('patient-data');if(!dataElement)return;
  const stories=JSON.parse(dataElement.textContent);let current=0;
  const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const grid=document.getElementById('patient-grid');
  function card(story){
    return `<article class="patient-card"><button type="button" class="patient-card__select" data-story="${escape(story.id)}" aria-label="Читать историю: ${escape(story.name)}"><span class="patient-card__photo"><img src="assets/${escape(story.image)}" alt="${escape(story.name)}: демонстрационный портрет" width="1536" height="1024" loading="lazy"><span class="illustration-label">Фото сгенерировано</span></span><span class="patient-card__body"><span class="story-category">${escape(story.category)}</span><strong>${escape(story.name)}</strong><span class="patient-card__description">${escape(story.description)}</span><span class="story-teaser__link">Читать историю ↗</span></span></button></article>`;
  }
  function show(index,{scroll=false,updateHash=true}={}){
    current=(index+stories.length)%stories.length;const story=stories[current];
    document.getElementById('feature-name').textContent=story.name;
    document.getElementById('feature-category').textContent=story.category;
    document.getElementById('feature-subtitle').textContent=story.title;
    document.getElementById('feature-description').textContent=story.description;
    const img=document.getElementById('feature-image');img.src=`assets/${story.image}`;img.alt=`${story.name}: демонстрационный портрет`;
    grid.innerHTML=stories.filter((_,i)=>i!==current).map(card).join('');
    if(updateHash)history.replaceState(null,'',`#${story.id}`);
    if(scroll){const title=document.getElementById('feature-name');title.tabIndex=-1;title.focus({preventScroll:true});document.getElementById('story-focus').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});}
  }
  grid.addEventListener('click',event=>{const button=event.target.closest('[data-story]');if(!button)return;const index=stories.findIndex(story=>story.id===button.dataset.story);if(index>=0)show(index,{scroll:true});});
  document.querySelector('[data-story-next]').addEventListener('click',()=>show(current+1));
  document.querySelector('[data-story-prev]').addEventListener('click',()=>show(current-1));
  function fromHash(){const index=stories.findIndex(story=>story.id===location.hash.slice(1));if(index>=0)show(index,{updateHash:false});}
  window.addEventListener('hashchange',fromHash);fromHash();
});
