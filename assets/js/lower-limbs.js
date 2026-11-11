document.addEventListener('DOMContentLoaded',()=>{
  const source=document.getElementById('lower-prosthetic-data');if(!source)return;
  const data=JSON.parse(source.textContent),tabs=[...document.querySelectorAll('[data-lower-level]')],panel=document.getElementById('lower-panel');
  function select(index,focus=false){
    tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;});
    const item=data[index];panel.setAttribute('aria-labelledby',`lower-tab-${index}`);
    panel.querySelector('[data-lower-title]').textContent=item.title;
    panel.querySelector('[data-lower-description]').textContent=item.description;
    const img=panel.querySelector('[data-lower-image]');img.src=`assets/${item.image}`;img.alt=`${item.title}: схема комплектации протеза`;
    const cards=panel.querySelector('[data-lower-cards]');cards.replaceChildren();
    item.cards.forEach(card=>{const article=document.createElement('article'),heading=document.createElement('h4'),text=document.createElement('p');heading.textContent=card.title;text.textContent=card.text;article.append(heading,text);cards.append(article);});
    if(focus)tabs[index].focus();
  }
  tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>select(index));
    tab.addEventListener('keydown',event=>{let next=index;if(['ArrowDown','ArrowRight'].includes(event.key))next=(index+1)%tabs.length;else if(['ArrowUp','ArrowLeft'].includes(event.key))next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;event.preventDefault();select(next,true);});
  });select(0);
});
