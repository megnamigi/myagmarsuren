/* A native Polaris cursor stays precise; a fading constellation follows it. */
(() => {
  const root=document.documentElement;
  const layer=document.getElementById('constellation-trail');
  const canvas=document.getElementById('cursor-stars');
  const ctx=canvas.getContext('2d');
  if(!ctx)return;
  const fine=matchMedia('(hover: hover) and (pointer: fine)');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const nodes=Array.from({length:16},()=>({x:0,y:0}));
  let active=false,inside=false,seeded=false,frame=0,last=0,lastMove=0,width=0,height=0;
  const target={x:0,y:0};
  const supported=typeof layer.showPopover==='function';
  if(!supported)layer.removeAttribute('popover');
  function eligible(){return root.dataset.experience==='entered'&&fine.matches&&!reduced.matches&&!document.hidden;}
  function resize(){
    width=innerWidth;height=innerHeight;
    const ratio=Math.min(devicePixelRatio||1,2);
    canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);
    ctx.setTransform(ratio,0,0,ratio,0,0);
  }
  function hide(){
    cancelAnimationFrame(frame);frame=0;seeded=false;
    ctx.clearRect(0,0,width,height);
    if(supported&&layer.matches(':popover-open'))layer.hidePopover();
    layer.hidden=true;
  }
  function raise(){
    if(!active||!inside)return;
    layer.hidden=false;
    if(supported&&!layer.matches(':popover-open')){
      try{layer.showPopover();}catch{layer.hidden=true;}
    }
  }
  function sync(){
    active=eligible();root.classList.toggle('constellation-cursor',active);
    if(!active)hide();
  }
  function star(x,y,r,alpha,rotation,dark){
    ctx.save();ctx.translate(x,y);ctx.rotate(rotation);
    ctx.globalAlpha=alpha;ctx.fillStyle=dark?'#f3e2b4':'#7c5a2b';
    ctx.shadowColor=dark?'#b5d5ff':'#fff4cc';ctx.shadowBlur=dark?7:4;
    ctx.beginPath();
    for(let i=0;i<8;i++){
      const angle=i*Math.PI/4-Math.PI/2;
      const radius=i%2===0?r:r*.23;
      const x=Math.cos(angle)*radius,y=Math.sin(angle)*radius;
      if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
    }
    ctx.closePath();ctx.fill();ctx.restore();
  }
  function animate(now){
    frame=0;
    if(!active||!inside){hide();return;}
    const dt=Math.min(.05,Math.max(.001,(now-last)/1000));last=now;
    const age=now-lastMove,fade=Math.max(0,1-Math.max(0,age-100)/850);
    ctx.clearRect(0,0,width,height);
    if(fade<=0){hide();return;}
    const dark=root.dataset.theme==='dark';
    let leader=target;
    for(let i=0;i<nodes.length;i++){
      const node=nodes[i];
      const ease=1-Math.exp(-dt*(25-i*.45));
      node.x+=(leader.x-node.x)*ease;node.y+=(leader.y-node.y)*ease;
      const gap=Math.hypot(node.x-target.x,node.y-target.y);
      const alpha=(1-i/nodes.length)*fade*Math.min(1,gap/24);
      if(i>0&&alpha>.02){
        const previous=nodes[i-1];
        ctx.strokeStyle=dark?`rgba(196,215,255,${alpha*.13})`:`rgba(118,84,35,${alpha*.12})`;
        ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(previous.x,previous.y);ctx.lineTo(node.x,node.y);ctx.stroke();
        star(node.x,node.y,(i%3===0?3.7:2.4)*(1-i/26),alpha*.9,now*.00025+i*.7,dark);
      }
      leader=node;
    }
    frame=requestAnimationFrame(animate);
  }
  window.addEventListener('pointermove',event=>{
    if(!eligible()||event.pointerType==='touch')return;
    active=true;inside=true;target.x=event.clientX;target.y=event.clientY;
    if(!seeded){nodes.forEach(n=>{n.x=target.x;n.y=target.y;});seeded=true;}
    lastMove=performance.now();raise();
    if(!frame){last=lastMove;frame=requestAnimationFrame(animate);}
  },{passive:true});
  function leave(){inside=false;hide();}
  root.addEventListener('pointerleave',leave);
  window.addEventListener('blur',leave);
  document.addEventListener('keydown',event=>{if(['Tab','Escape','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))leave();});
  window.addEventListener('resize',()=>{resize();hide();});
  window.addEventListener('portfolio:experience',sync);
  document.addEventListener('visibilitychange',sync);
  fine.addEventListener('change',sync);reduced.addEventListener('change',sync);
  // Keep the decorative trail above dialogs without receiving clicks or focus.
  const observer=new MutationObserver(()=>{
    if(supported&&active&&inside&&performance.now()-lastMove<950){
      if(layer.matches(':popover-open'))layer.hidePopover();
      raise();
    }
  });
  document.querySelectorAll('dialog').forEach(d=>observer.observe(d,{attributes:true,attributeFilter:['open']}));
  resize();sync();
})();
