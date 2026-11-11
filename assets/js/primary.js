document.addEventListener('DOMContentLoaded',()=>{
  const quiz=document.querySelector('[data-primary-quiz]');if(!quiz)return;
  const levels=quiz.querySelector('[data-primary-levels]');let direction='Нижние конечности';
  quiz.addEventListener('change',event=>{
    if(event.target.name!=='q1'||event.target.value===direction)return;
    direction=event.target.value;
    const choices=direction==='Верхние конечности'?['Пальцы','Кисть','Предплечье','Плечо','Нужна помощь специалиста']:['Стопа','Голень','Бедро','Нужна помощь специалиста'];
    levels.innerHTML=choices.map(label=>`<label class="answer"><input type="radio" name="q2" value="${label}"><span>${label}</span><i aria-hidden="true">↗</i></label>`).join('');
  });
});
